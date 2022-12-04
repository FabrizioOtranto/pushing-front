export const BASE_URL = 'https://pushing-it.onrender.com/api';

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
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const YEAR = new Array(100).fill(0).map((_, idx) => idx + 1921);

export const LINKS = [
    {
        title: 'To Do List',
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
        title: 'Form Utils',
        path: '/home/formutils',
        id: 'formutilslink',
    },
    {
        title: 'Online Shop',
        path: '/home/onlineshop',
        id: 'onlineshoplink',
    },
    {
        title: 'File Upload',
        path: '/home/fileupload',
        id: 'fileuploadlink',
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
        image: "/BackTShirt.png"
    },
    {
        name: 'White Pants',
        id: 'whitepants',
        price: 20,
        image: "/whitePants.png"

    },
    {
        name: 'Red Cap',
        id: 'redcup',
        price: 10,
        image: "/redCap.png"

    },
    {
        name: 'Black Jacket',
        id: 'blackJacket',
        price: 25,
        image: "/blackJacket.png"
    },
    {
        name: 'Pink Sweater',
        id: 'pinksweater',
        price: 18,
        image: "/pinkSweater.png"

    },
    {
        name: 'White Shoes',
        id: 'whiteshoes',
        price: 30,
        image: "/whiteShoes.png"

    },
    {
        name: 'Black Socks',
        id: 'blacksocks',
        price: 10,
        image: "/blackSocks.png"

    },
    {
        name: 'Beige Shorts',
        id: 'beigepants',
        price: 19,
        image: "/BeigeShorts.png"

    },

];



