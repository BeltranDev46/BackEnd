import fs from 'fs'

class ProductManager{
    
    constructor(){
        this.products = [],
        this.path = '/Users/daniel_beltran/Documents/Programacion/BackEnd/proyecto'
    }
    static id = 0

    addProduct = async (title,description,price,img,code,stock) => {
        if(title && description && price && img && code && stock){
            let product = {
                title : title,
                description : description,
                price : price,
                img:img,
                code : code,
                stock:stock,
                id: ProductManager.id++
            }
            productManager.products.push(product)
            await fs.promises.writeFile('./products.txt',(JSON.stringify(productManager.products)))
            
        }else {
            console.log('faltan campos por llenar')
        }
        
    }

    getProducts = async() =>{
        const read = JSON.parse(await fs.promises.readFile('./products.txt','utf-8'))
        console.log(read)
    }
    
    getProductById = async (pId) => {
        const read = JSON.parse(await fs.promises.readFile('./products.txt','utf-8'))

        if(read <= pId){
            console.log('poduct not found')
        }else{
            console.log(read[pId])
        }
    }
}

const fruts = [
    {
        name:'limon',
        price:23,
        id:1
    },
    {
        name:'naranja',
        price:12,
        id:2
    },
    {
        name:'pera',
        price:24,
        id:3
    }
]

const productManager = new ProductManager

export {fruts}

