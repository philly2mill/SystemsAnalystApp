import React, { useState } from 'react'

export default function DocumentationLab(){
const [doc, setDoc] = useState('')

function exportDoc(){
const blob = new Blob([doc], {type:'text/plain'})
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'requirements.txt'
a.click()
URL.revokeObjectURL(url)
}

return (
<div>
<div className="card">
<h2>Documentation Lab</h2>
<p>Create requirement documents, test plans, or quick KB articles and export them.</p>
<textarea rows={12} value={doc} onChange={e=>setDoc(e.target.value)} placeholder="Write a short requirements doc or test plan..."></textarea>
<div style={{marginTop:12}}>
<button onClick={exportDoc}>Export as .txt</button>
</div>
</div>
</div>
)
}