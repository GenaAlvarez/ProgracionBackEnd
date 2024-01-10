// Desafio entregable

class ProductManager{
    static ultId = 0;
    constructor(){
        this.products = [];
    }


addProduct(tittle, description, price, img, code, stock){
    
    if(!tittle || !description || !price || !img || !code || !stock){
            
        console.log("Todos los campos son obligatorios");
        return;
    }

    if(this.products.some(item => item.code === code)){
        console.log("El codigo debe ser unico");
        return;
    }

    const newProduct = {
        id: ++ProductManager.ultId,
        tittle,
        description,
        price,
        img,
        code,
        stock
    }

    this.products.push(newProduct);

}
getProduct(){

        return this.products;
}

getProductById(id){

        const product = this.products.find(item => item.id === id)
        
        if(!product){
            console.error("Not Found");
        }else{
            console.log(product);
        }
}
}
// Testing

const manager = new ProductManager();

console.log(manager.getProduct());

manager.addProduct("Producto prueba", "Esto es una prueba", 200, "Sin imagen", "abc123", 25);

console.log(manager.getProduct());

manager.addProduct("Producto prueba", "Esto es una prueba", 200, "Sin imagen", "abc123", 25);

console.log("verificamos:");
manager.getProductById(1)