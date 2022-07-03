export const BASE_URL = 'https://pushing-it.herokuapp.com/api';

//
export const GENDER = ['Male', 'Female', 'Other'];
export const DAY = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
];
export const MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agugust',
    'September',
    'October',
    'November',
    'December',
];

export const YEAR = new Array(100).fill(0).map((_, idx) => idx + 1921);

export const LINKS = [
    {
        title: 'Todo List',
        path: '/home/todolist',
        id: 'todolistlink',
    },
    {
        title: 'Waits',
        path: '/home/waits',
        id: 'waitslink',
    },
    {
        title: 'Alerts',
        path: '/home/alerts',
        id: 'alertslink',
    },
    {
        title: 'Drag And Drop',
        path: '/home/draganddrop',
        id: 'dragAndDroplink',
    },
    {
        title: 'Online Shop',
        path: '/home/onlineshop',
        id: 'onlineshoplink',
    },
    {
        title: 'In construction',
        path: '/home/construction',
        id: 'construction',
    },
];

export const ALERTS = [
    {
        name: 'alert',
        title: "I'm an alert",
    },
    {
        name: 'prompt',
        title: "I'm a prompt",
    },
    {
        name: 'confirmationMessage',
        title: "I'm an confirmation message",
    },
];
export const PRODUCTS = [
    {
        name: 'Black T-Shirt',
        id: 'blacktshirt',
        price: 15,
        image: "https://i.ibb.co/jwZM6J5/Back-TShirt.png"
    },
    {
        name: 'White Pants',
        id: 'whitepants',
        price: 20,
        image: "https://i.ibb.co/h7WMdWz/white-Pants.png"

    },
    {
        name: 'Red Cap',
        id: 'redcup',
        price: 10,
        image: "https://i.ibb.co/wYzXGqG/redCup.png"

    },
    {
        name: 'Black Jacket',
        id: 'blackJacket',
        price: 25,
        image: "https://i.ibb.co/4SRPmZH/black-Jacket.png"
    },
    {
        name: 'Pink Sweater',
        id: 'pinksweater',
        price: 18,
        image: "https://i.ibb.co/MDDPMXn/pink-Sweater.png"

    },
    {
        name: 'White Shoes',
        id: 'whiteshoes',
        price: 30,
        image: "https://i.ibb.co/fYCQq5j/white-Shoes.png"

    },
    {
        name: 'Black Socks',
        id: 'blacksocks',
        price: 10,
        image: "https://i.ibb.co/r0F9Kwy/black-Socks.png"

    },
    {
        name: 'Beige Shorts',
        id: 'beigepants',
        price: 19,
        image: "https://i.ibb.co/hss2dqk/Beige-Shorts.png"

    },

];



