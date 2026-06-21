
const roadmap=[
{quarter:'Q3 2026',title:'Team Collaboration',status:'progress',progress:60},
{quarter:'Q3 2026',title:'Advanced Analytics',status:'progress',progress:45},
{quarter:'Q4 2026',title:'Mobile App (iOS)',status:'planned'},
{quarter:'Q4 2026',title:'Notifications Center',status:'planned'},
{quarter:'Q1 2027',title:'AI Assistant',status:'planned'},
{quarter:'Q1 2027',title:'Workflow Builder',status:'planned'},
{quarter:'Q2 2027',title:'Authentication',status:'completed'},
{quarter:'Q2 2027',title:'Dashboard v1',status:'completed'}
];

function render(filter='all'){
 const quarters=[...new Set(roadmap.map(x=>x.quarter))];
 document.getElementById('timeline').innerHTML=quarters.map(q=>{
   const items=roadmap.filter(r=>r.quarter===q && (filter==='all'||r.status===filter));
   return `
   <div class="quarter">
      <div class="marker"></div>
      <div class="line"></div>
      <h3>${q}</h3>
      ${items.map(i=>`
        <div class="card ${i.status}">
          <span class="badge">${i.status}</span>
          <h4>${i.title}</h4>
          ${i.progress?`<progress max="100" value="${i.progress}" style="width:100%"></progress>`:''}
        </div>
      `).join('')}
   </div>`;
 }).join('');
}

document.querySelectorAll('.filter').forEach(btn=>{
 btn.onclick=()=>{
   document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
   btn.classList.add('active');
   render(btn.dataset.filter);
 }
});

document.getElementById('themeToggle').onclick=()=>{
 document.body.classList.toggle('dark');
};

render();
