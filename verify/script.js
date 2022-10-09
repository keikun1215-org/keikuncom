class Client {
  constructor (t) {
    this.token = t
  }
  getuser () {
    return new Promise((resolve, reject) => {
      fetch("https://discord.com/api/v9/users/@me", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${this.token}`
        }
      })
      .then(r=>r.json().then(resolve))
      .catch(reject)
    })
  }
  getguilds () {
    return new Promise((resolve, reject) => {
      fetch("https://discord.com/api/v9/users/@me/guilds", {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${this.token}`
        }
      })
      .then(r=>r.json().then(resolve))
      .catch(reject)
    })
  }
}
const _0 = ((o)=>{location.href.split("#")[1].split("&").forEach((v)=>{o[v.split("=")[0]]=v.split("=")[1]});return o})({})
const client = new Client(_0.access_token) 
const user = client.getuser()
  .then(d=>{
    client.getguilds()
      .then(gs => {
        if(!gs.find(g=>g.id=="1028186375490633769")) {
          document.body.textContent += "You have not joined my server."
        } else {
          const w = window.open("https://api.keikun1215.cf/private/community/verify?id="+d.id)
          setTimeout(()=>w.close(),1000)
        }
      })
      .catch(console.log)
  })
  .catch(console.log)
