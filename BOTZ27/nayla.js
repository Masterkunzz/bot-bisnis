/*
Base Rimurubot!
Jangan Hapus Nama Nayla, Rimurubot, Yeriko Di Sini!!
Terutama Nama Nayla/Rimurubot!!
Harga Creator Script
Makasih!!
*/

/* 
Base md ga kaya Baileys lama
kalo butuh bantuan chat aja
gausah asal add 
nnti error
*/

const respon = require('./lib/respon.js');
const iklan = require('./admin/iklan.js');
const { generateWAMessageFromContent, proto, generateWAMessage, downloadContentFromMessage } = require('@adiwajshing/baileys');
const { color, bgcolor } = require('./lib/color')
const fs = require('fs');
const imgbb = require('imgbb-uploader')
const hx = require('hxz-api');
const ffmpeg = require('fluent-ffmpeg')
const chalkanim = require('chalk-animation');
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process")
const { fetch, downloadSaveImgMsg } = require('./lib/anu.js');
const { wait, simih, getBuffer, h2k } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const session = require('./session.json');
const { addATM, confirmATMM, addKoinUser, checkATMuser, bayarLimit, confirmATM, limitAdd } = require('./lib/limitatm.js')
moment.tz.setDefault('Asia/Jakarta').locale("id");
const setting = JSON.parse(fs.readFileSync('./admin/settings.json')) 
const tebakgambar = JSON.parse(fs.readFileSync('./game/tebakgambar.json'))
const tebakkimia = JSON.parse(fs.readFileSync('./game/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./game/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./game/tebakbendera.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./game/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./game/tebakjenaka.json'))
termux = fs.readFileSync(`./media/sticker/termux.webp`) 
cangkul = fs.readFileSync(`./media/sticker/cangkul.webp`) 
anti = fs.readFileSync(`./media/sticker/anti.webp`) 
bahasa = "id"
apa = "other"
const prem = []
const antilink = []
const antitag = []
const antivirtex = [] 
prefix = setting.prefix
const { namabot, kodeprem, instagram, youtube, namaowner, linkgrub, nomerowner, gopay, dana, pulsa, donasi } = setting
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`}
runtime = process.uptime()
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = hehe = async (nayla, nay, store) => {
try {
const type = Object.keys(nay.message)[0];
const body = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId || nay.text) : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const command1 = body.slice(5).trim().split(/ +/).shift().toLowerCase()
const cmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const isCmd = body.startsWith(prefix)
const time = moment(new Date()).format("HH:mm");
const text = nay.message.conversation;
const isGroup = nay.key.remoteJid.endsWith('@g.us');
const from = nay.key.remoteJid;
const content = JSON.stringify(nay.message);
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net';
const ownerNumber = [`${nomerowner}@s.whatsapp.net`]
const botName = nayla.user.name;
const pushname = nay.pushName;
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid;
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;
const groupName = isGroup ? groupMetadata.subject : "";
const isOwner = ownerNumber.includes(sender)
const isPrem = prem.includes(sender) || isOwner	
const isAntiLink = isGroup ? antilink.includes(from) : false 
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
const isAntitag = isGroup ? antitag.includes(from) : false 			
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
await nayla.sendReadReceipt(from, nay.key.participant, [nay.key.id]);
fake = fs.readFileSync(`./media/image/fake.jpg`)
nay1 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Halo : ${pushname}\n•> Command ${command}`, 'title':'2', 'jpegThumbnail': fake}}}
if (!isGroup && isCommand) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
if (isCommand && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	  
const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, {text:teks.trim() }, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, {text:teks.trim()}, {quoted: nay, contextInfo: {"mentionedJid": memberr}})}					
const reply = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: nay1});
}
const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
const sendText = (teksnya, fiturnya) => {
const buttons = [
{buttonId: `.${fiturnya}`, buttonText: {displayText: `Next✅`}, type: 1},
]
const buttonMessage = {
text: "Loading...",footer: teksnya,buttons: buttons,headerType: 1}
nayla.sendMessage(from, buttonMessage, {quoted:nay1})
}
const prosess = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Halo : ${pushname}\n•> Active : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/prosess.jpg`)}}}})
};
const errorr = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Halo : ${pushname}\n•> Active : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/error.jpg`)}}}})
};
const sukses = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Halo : ${pushname}\n•> Active : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/sukses.jpg`)}}}})
};
nayla.sendnew = async (satu, dua, tiga) => {return await generateWAMessage(satu, dua, {...tiga ,userJid: nayla.authState.creds.me.id,upload: nayla.waUploadToServer})}      
const sendMenu = async (satu, dua, tiga, empat) => {
var menu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "SOURCE CODE","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}},
{"urlButton": {"displayText": "OWNER","url": "https://wa.me/"+ nomerowner}},
{"quickReplyButton": {"displayText": "DONASI","id": `${prefix}donasi`}},
{"quickReplyButton": {"displayText": "MYGRUB","id": `${prefix}mygrub`,}},
{"quickReplyButton": {"displayText": "SYARAT & KETENTUAN","id": `${prefix}desk`}}
]}}}, {})
nayla.relayMessage(satu, menu1.message, { messageId: menu1.key.id })
}
const sendMenuu = async (satu, dua, tiga, empat) => {
var menuu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "SOURCE CODE","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}},
{"urlButton": {"displayText": "OWNER","url": "https://wa.me/"+ nomerowner}},
{"quickReplyButton": {"displayText": "ALLMENU","id": `${prefix}allmenu`}}
]}}}, {})
nayla.relayMessage(satu, menuu1.message, { messageId: menuu1.key.id })
}
const nextt = (satu, dua, tiga, empat) => {
const buttons0 = [{buttonId: `${prefix + satu}`, buttonText: {displayText:dua}, type: 1}]
const buttonMessage0 = {image: {url:tiga},caption: empat, footerText: 'Loading...',buttons: buttons0,headerType: 4}
nayla.sendMessage(from, buttonMessage0, {quoted:nay1})}
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Nih Kak",footerText: 'Loading...',buttons: buttons,headerType: 4}
nayla.sendMessage(from, buttonMessage, {quoted:nay1})
})
} catch (e) {
reply("Emoji error, silahkan masukkan emoji lain\nNOTE : Cukup masukkan 1 emoji")
}
}

const txt = nay.message.conversation 
 if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Jawaban Benar Main Lagi?*`} } }})
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakgambar.json`, JSON.stringify(tebakgambar))
}
} 		
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Jawaban Benar Main Lagi?*`} } }})
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
}
} 										
if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Jawaban Benar Main Lagi?*`} } }})
delete tebakkimia[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
}
} 										
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Jawaban Benar Main Lagi?*`} } }})
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
}
} 										
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Jawaban Benar Main Lagi?*`} } }})
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
}
} 										
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Jawaban Benar Main Lagi?*`} } }})
delete caklontong[sender.split('@')[0]]
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
}
} 
var premi = "✖️"
if (isPrem) {premi = '✅'} 
var owneri = "✖️"
if (isOwner) {owneri = '✅'} 
var antilinki = "✖️"
if (isAntiLink) {antilinki = '✅'} 
var antivirtexi = "✖️"
if (isAntiVirtex) {antivirtexi = '✅'} 
var antitagi = "✖️"
if (isAntitag) {antitagi = '✅'} 
if (isGroup) { 
var infoq = `
[ *INFORMASI* ]
▏[ ✖️ ] => *Iya*
▏[ ✅ ] => *Tidak*
▏ 
▏➣ *Premium* : ${premi}
▏➣ *Owner* : ${owneri}
▏➣ *AntiLink* : ${antilinki}
▏➣ *AntiVirtex* : ${antivirtexi}
▏➣ *AntiTag* : ${antitagi}`
} // GROUP
if (!isGroup) { 
var infoq = `[ *INFORMASI* ]
▏[ ✖️ ] => *TIDAK*
▏[ ✅ ] => *IYA*
▏ *PREMIUM* : ${premi}
▏ *OWNER* : ${owneri}`
}

/* LIMIT & UANG  & REGISTER */ 
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const isRegistered = _registered.includes(sender)
var limitawal = "500"
if (isOwner) {limitawal = '99999999999'} 
if (isPrem) {limitawal = '99999999999'}  
var dftar = "Kamu Belum Daftar Kak"	
if(isRegistered) { dftar = "Kamu Udah Daftar Kak"};
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return reply("Limit Kamu Habis Silahkan Beli")
reply("Sisa Limit Anda Adalah " + limitCounts)
found = true}}
if (found === false) {
let obj = { id: sender, limit: 1}
_limit.push(obj)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
reply("Sisa Limit Anda : ???")}} 
const isLimit = (sender) =>{ 
if (isOwner && isPrem) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {let limits = i.limit
if (limits >= limitawal ) {position = true
reply("Limit Kamu Habis")
return true
} else {
_limit
position = true
return false}}}
if (position === false) {
const obj = { id: sender, limit: 1 }
_limit.push(obj)
fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
return false}} 
daftazz = "Apakah Anda Yakin Untuk Daftar?"
var checkATM = checkATMuser(sender)
if (checkATM === undefined) { addATM(sender)}
if (budy == prefix + "korupsi bansos") { 
if (!isPrem) return reply(respon.onlyprem(pushname));
const uangsaku = 10000
addKoinUser(sender, uangsaku)
sukses(`SUKSES KORUPSI 10000 UANG BANSOS, WOW ANDA ADA USER KORUSPI YANG HEBAT!! MAMAK MU PASTI BANGGA`)}
if (budy == prefix + "korupsi uangnegara") { 
if (!isPrem) return reply(respon.onlyprem(pushname));
const uangsaku = 100000
addKoinUser(sender, uangsaku)
sukses(`SUKSES KORUPSI 100000 UANG NEGARA, WOW ANDA ADA USER KORUSPI YANG HEBAT!! MAMAK MU PASTI BANGGA`)}
if (budy == prefix + "korupsi gajikerja") { 
prosess("SEDANG KORUPSI, SILAHKAN TUNGGU 1 MENIT")
const uangsaku = 1000
setTimeout( () => {
addKoinUser(sender, uangsaku)
sukses(`SUKSES KORUPSI 1000 UANG GAJI KERJA SELAMA 1 MINGGU, WOW ANDA ADA USER KORUSPI YANG HEBAT!! MAMAK MU PASTI BANGGA`)
}, 60000)}
switch (cmd) {

case 'menu':
const sections = [
    {
	title: "help utama",
	rows: [
	    {title: "Hubungi admin", rowId: "Hubungi admin"},
	    {title: "Cara order", rowId: "Cara order", description: "Tutorial order"}
	]
    },
   {
	title: "produk list",
	rows: [
	    {title: "Produk mc", rowId: "Produk mc"},
	    {title: "Produk discord", rowId: "Produk discord"}
	]
    },
]

const listMessage = {
  text: "HELP MENU",
  footer: "BY AHMAD",
  title: "silahkan pilih menu dibawah ini untuk mencari apa yang kamu perlukan",
  buttonText: "PILIH",
  sections
}
const sendMsg = await nayla.sendMessage(from, listMessage)
//nayla.sendMessage(from, {sendMsg : listMessage}, {quoted: nay1})
break


default: 

// Anti tag

if (budy.includes("@")){
if (!isAntitag) return
nayla.sendMessage(from, {sticker : anti}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `STOP TAG TAG [ 🤬 ]`} } }}) 	
}     

// Antilink    
   
if (budy.includes("chat.whatsapp.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`ADMIN😎💪`)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net` 
setTimeout( () => {
nayla.groupParticipantsUpdate(from, [Kick],"remove")
}, 1000)
setTimeout( () => {
nayla.sendMessage(from, {sticker : anti}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `ANTILINK [ ON ]`} } }}) 	
}, 0)
}

// anti virtex

if (txt.length > 1500){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply(`ADMIN😎💪`)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
nayla.groupParticipantsUpdate(from, [kic],"remove")
}, 0)
}

// End

}
} catch (e) {
console.log(`${e}`) 
}
}