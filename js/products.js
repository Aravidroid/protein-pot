const allProducts = 
[{
    id: '1',
    name: 'Normal Weight Gain Pot',
    protein: 18,
    calories: 420,
    price: 199,
    ingredients: ['Banana', 'Apple', 'Kiwi', 'Strawberry', 'Orange','Peanuts', 'Almonds', 'Sunflower seeds'],
    icon: '🍌',
    description: 'Perfect for weight gain - calorie-rich blend'
},

  {
    id: '2',
    name: 'Normal Weight Loss Pot',
    protein: 15,
    calories: 280,
    price: 189,
    ingredients: ['Kiwi', 'Apple', 'Orange', 'Cucumber', 'Almonds', 'Sunflower seeds'],
    icon: '🥝',
    description: 'Low-calorie, high-protein, weight loss focused'
  },
  {
    id: '3',
    name: 'Supreme Weight Gain Pot',
    protein: 22,
    calories: 520,
    price: 249,
    ingredients: ['Avocado', 'Pomegranate', 'Kiwi', 'Strawberry', 'Water apple', 'Almonds', 'Pumpkin seeds', 'Sunflower seeds'],
    icon: '🥑',
    description: 'Premium calorie-dense blend with superfoods'
  },
  {
    id: '4',
    name: 'Supreme Weight Loss Pot',
    protein: 20,
    calories: 320,
    price: 239,
    ingredients: ['Avocado', 'Strawberry', 'Kiwi', 'Water apple', 'Pumpkin seeds', 'Almonds'],
    icon: '🍓',
    description: 'Premium low-calorie with healthy fats'
  },
  {
    id: '5',
    name: 'Normal Oldage Home Pot',
    protein: 12,
    calories: 300,
    price: 179,
    ingredients: ['Apple', 'Papaya', 'Orange', 'Banana', 'Cucumber', 'Almonds', 'Sunflower seeds'],
    icon: '🍎',
    description: 'Easy digestion, senior-friendly nutrition'
  },
  {
    id: '6',
    name: 'Supreme Oldage Home Pot',
    protein: 14,
    calories: 380,
    price: 229,
    ingredients: ['Avocado', 'Guava', 'Kiwi', 'Strawberry', 'Apple'],
    icon: '🍏',
    description: 'Premium senior nutrition with antioxidants'
  },
  {
    id: '7',
    name: 'Normal Diabetic Pot',
    protein: 16,
    calories: 240,
    price: 209,
    ingredients: ['Apple', 'Kiwi', 'Strawberry', 'Cucumber', 'Orange', 'Pear', 'Almonds', 'Sunflower seeds'],
    icon: '🍐',
    description: '70% Low sugar fruits, 20% Cucumber / fiber, 10% nuts'
  },
  {
    id: '8',
    name: 'Supreme Diabetic Pot',
    protein: 19,
    calories: 300,
    price: 259,
    ingredients: ['Avocado', 'Guava', 'Kiwi', 'Strawberry', 'Green apple', 'Almonds', 'Pumpkin seeds', 'Sunflower seeds', 'Pista'],
    icon: '🥑',
    description: '70% Low sugar fruits, 20% Cucumber / fiber, 10% nuts'
  },
  {
    id: '9',
    name: 'Normal IT Menu Pot',
    protein: 17,
    calories: 380,
    price: 199,
    ingredients: ['Watermelon', 'Cucumber', 'Orange', 'Papaya', 'Muskmelon', 'Water apple', 'Peanuts', 'Almonds'],
    icon: '🍉',
    description: 'Hydrating, energy-boosting office meal'
  },
  {
    id: '10',
    name: 'Supreme IT Menu Pot',
    protein: 21,
    calories: 450,
    price: 249,
    ingredients: ['Dragon fruit', 'Strawberry', 'Kiwi', 'Watermelon', 'Pineapple', 'Water apple', 'Almonds', 'Pista', 'Pumpkin seeds', 'Sunflower seeds'],
    icon: '🍍',
    description: 'Premium superfruit blend for peak performance'
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