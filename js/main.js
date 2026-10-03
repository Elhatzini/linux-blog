const root=document.documentElement, body=document.body;
const saved=localStorage.getItem("theme");
if(saved==="dark") body.classList.add("dark");
const themeBtn=document.getElementById("themeBtn");
if(themeBtn) themeBtn.addEventListener("click",()=>{body.classList.toggle("dark");localStorage.setItem("theme",body.classList.contains("dark")?"dark":"light");themeBtn.textContent=body.classList.contains("dark")?"☀️":"🌙"});
const menuBtn=document.getElementById("menuBtn"), nav=document.getElementById("mainNav");
if(menuBtn) menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const search=document.getElementById("search"), cards=[...document.querySelectorAll(".article-card")], count=document.getElementById("resultCount"), noResults=document.getElementById("noResults");
function filterArticles(term="",category=""){let n=0;cards.forEach(c=>{const text=(c.dataset.title+" "+c.dataset.category+" "+c.textContent).toLowerCase();const ok=(!term||text.includes(term.toLowerCase()))&&(!category||c.dataset.category===category);c.style.display=ok?"flex":"none";if(ok)n++});if(count)count.textContent=n+" άρθρα";if(noResults)noResults.hidden=n>0}
filterArticles();
if(search)search.addEventListener("input",e=>filterArticles(e.target.value));
document.querySelectorAll(".category").forEach(c=>c.addEventListener("click",()=>{filterArticles("",c.dataset.filter);if(search)search.value=""}));
document.querySelectorAll("pre").forEach(pre=>{const b=document.createElement("button");b.textContent="Copy";b.className="copy-btn";b.onclick=()=>navigator.clipboard.writeText(pre.innerText).then(()=>{b.textContent="Copied!";setTimeout(()=>b.textContent="Copy",1200)});pre.parentElement.style.position="relative";pre.appendChild(b)});
