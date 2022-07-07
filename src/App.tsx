import { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor'

function App() {
    const wrapperEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const getCodeValue = () => wrapperEditorRef.current?.getValue() || ''

    const renderEditor = (dom: HTMLDivElement, readOnly = false, theme = 'vs-dark') => {
        return monaco.editor.create(dom, {
            language: 'json',
            theme,
            minimap: {
                enabled: false
            },
            readOnly,
        })
    }

    const handleOnClick = () => {
        const code = getCodeValue()
        // @ts-ignore
        const sdk = window.webchat as Record<string, any>
        try {
            sdk.sendContext(JSON.parse(code))
        } catch (e) {
            sdk.sendContext(code)
        }
    }

    useEffect(() => {
        if (wrapperRef.current) {
            // @ts-ignore
            wrapperEditorRef.current = renderEditor(wrapperRef.current)
        }
        return () => {
            wrapperEditorRef.current?.dispose()
            wrapperEditorRef.current = null
        }
    }, [])

    return (
        <div className="App">
            <h3>Please edit your context (json) for studio arguments</h3>
            <div ref={wrapperRef} style={{ width: '100%', height: 460 }} />
            <div style={{ textAlign: 'center' }}>
                <button onClick={handleOnClick} style={{ background: '#3e048b', color: '#fff', fontSize: 16, padding: '12px 10px', cursor: 'pointer' }}>Click here send your context to TalkDeskWebChat</button>
            </div>
        </div>
    )
}

export default App
