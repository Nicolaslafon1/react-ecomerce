const products = [
    {id: 1, name: 'Buzo negro Olympia ', category: 'Buzos', price: 1000, stock: 500, description: 'Buzo Edicion Mr.Olympia.', imageUrl: 'https://agongym.com/cdn/shop/files/HOODIEAMERICANDREAMII-BLACK_37_700x.jpg?v=1698391024'},
    {id: 2, name: 'Buzo negro simple', category: 'Buzos', price: 2000, stock: 52, description: 'Buzos de calidad', imageUrl: 'https://agongym.com/cdn/shop/files/DSC03847-Mejorado-NR_700x.jpg?v=1695319504'},
    {id: 3, name: 'Buzo gris', category: 'Buzos', price: 3000, stock: 15, description: 'Bruzos de calidad premiun', imageUrl: 'https://agongym.com/cdn/shop/files/DSC04119-Mejorado-NR_700x.jpg?v=1695292844'},
    {id: 4, name: 'jogger negro', category: 'Jogger', price: 4000, stock: 51, description: 'Joggers de calidad premiun ', imageUrl: 'https://agongym.com/cdn/shop/files/DSC04010-Mejorado-NR_700x.jpg?v=1695319595'},
    {id: 5, name: 'Jogger gris', category: 'Jogger', price: 5000, stock: 35, description: 'joggers de calidad premiun', imageUrl: 'https://agongym.com/cdn/shop/files/DSC04072-Mejorado-NR_700x.jpg?v=1695319602'}
]
export const mFetch = (id) =>{
    return new Promise((res, rej)=>{ // fetch(promesa)  
        setTimeout(()=>{
            res(id ? products.find(prod => prod.id === id ) :products)
        }, 1000)
    
    })
}