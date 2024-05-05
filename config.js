// request library mysql
const mysql = require('mysql')

//variabel konesksi untuk database 
const db = mysql.createConnection ({
    host:"localhost",
    user:'root',
    password:'',
    database:'sepeda'
})

// kirimkan variabel keluar untuk digunakan diluar file
module.exports = db