class ProductManager{
    
    constructor(){
        this.products = []
    }
    static id = 0

    addProduct = (title,description,price,img,code,stock) => {
        if(title&&description&&price&&img&&code&&stock){
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
            
        }else {
            console.log('faltan campos por llenar')
        }
        
    }

    getProducts = () =>{
        console.log(productManager.products)
    }
    getProductById = (pId) => {
        if(productManager.products.length<= pId){
            console.log('poduct not found')
        }else{
            console.log(productManager.products[pId])
        }
        
    }

}

const productManager = new ProductManager

productManager.addProduct('papel','papel',10,'img',123,31)
productManager.addProduct('jabon','papel',10,'img',321,31)

console.log(productManager.products[0].includes(123))
//productManager.getProducts()
