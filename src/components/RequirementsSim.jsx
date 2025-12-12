import mermaid from 'mermaid'
import React, { useEffect, useState } from 'react'
import scenarios from '../data/scenarios.json'

export default function RequirementsSim(){
const [selected, setSelected] = useState(scenarios.requirements[0])
const [notes, setNotes] = useState('')
const [diagram, setDiagram] = useState('')

useEffect(()=>{ mermaid.initialize({startOnLoad:false, theme: 'default'}) },[])

useEffect(()=>{
const d = `graph LR\nA[Request: ${selected.title}] --> B[Requirements]\nB --> C{Acceptance Criteria}\nC --> D[UAT]\nC --> E[Dev Task]`
setDiagram(d)
},[selected])

useEffect(()=>{
if(diagram){
try{ mermaid.parse(diagram) }catch(e){ /* ignore parse until render */ }
mermaid.mermaidAPI.render('mermaidDiagram', diagram, (svgCode)=>{
const holder = document.getElementById('mermaid-holder')
if(holder) holder.innerHTML = svgCode
})
}
},[diagram])

return (
<div>
<div className="card">
<h2>Requirements Simulator</h2>
<label>Select scenario</label>
<select value={selected.id} onChange={e=>setSelected(scenarios.requirements.find(s=>s.id===e.target.value))}>
{scenarios.requirements.map(s=> <option key={s.id} value={s.id}>{s.title} — {s.requestor}</option>)}
</select>

<div style={{marginTop:12}}>
<h4>Summary</h4>
<p><small>{selected.summary}</small></p>
<h4>Notes</h4>
<p><small>{selected.notes}</small></p>

<h4>Your Requirements & Questions</h4>
<textarea rows={6} value={notes} onChange={e=>setNotes(e.target.value)} placeholder="List missing info, acceptance criteria, who to notify..."></textarea>

<div style={{marginTop:12}}>
<button onClick={()=>alert('Saved to your portfolio (local only, demo)')}>Save Requirements</button>
</div>
</div>
</div>

<div className="card">
<h3>Auto-generated flow</h3>
<div id="mermaid-holder"></div>
</div>
</div>
)
}