const allProducts = 
[{
    id: '1',
    name: 'Regular Weight Gain Pot',
    protein: 18,
    calories: 420,
    price: 150,
    ingredients: ['Banana', 'Apple', 'Kiwi', 'Strawberry', 'Orange','Peanuts', 'Almonds', 'Sunflower seeds'],
    icon: '🍌',
},

{
    id: '2',
    name: 'Regular Weight Loss Pot',
    protein: 15,
    calories: 280,
    price: 150,
    ingredients: ['Kiwi', 'Apple', 'Orange', 'Cucumber', 'Almonds', 'Sunflower seeds'],
    icon: '🥝',
},
{
    id: '3',
    name: 'Supreme Weight Gain Pot',
    protein: 22,
    calories: 520,
    price: 200,
    ingredients: ['Avocado', 'Pomegranate', 'Kiwi', 'Strawberry', 'Water apple', 'Almonds', 'Pumpkin seeds', 'Sunflower seeds'],
    icon: '🥑',
},
{
    id: '4',
    name: 'Supreme Weight Loss Pot',
    protein: 20,
    calories: 320,
    price: 200,
    ingredients: ['Avocado', 'Strawberry', 'Kiwi', 'Water apple', 'Pumpkin seeds', 'Almonds'],
    icon: '🍓',
},
{
    id: '5',
    name: 'Regular Oldage Home Pot',
    protein: 12,
    calories: 300,
    price: 150,
    ingredients: ['Apple', 'Papaya', 'Orange', 'Banana', 'Cucumber', 'Almonds', 'Sunflower seeds'],
    icon: '🍎',
},
{
    id: '6',
    name: 'Supreme Oldage Home Pot',
    protein: 14,
    calories: 380,
    price: 200,
    ingredients: ['Avocado', 'Guava', 'Kiwi', 'Strawberry', 'Apple'],
    icon: '🍏',
},
{
    id: '7',
    name: 'Regular Diabetic Pot',
    protein: 16,
    calories: 240,
    price: 150,
    ingredients: ['Apple', 'Kiwi', 'Strawberry', 'Cucumber', 'Orange', 'Pear', 'Almonds', 'Sunflower seeds'],
    icon: '🍐',
},
{
    id: '8',
    name: 'Supreme Diabetic Pot',
    protein: 19,
    calories: 300,
    price: 200,
    ingredients: ['Avocado', 'Guava', 'Kiwi', 'Strawberry', 'Green apple', 'Almonds', 'Pumpkin seeds', 'Sunflower seeds', 'Pista'],
    icon: '🥑',
},
{
    id: '9',
    name: 'Regular IT Menu Pot',
    protein: 17,
    calories: 380,
    price: 150,
    ingredients: ['Watermelon', 'Cucumber', 'Orange', 'Papaya', 'Muskmelon', 'Water apple', 'Peanuts', 'Almonds'],
    icon: '🍉',
},
{
    id: '10',
    name: 'Supreme IT Menu Pot',
    protein: 21,
    calories: 450,
    price: 200,
    ingredients: ['Dragon fruit', 'Strawberry', 'Kiwi', 'Watermelon', 'Pineapple', 'Water apple', 'Almonds', 'Pista', 'Pumpkin seeds', 'Sunflower seeds'],
    icon: '🍍',
},

// ===== TRIAL BOX =====

{
    id: '11',
    name: 'Trial Weight Gain Pot',
    protein: 12,
    calories: 300,
    price: 120,
    ingredients: ['Banana', 'Apple', 'Peanuts'],
    icon: '🍌',
},
{
    id: '12',
    name: 'Trial Weight Loss Pot',
    protein: 10,
    calories: 180,
    price: 120,
    ingredients: ['Kiwi', 'Apple', 'Cucumber'],
    icon: '🥝',
},
{
    id: '13',
    name: 'Trial Oldage Home Pot',
    protein: 8,
    calories: 200,
    price: 120,
    ingredients: ['Apple', 'Papaya', 'Banana'],
    icon: '🍎',
},
{
    id: '14',
    name: 'Trial Diabetic Pot',
    protein: 11,
    calories: 170,
    price: 120,
    ingredients: ['Apple', 'Kiwi', 'Cucumber'],
    icon: '🍐',
},
{
    id: '15',
    name: 'Trial IT Menu Pot',
    protein: 12,
    calories: 260,
    price: 120,
    ingredients: ['Watermelon', 'Cucumber', 'Orange'],
    icon: '🍉',
}
];

// Customization ingredients
const customizationData = {
    fruits: [
        { id: 'honey', name: 'Honey', price: 15, protein: 0.3, calories: 64, icon: '🍯' },
        { id: 'dates', name: 'Dates', price: 25, protein: 1.8, calories: 66, icon: '📅' },
        { id: 'oats', name: 'Oats', price: 20, protein: 2.7, calories: 68, icon: '🌾' },
        { id: 'peanut-butter', name: 'Peanut Butter', price: 30, protein: 8, calories: 94, icon: '🥜' }
    ]
};

// Helper function to get featured products
function getFeaturedProducts() {
    return allProducts.filter(p => p.isPopular).slice(0, 3);
}

// Helper function to get product by ID
function getProductById(id) {
    return allProducts.find(p => p.id === id);
}