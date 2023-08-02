import express from 'express'
import { fruts } from './productManager.js'

const app = express()
const PORT = 8080



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api/products',(req,res)=>{
    
    let { limit } = req.query
    limit = Number(limit)
    
    if(!limit){
        return res.send(fruts)
    }
    if(limit>fruts.length){
        return res.send('El limite ingresado no es valido')
    }
    let limitArr = fruts.slice(0,limit)
    return res.send(limitArr)
    
})

app.get('/api/products/:pid',(req,res) =>{
    let pid = req.params.pid
    pid = Number(pid)
    if(pid>fruts.length){
        return res.send('id invalido')
    }
    
    return res.send(fruts[pid-1])
})
app.listen(PORT,()=>{
    console.log('APP CORRIENDO')
})