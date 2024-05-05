const express = require('express')
const app = express()
const port = 3002

const bodyParser = require('body-parser')
const db = require('./config.js')

const response = require('./request.js')

app.use(bodyParser.json())

app.get('/sepeda', (req,res)=>{
    const sql = 'SELECT * FROM customers'
    db.query(sql,(error, result)=>{
        response(200, result,'data costumers', res)
        console.log("data:".result)
    })
})

app.post('/sepeda/:email', (req, res)=>{
    const npm = req.params.email
    const sql = `SELECT * FROM customers where email = '${email}'`
    db.query(sql, (err,result)=>{
        if(err) throw err
        response(200,result,"get detail sepeda",res)
    })

}) 
    app.post('/sepeda', (req, res) =>{
    const {NAME, email, phone }= req.body
    const SQL = `INSERT INTO sepeda (NAME, email, phone) values ('${NAME}','${email}','${phone}');`
 
    db.query(SQL,(ERROR, FIELDS)=>{
     if(errors) response(500, 'invalid', `${NAME} dengan email${email} sudah di tambahkan`, res)
     if(FIELDS?.affectedRows){
         const data ={
             isSucces: fields.affectedRows,
             id:fields.insertId,
         }
         response(200,data,"Data berhasil di simpan",res)
         
     }
    })
})

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})