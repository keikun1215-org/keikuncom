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
