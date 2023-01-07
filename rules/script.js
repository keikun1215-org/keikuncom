const rule={ja:`- ルール - 
> チャットへの書き込み
他人が不快になる言葉、ファイル、リンクの送信を禁止します。
端末に悪影響を与える(クラッシュGIFなど)言葉、ファイル、リンクの送信を禁止します。
ウィルスやマルウェアなどの入った、もしくはその可能性があるファイル、アーカイブの送信を禁止します。
(入っていない事がわかっていてもDM間でのやりとりをしてください。)
政治的発言を禁止します。
違法性のあるコンテンツの送信を禁止します。
性的な画像はR18チャンネルのみに送ってください。
> 荒らしの規制
他人への無意味なメンション、メンションの連投を禁止します。

その他のサーバーの秩序を乱す行為を禁止します。
処罰は管理者の判断です。`,en:`- Rules -
> Text & Files
Prohibit the transmission of words, files, or links that are offensive to others.
Prohibit the transmission of words, files, or links that may adversely affect the terminal (e.g., crashed GIFs).
You are prohibited from sending files or archives that contain or may contain viruses or malware.
(Please communicate between DMs even if you know they are not contained.)
Political statements are prohibited.
Transmission of illegal content is prohibited.
Please send sexual images only to R18 channels.

> Troll Must Get Ban
Pointless mention or mention repeatedly posted to others is prohibited.

Other acts that disturb the order of the server are prohibited.
Punishment is at the discretion of the administrator.`,ch:`- 规则-
> 聊天帖子
严禁发送对他人有攻击性的文字、文件或链接。
禁止传输对终端有负面影响的文字、文件或链接。（例如，崩溃的GIF）
禁止传输含有或可能含有病毒或恶意软件的文件或档案。
(即使你知道它们不在其中，也请在DM之间交换。)
禁止发表政治声明。
禁止传输非法内容。
性爱图片只应发送到R18频道。
> 对拖网的限制
禁止无意义地提及他人和连续提及。

禁止其他扰乱服务器秩序的行为。
惩罚是由管理员决定的。`},ri={ja:`理解したなら<a href="https://discord.com/api/oauth2/authorize?client_id=1028549464287354880&redirect_uri=https%3A%2F%2Fcommunity.keikun1215.cf%2Fverify&response_type=token&scope=identify%20guilds">ここを押してください</a>。`,en:'If understand, <a href="https://discord.com/api/oauth2/authorize?client_id=1028549464287354880&redirect_uri=https%3A%2F%2Fcommunity.keikun1215.cf%2Fverify&response_type=token&scope=identify%20guilds">click here</a>.',ch:`如果你明白，<a href="https://discord.com/api/oauth2/authorize?client_id=1028549464287354880&redirect_uri=https%3A%2F%2Fcommunity.keikun1215.cf%2Fverify&response_type=token&scope=identify%20guilds">请点击这里。</a>`};let i=0;const si0=setInterval(sih0,100);function sih0(){let e="Select Language: ";clid.textContent+=e[i],i==e.length-1&&(clearInterval(si0),clid.innerHTML+=`
<select onchange="lonc(this)" id="lang">
  <option value="">CLICK HERE</option>
  <option value="ja">日本語</option>
  <option value="en">English</option>
  <option value="ch">中文</option>
</select>`),i++}function lonc(e){let t=e.options[e.selectedIndex].value;clid.innerHTML+="<br>"+rule[t].replace(/\n/g,"<br>"),clid.innerHTML+="<br>"+ri[t]}
