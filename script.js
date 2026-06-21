
const roadmap = [
 {quarter:'Q3 2026',title:'Mobile App',status:'progress'},
 {quarter:'Q3 2026',title:'Analytics',status:'planned'},
 {quarter:'Q4 2026',title:'Notifications Center',status:'planned'},
 {quarter:'Q4 2026',title:'API Platform',status:'progress'},
 {quarter:'Q1 2027',title:'AI Assistant',status:'planned'},
 {quarter:'Q1 2027',title:'Workflow Builder',status:'planned'},
 {quarter:'Q2 2027',title:'Authentication',status:'completed'}
];

function render(filter='all'){
 const quarters=[...new Set(roadmap.map(r=>r.quarter))];
 const container=document.getElementById('timeline');
 container.className='timeline';

 container.innerHTML=quarters.map(q=>{
   const items=roadmap.filter(r=>r.quarter===q && (filter==='all'||r.status===filter));
   return `<div class="quarter">
      <h2>${q}</h2>
      <div class="line"></div>
      ${items.map(i=>`
      <div class="card ${i.status}">
        <span class="badge">${i.status}</span>
        <h3>${i.title}</h3>
      </div>`).join('')}
   </div>`;
 }).join('');
}

document.querySelectorAll('.filter').forEach(btn=>{
 btn.onclick=()=>{
   document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
   btn.classList.add('active');
   render(btn.dataset.filter);
 };
});

render();
