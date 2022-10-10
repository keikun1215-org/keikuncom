/*****
何見てんの
こんな汚いクソコードみて何が楽しいの
*****/
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
window.onloadTurnstileCallback = function () {
  turnstile.render('body', {
    sitekey: '0x4AAAAAAAAzzRzAZQn1rid4',
    callback: function(token) {
      location.href = "https://api.keikun1215.cf/private/community/verify?token="+_0.access_token
    },
  });
};
