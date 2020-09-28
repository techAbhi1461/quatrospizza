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
        img: 'img/pizza.PNG',
        section: 'Pizza',
        price: 3
    },
    {
        name: 'Pepperoni Pizza',
        img: 'img/pizza2.jpeg',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Burger',
        img: '/img/burger.JPEG',
        section: 'Sandwich',
        price: 8
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich',
        price: 8
    },
    {
        name: 'Shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich',
        price: 7
    },
    {
        name: 'Fries',
        img: "img/fries.jpeg",
        section: 'Sides',
        price: 2
    },
    {
        price: 1,
        name: 'Soda',
        img: '/img/coke.jpg',
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