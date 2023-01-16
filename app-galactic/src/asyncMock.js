const products = [
    { 
        id: '1', 
        name: 'iphone 13 Pro Max', 
        price: 25000, 
        category: 'celular', 
        img:'https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png', 
        stock: 25, 
        description:'Descripcion de Iphone 13'
    },
    { id: '2', 
    name: 'Samgung Galaxy Z Flip', 
    price: 80000, 
    category: 'celular', 
    img:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/legacy_bdt/samsung-galaxy-z-flip-3-5g.jpeg', 
    stock: 16, 
    description:'Descripcion de Samsung'
   },
    { id: '3',
     name: 'laptop Acer 2 en 1', 
     price: 1200, 
     category: 'tablet', 
     img:'https://sellbroke.com/wp-content/uploads/2015/12/sell-acer-aspire-switch-10-laptop.png', 
     stock: 10, 
     description:'Descripcion de laptop'
    },
    { id: '4',
     name: 'Tablet Samsung', 
     price: 12200, 
     category: 'tablet', 
     img:'https://img.global.news.samsung.com/ar/wp-content/uploads/2020/08/SM-P615_001_Front-With-S-pen_Pink-e1597072750963.png', 
     stock: 10, 
     description:'Descripcion de laptop'
    },
    { id: '5',
     name: 'Laptop hp', 
     price: 11200, 
     category: 'laptop', 
     img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06927801.png', 
     stock: 10, 
     description:'Descripcion de laptop'
    },
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}