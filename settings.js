const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Alphabot-Mdོ" //namabot kalian
global.ownername= "ᴹᴿ᭄ AnjasGanz ×፝֟͜×" //nama kalian
global.myweb ="https://api-alphabot.herokuapp.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "stockanjasnovij@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6285848325033" // nomor wa kalian
global.ownernomerr = "+6285848325033" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285848325033","6285848325033","6285848325033"] //ganti agar fitur owner bisa di gunakan
global.packname = '© AnjasNovi-Mdོ' //sticker wm ubah
global.author = 'Di Buat Oleh ZeeoneOfc' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.sessionName = 'session' j

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
