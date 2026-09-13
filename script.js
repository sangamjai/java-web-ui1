function filterTable(){
  let q=document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('#userTable tr').forEach((r,i)=>{
    if(i==0) return;
    r.style.display=r.innerText.toLowerCase().includes(q)?'':'none';
  });
}
function addUser(){
  let name=document.getElementById('newUser').value;
  if(!name) return document.getElementById('msg').innerText='Please enter a name';
  let table=document.getElementById('userTable');
  let row=table.insertRow();
  row.innerHTML=`<td>#${Math.floor(Math.random()*900+100)}</td><td>${name}</td><td>Frontend</td><td><span class="badge green">Active</span></td>`;
  document.getElementById('msg').innerText=`User ${name} added with Vanilla JS - Ready to bind with JSP Model!`;
  document.getElementById('newUser').value='';
}
