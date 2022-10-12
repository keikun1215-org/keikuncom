(async()=>{
  const langc = (new URL(window.location.href)).searchParams.get('lang')||"en"
  const langr = await fetch("./lang.json")
  const lang = await langr.json()
  renderL(lang[langc])
})()
function renderL(l) {
  for(let [t, v] of Object.entries(l)) {
    [...document.getElementsByClassName(t)].forEach(e=>{
      e.innerHTML = v
    })
  }
}
function lc(e) {
  location.href = (()=>{let u=new URL(window.location.href);u.searchParams.set("lang", e.options[e.selectedIndex].value);return u})()
}
