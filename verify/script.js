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
      .catch(reject)
      .then(r=>r.json().then(resolve))
    })
  }
}
const _0 = ((o)=>{location.href.split("#")[1].split("&").forEach((v)=>{o[v.split("=")[0]]=v.split("=")[1]});return o})({})
const client = new Client(_0.access_token) 
const user = client.getuser()
  .then(d=>{
    
  })