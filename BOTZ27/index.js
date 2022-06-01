// base nya emng gini::

const { default: makeWASocket, Browsers, AnyMessageContent, delay, proto, generateWAMessageFromContent, DisconnectReason, fetchLatestBaileysVersion, useSingleFileAuthState } = require('@adiwajshing/baileys'),
fs = require('fs'),
P = require('pino'),
{ exec } = require('child_process'),
{ Boom } = require('@hapi/boom'),
{ wait, simih, getBuffer, h2k } = require('./lib/functions'),
{ fetchJson, fetchText } = require('./lib/fetcher'),
chalkanim = require('chalk-animation'),
package = require('./package.json'),
CFonts = require('cfonts'),
{ state, saveState } = useSingleFileAuthState('./session.json'),
  
startNayla = async () => {
const { version: _0x27cf24, isLatest: _0x412de9 } = await fetchLatestBaileysVersion()

CFonts.say('SIMPEL BOT', { font: 'simpleBlock', align: 'center', colors: ['greenBright'], background: 'transparent', letterSpacing: 1, space: true, })
CFonts.say('BY YT RIMURUBOTZ\nJANGAN DIPERJUALBELIKAN', { font: 'console', align: 'center', colors: ['greenBright'], background: 'transparent', letterSpacing: 1, space: true, })
  
const nayla = makeWASocket({ version: _0x27cf24, logger: P({ level: 'silent' }), printQRInTerminal: true, auth: state, browser: ['Nayla', 'Chrome', '3.0.0'], })

nayla.ev.on('messages.upsert', async ({ messages: _0x315de6 }) => {
const _0x49782b = _0x315de6[0]
if (_0x49782b.fromMe) {return}
require('./nayla')(nayla, _0x49782b)})

nayla.ev.on('group-participants.update', async (_0x1f3541) => {
const sender = _0x1f3541.participants[0]
if (_0x1f3541.action == 'add') {
try {
ppimg = await nayla.profilePictureUrl(sender.split('@')[0] + '@c.us')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
teks = 'Welcome Bro!'
let _0x5be1ae = await getBuffer(ppimg)
nayla.sendMessage(_0x1f3541.id, { text: teks }, { contextInfo: { mentionedJid: [sender] }, quoted: { key: { fromMe: false, contextInfo: { forwardingScore: 508, isForwarded: true,}, participant: '0@s.whatsapp.net', ...(_0x1f3541.id ? { remoteJid: 'status@broadcast' } : {}), },
              message: {
                productMessage: {
                  product: {
                    productImage: {
                      mimetype: 'image/jpeg',
                      jpegThumbnail: _0x5be1ae,
                    },
                    title: 'Halo Bro',
                    description: 'JOINED : ' + sender.split('@')[0],
                    productImageCount: '' + sender.split('@')[0],
                  },
                  businessOwnerJid: '0@s.whatsapp.net',
                },
              },
            },
          }
        )
      }
      if (_0x1f3541.action == 'remove') {
        try {
          ppimg = await nayla.profilePictureUrl(
            sender.split('@')[0] + '@c.us'
          )
        } catch {
          ppimg =
            'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        teks = 'Byee Bro!'
        let _0x50649a = await getBuffer(ppimg)
        nayla.sendMessage(
          _0x1f3541.id,
          { text: teks },
          {
            contextInfo: { mentionedJid: [sender] },
            quoted: {
              key: {
                fromMe: false,
                contextInfo: {
                  forwardingScore: 508,
                  isForwarded: true,
                },
                participant: '0@s.whatsapp.net',
                ...(_0x1f3541.id ? { remoteJid: 'status@broadcast' } : {}),
              },
              message: {
                productMessage: {
                  product: {
                    productImage: {
                      mimetype: 'image/jpeg',
                      jpegThumbnail: _0x50649a,
                    },
                    title: 'BYEE BRO',
                    description: 'LEAVE : ' + sender.split('@')[0],
                    productImageCount: '' + sender.split('@')[0],
                  },
                  businessOwnerJid: '0@s.whatsapp.net',
                },
              },
            },
          }
        )
      }
    })
    nomerother = '6282347260729'
    nayla.ev.on('connection.update', (_0x17cc5d) => {
      if (_0x17cc5d.connection === 'open') {
        console.log(
          'Sukses connect, nomer bot => ' + nayla.user.id.split(':')[0]
        )
      } else {
        if (_0x17cc5d.connection === 'close') {
          startNayla()
        }
      }
    })
    nayla.ev.on('creds.update', saveState)
  }
startNayla()
