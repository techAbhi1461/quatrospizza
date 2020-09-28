export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems = [

    {
        name: 'Cheese Pizza',
        // img: '/img/pizza.PNG',
        img: process.env.PUBLIC_URL + '/img/pizza.PNG',
        section: 'Pizza',
        price: 3
    },
    {
        name: 'Pepperoni Pizza',
        img: process.env.PUBLIC_URL + '/img/pizza2.JPEG',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Chicken Pizza',
        img: process.env.PUBLIC_URL + '/img/chicken-pizza.JPEG',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Veggie Pizza',
        img: process.env.PUBLIC_URL + '/img/healthy-pizza.JPEG',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Burger',
        img: process.env.PUBLIC_URL + '/img/burger.JPEG',
        section: 'Sandwich',
        price: 8
    },
    {
        name: 'Gyro',
        img: process.env.PUBLIC_URL + '/img/gyro.JPEG',
        section: 'Sandwich',
        price: 8
    },
    {
        name: 'Shrimp PoBoy',
        img: process.env.PUBLIC_URL + '/img/sandwich.JPEG',
        section: 'Sandwich',
        price: 7
    },
    {
        name: 'Fries',
        img: process.env.PUBLIC_URL + '/img/fries.JPEG',
        section: 'Sides',
        price: 2
    },
    {
        price: 1,
        name: 'Soda',
        // img: '/img/coke.JPEG',
        img: process.env.PUBLIC_URL + '/img/coke.JPEG',
        section: 'Drinks',
        choices: ["Coke", "Sprite", "Fanta", "Root Bear"]
    }

];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {})