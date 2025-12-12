import React, { useState } from 'react'
import scenarios from '../data/scenarios.json'

export default function SupportTriage(){
const [caseItem, setCaseItem] = useState(scenarios.support[0])
const [resolution, setResolution] = useState('')

function runSteps(){
const next = caseItem.steps.join('\n')
alert('Suggested triage steps:\n'+next)
}

return (
<div>
<div className="card">
<h2>Support Triage Lab</h2>
<label>Select a support case</label>
<select value={caseItem.id} onChange={e=>setCaseItem(scenarios.support.find(s=>s.id===e.target.value))}>
{scenarios.support.map(s=> <option key={s.id} value={s.id}>{s.title}</option>)}
</select>

<div style={{marginTop:12}}>
<h4>Symptoms</h4>
<p><small>{caseItem.symptoms}</small></p>
<h4>Logs</h4>
<p><small>{caseItem.logs}</small></p>

<h4>Draft Resolution</h4>
<textarea rows={5} value={resolution} onChange={e=>setResolution(e.target.value)} placeholder="Describe actions taken and escalation notes..."></textarea>

<div style={{marginTop:12}}>
<button onClick={runSteps}>Run suggested triage steps</button>
<button style={{marginLeft:8}} onClick={()=>alert('Resolution saved (demo)')}>Save Resolution</button>
</div>
</div>
</div>
</div>
)
}