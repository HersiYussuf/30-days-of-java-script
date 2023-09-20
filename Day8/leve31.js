const profiles = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex@gmail.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false   
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@abab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    // ... (other profiles)
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userid: 'fg12cy', rate: 5 },
            { userid: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV: Procaster',
        price: 400,
        ratings: [{ userid: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    },
];

function signUp() {
    let email = prompt('Enter your email');
    let username = prompt('Enter your username');
    let password = prompt('Enter your password');
    
    let profile = {
        _id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toLocaleString(),
        isLoggedIn: false
    };

    // Add the new profile to the profiles array
    profiles.push(profile);
}

function signIn() {
    let email = prompt('Enter your email');
    let password = prompt('Enter your password');
    
    let profile = profiles.find(profile => profile.email === email && profile.password === password);

    if (profile) {
        profile.isLoggedIn = true;
        console.log('You are logged in');
    } else {
        console.log('Invalid email or password');
    }
}

function rateProduct() {
    let email = prompt('Enter your email');
    let password = prompt('Enter your password');
    
    let profile = profiles.find(profile => profile.email === email && profile.password === password);

    if (profile) {
        let productName = prompt('Enter the product name');
        let product = products.find(product => product.name === productName);

        if (product) {
            let rating = parseFloat(prompt('Enter your rating'));
            product.ratings.push({ userid: profile._id, rate: rating });
            console.log(product);
        } else {
            console.log('Product not found');
        }
    } else {
        console.log('Invalid email or password');
    }
}

function likeProduct() {
    let email = prompt('Enter your email');
    let password = prompt('Enter your password');
    
    let profile = profiles.find(profile => profile.email === email && profile.password === password);

    if (profile) {
        let productName = prompt('Enter the product name');
        let product = products.find(product => product.name === productName);

        if (product) {
            product.likes.push(profile._id);
            console.log(product);
        } else {
            console.log('Product not found');
        }
    } else {
        console.log('Invalid email or password');
    }
}
