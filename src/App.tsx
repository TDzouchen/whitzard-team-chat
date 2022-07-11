import React, { useState, useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor'

interface FormItem {
  key: string;
  value: string;
  keyErr?: string;
  valueErr?: string;
}

const initialFormItems: FormItem[] = [
  { key: 'field_custom1', value: 'hello world1' },
  { key: 'field_custom2', value: 'hello world2' },
  { key: 'field_custom3', value: 'hello world3' },
]

function App() {
  const [formItems, setFormItems] = useState<FormItem[]>(initialFormItems);

  const wrapperEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const setCodeValue = (code: string) => wrapperEditorRef.current?.setValue(code) || ''
  const getCodeValue = () => wrapperEditorRef.current?.getValue() || ''

  const renderEditor = (dom: HTMLDivElement, readOnly = false, theme = 'vs-dark') => {
    return monaco.editor.create(dom, {
      language: 'json',
      theme,
      minimap: {
        enabled: false
      },
      tabSize: 2,
      readOnly
    })
  }

  const handleOnView = (payload: FormItem[] = []) => {
    if (!wrapperEditorRef.current || !formItems.length || formItems.some(item => item.keyErr || item.valueErr)) {
      return
    }

    const obj = payload.reduce((obj, item) => {
      if (item.key) {
        obj[item.key] = item.value
      }
      return obj
    }, {} as Record<string, any>)

    setCodeValue(JSON.stringify(obj, null, 2))
  }

  const handleOnApply = () => {
    const code = getCodeValue()
    // @ts-ignore
    const sdk = window.webchat as Record<string, any>
    try {
      sdk.sendContext(JSON.parse(code))
    } catch (e) {
      sdk.sendContext(code)
    }
  }

  const clearSession = () => {
    localStorage.clear()
    sessionStorage.clear()
    alert('Clear session success')
    window.location.reload()
  }

  const onAdd = () => {
    setFormItems(prev => prev.concat({ key: '', value: '' }))
  }

  const onRemove = (index: number) => {
    setFormItems(prev => {
      const _prev = [...prev]

      _prev.splice(index, 1)

      handleOnView(_prev)

      return _prev
    })
  }

  const onKeyChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const keyErr = !/^[a-zA-Z_]([a-zA-Z0-9]+)?$/g.test(value) ? 'Key should be a valid variable' : ''

    setFormItems(prev => {
      const _prev = [...prev]

      _prev[index] = {
        ..._prev[index],
        keyErr,
        key: value
      }

      handleOnView(_prev)

      return _prev
    })
  }

  const onValueChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const valueErr = /({|}|\[|\]|undefined|null)/g.test(value) ? 'Value should be string or number' : '';

    setFormItems(prev => {
      const _prev = [...prev]

      _prev[index] = {
        ..._prev[index],
        valueErr,
        value
      }

      handleOnView(_prev)

      return _prev
    })
  }

  useEffect(() => {
    if (wrapperRef.current) {
      // @ts-ignore
      wrapperEditorRef.current = renderEditor(wrapperRef.current)
      wrapperEditorRef.current.focus()
      handleOnView(formItems)
    }
    return () => {
      wrapperEditorRef.current?.dispose()
      wrapperEditorRef.current = null
    }
  }, [])

  return (
    <div className="App">
      <div className="c-header space-between">
        <div>
          <p className="c-title">Studio Context Editor</p>
          <p className="c-description">The context you configured will be set into the studio arguments as Json data structure.</p>
        </div>
        <div>
          <button onClick={() => handleOnView(formItems)} className="c-button">View Context</button>
          <button onClick={handleOnApply} className="c-button">Apply Context</button>
          <button onClick={clearSession} className="c-button">Clear session</button>
        </div>
      </div>
      <div className="c-split-wrapper space-between">
        <div className="c-split-left">
          {
            formItems.map((item, index, arr) => {
              const moreThanOne = arr.length !== 1

              return (
                <div className="c-form-item" key={index}>
                  <div className={`c-form-item-ipt ${item.keyErr ? 'error' : ''}`}>
                    <input
                      placeholder="Key"
                      value={item.key}
                      onChange={(e) => onKeyChange(index, e)}
                    />
                    {
                      item.keyErr && <p>{item.keyErr}</p>
                    }
                  </div>
                  <div className={`c-form-item-ipt ${item.valueErr ? 'error' : ''}`}>
                    <input
                      placeholder="Value"
                      value={item.value}
                      onChange={(e) => onValueChange(index, e)}
                    />
                    {
                      item.valueErr && <p>{item.valueErr}</p>
                    }
                  </div>
                  <div className="c-form-item-actions">
                    <i title="Add" onClick={onAdd}>+</i>
                    {
                      moreThanOne && <i title="Remove" onClick={() => onRemove(index)}>-</i>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div ref={wrapperRef} className="c-split-right c-editor-wrapper" />
      </div>
    </div>
  )
}

export default App
