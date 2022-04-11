export const products = [
    {
        id: 1,
        name: 'Muzzarella',
        stock: 10,
        price: 899,
        img:'https://st.depositphotos.com/2252541/2379/i/950/depositphotos_23796179-stock-photo-pizza-margherita.jpg',
        description: 'pizza a la piedra con 200 gr de muzzarella, aceitunas verdes',
        category: 'Pizzas',
    },
    {
        id: 2,
        name: 'Cheddar',
        stock: 24,
        price: 1500,
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/be/53/12/empanadas-gourmet.jpg',
        description: 'Empanadas rellenas de carne, cheddar, panceta',
        category: 'Empanadas',
    },
    {
        id: 3,
        name: 'Cerveza Patagonia 1Lts',
        stock: 70,
        price: 270,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWfZn5-h-pNcsKc7ST4JROT5Ug1k7RCyi3A&usqp=CAU',
        description: 'Cerveza PATAGONIA de 1 Lts',
        category: 'Bebidas',
    },
    {
        id: 4,
        name: 'Promo Uno',
        stock: 4,
        price: 2900,
        img: 'https://st4.depositphotos.com/1000336/29823/i/1600/depositphotos_298230548-stock-photo-pizza-black-background-close.jpg',
        description: '3 grandes de Muzzarella 1 Cerveza Patagonia y 12 empanadas',
        category: 'Promociones',
    },
    
];



export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

export const getCategories = (categoryId) => {
    return new Promise((resolve) => {
        const filtro = products.filter(
            (product) =>product.category ===categoryId
        )
        setTimeout(() => {
            categoryId ? resolve(filtro) : resolve (products)
        }, 1000)
    })
}