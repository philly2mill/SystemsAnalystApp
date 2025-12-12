import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ProjectManager(){
const [tasks, setTasks] = useState([
{id: uuidv4(), title: 'Validate requirements', status:'todo'},
{id: uuidv4(), title: 'Create test cases', status:'todo'},
])
const [title, setTitle] = useState('')

function addTask(){
if(!title.trim()) return
setTasks(t=>[{id:uuidv4(),title, status:'todo'},...t])
setTitle('')
}

function toggleStatus(id){
setTasks(t=>t.map(x=> x.id===id ? {...x, status: x.status==='todo'?'done':'todo'} : x))
}

return (
<div>
<div className="card">
<h2>Project Manager</h2>
<p>Create tasks & mark status to simulate ownership and tracking.</p>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New task title" />
<div style={{marginTop:8}}>
<button onClick={addTask}>Add Task</button>
</div>

<div style={{marginTop:12}}>
<h4>Tasks</h4>
{tasks.map(t => (
<div key={t.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0'}}>
<div>
<strong>{t.title}</strong>
<div><small>Status: {t.status}</small></div>
</div>
<div>
<button onClick={()=>toggleStatus(t.id)}>{t.status==='todo'?'Mark Done':'Mark Todo'}</button>
</div>
</div>
))}
</div>
</div>

</div>
)
}