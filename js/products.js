// Protein Pot - Complete Product Menu
// 20+ High-protein fruit and nut bowls from Tamil Nadu

const allProducts = [
    {
        id: '1',
        name: 'Banana Energy Pot',
        category: 'banana',
        price: 149,
        protein: 8,
        calories: 280,
        ingredients: ['Banana', 'Almonds', 'Chia Seeds'],
        icon: '🍌',
        description: 'Classic banana with crunchy almonds and protein-packed chia seeds',
        isPopular: true
    },
    {
        id: '2',
        name: 'Mango Nut Power Bowl',
        category: 'mango',
        price: 159,
        protein: 10,
        calories: 310,
        ingredients: ['Mango', 'Cashews', 'Honey'],
        icon: '🥭',
        description: 'Sweet mango with rich cashews drizzled with pure honey',
        isPopular: true
    },
    {
        id: '3',
        name: 'Apple Almond Crunch',
        category: 'apple',
        price: 149,
        protein: 9,
        calories: 300,
        ingredients: ['Apple', 'Almonds', 'Oats'],
        icon: '🍎',
        description: 'Crispy apple slices with almonds and wholesome oats',
        isPopular: false
    },
    {
        id: '4',
        name: 'Mixed Nuts Protein Pot',
        category: 'mixed',
        price: 169,
        protein: 15,
        calories: 350,
        ingredients: ['Almonds', 'Cashews', 'Walnuts', 'Peanuts'],
        icon: '🥜',
        description: 'Premium selection of mixed nuts for maximum protein',
        isPopular: true
    },
    {
        id: '5',
        name: 'Tropical Fruit Bowl',
        category: 'mixed',
        price: 159,
        protein: 6,
        calories: 290,
        ingredients: ['Mango', 'Pineapple', 'Papaya', 'Coconut'],
        icon: '🍍',
        description: 'Exotic tropical fruits with coconut flakes',
        isPopular: true
    },
    {
        id: '6',
        name: 'Peanut Banana Power Bowl',
        category: 'banana',
        price: 139,
        protein: 11,
        calories: 320,
        ingredients: ['Banana', 'Peanuts', 'Peanut Butter'],
        icon: '🍌',
        description: 'Banana lover\'s dream with peanuts and creamy peanut butter',
        isPopular: false
    },
    {
        id: '7',
        name: 'Date Almond Energy Bowl',
        category: 'mixed',
        price: 159,
        protein: 10,
        calories: 330,
        ingredients: ['Dates', 'Almonds', 'Walnuts', 'Honey'],
        icon: '📅',
        description: 'Natural sweetness from dates with premium nuts',
        isPopular: false
    },
    {
        id: '8',
        name: 'Honey Oats Protein Bowl',
        category: 'mixed',
        price: 139,
        protein: 7,
        calories: 270,
        ingredients: ['Banana', 'Oats', 'Honey', 'Almonds'],
        icon: '🍯',
        description: 'Warm comfort bowl with honey-drizzled oats',
        isPopular: false
    },
    {
        id: '9',
        name: 'Cashew Mango Delight',
        category: 'mango',
        price: 169,
        protein: 9,
        calories: 340,
        ingredients: ['Mango', 'Cashews', 'Dates', 'Honey'],
        icon: '🥭',
        description: 'Premium mango bowl with creamy cashews',
        isPopular: false
    },
    {
        id: '10',
        name: 'Pistachio Fruit Mix',
        category: 'mixed',
        price: 179,
        protein: 11,
        calories: 360,
        ingredients: ['Pistachios', 'Apple', 'Banana', 'Chia Seeds'],
        icon: '🌰',
        description: 'Exclusive pistachio combination with mixed fruits',
        isPopular: false
    },
    {
        id: '11',
        name: 'Apple Peanut Butter Bowl',
        category: 'apple',
        price: 149,
        protein: 10,
        calories: 310,
        ingredients: ['Apple', 'Peanut Butter', 'Almonds', 'Honey'],
        icon: '🍎',
        description: 'Crispy apple with creamy peanut butter spread',
        isPopular: false
    },
    {
        id: '12',
        name: 'Banana Chia Boost',
        category: 'banana',
        price: 149,
        protein: 9,
        calories: 295,
        ingredients: ['Banana', 'Chia Seeds', 'Almonds', 'Coconut'],
        icon: '🍌',
        description: 'High-omega banana bowl with superfood chia seeds',
        isPopular: false
    },
    {
        id: '13',
        name: 'Pineapple Cashew Bowl',
        category: 'mixed',
        price: 159,
        protein: 8,
        calories: 315,
        ingredients: ['Pineapple', 'Cashews', 'Walnuts', 'Honey'],
        icon: '🍍',
        description: 'Tropical pineapple with premium cashews',
        isPopular: false
    },
    {
        id: '14',
        name: 'Papaya Nut Bowl',
        category: 'mixed',
        price: 149,
        protein: 7,
        calories: 280,
        ingredients: ['Papaya', 'Almonds', 'Chia Seeds', 'Honey'],
        icon: '🧡',
        description: 'Nutrient-rich papaya with crunchy almonds',
        isPopular: false
    },
    {
        id: '15',
        name: 'Almond Oats Protein Pot',
        category: 'mixed',
        price: 139,
        protein: 8,
        calories: 300,
        ingredients: ['Almonds', 'Oats', 'Banana', 'Honey'],
        icon: '🥜',
        description: 'Simple yet powerful almond and oats combination',
        isPopular: false
    },
    {
        id: '16',
        name: 'Mango Peanut Bowl',
        category: 'mango',
        price: 149,
        protein: 9,
        calories: 320,
        ingredients: ['Mango', 'Peanuts', 'Chia Seeds', 'Dates'],
        icon: '🥭',
        description: 'Mango sweetness with peanut protein power',
        isPopular: false
    },
    {
        id: '17',
        name: 'Mixed Fruit Power Bowl',
        category: 'mixed',
        price: 159,
        protein: 8,
        calories: 305,
        ingredients: ['Banana', 'Apple', 'Papaya', 'Cashews', 'Almonds'],
        icon: '🎨',
        description: 'Rainbow of fruits with dual-nut combination',
        isPopular: false
    },
    {
        id: '18',
        name: 'Honey Almond Crunch',
        category: 'mixed',
        price: 149,
        protein: 9,
        calories: 290,
        ingredients: ['Almonds', 'Honey', 'Oats', 'Banana'],
        icon: '🍯',
        description: 'Crunchy almonds with golden honey drizzle',
        isPopular: false
    },
    {
        id: '19',
        name: 'Banana Oats Energy Bowl',
        category: 'banana',
        price: 139,
        protein: 7,
        calories: 280,
        ingredients: ['Banana', 'Oats', 'Walnuts', 'Chia Seeds'],
        icon: '🍌',
        description: 'Complete energy bowl for your workout',
        isPopular: false
    },
    {
        id: '20',
        name: 'Cashew Apple Boost',
        category: 'apple',
        price: 159,
        protein: 10,
        calories: 330,
        ingredients: ['Apple', 'Cashews', 'Dates', 'Peanut Butter'],
        icon: '🍎',
        description: 'Premium apple with rich cashew and date combination',
        isPopular: false
    }
];

// Customization ingredients
const customizationData = {
    fruits: [
        { id: 'banana', name: 'Banana', price: 30, protein: 1, calories: 89, icon: '🍌' },
        { id: 'apple', name: 'Apple', price: 40, protein: 0.3, calories: 52, icon: '🍎' },
        { id: 'mango', name: 'Mango', price: 50, protein: 0.8, calories: 60, icon: '🥭' },
        { id: 'papaya', name: 'Papaya', price: 35, protein: 0.6, calories: 43, icon: '🧡' },
        { id: 'pineapple', name: 'Pineapple', price: 45, protein: 0.5, calories: 50, icon: '🍍' }
    ],
    nuts: [
        { id: 'almonds', name: 'Almonds', price: 60, protein: 6, calories: 160, icon: '🥜' },
        { id: 'cashews', name: 'Cashews', price: 70, protein: 5, calories: 155, icon: '🥜' },
        { id: 'pistachios', name: 'Pistachios', price: 80, protein: 6, calories: 160, icon: '🌰' },
        { id: 'walnuts', name: 'Walnuts', price: 70, protein: 8, calories: 185, icon: '🥜' },
        { id: 'peanuts', name: 'Peanuts', price: 50, protein: 7, calories: 160, icon: '🥜' }
    ],
    toppings: [
        { id: 'chia-seeds', name: 'Chia Seeds', price: 20, protein: 2.7, calories: 49, icon: '⭐' },
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
