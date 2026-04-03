// Protein Pot - Customize Bowl Feature
// Allows users to build custom protein bowls

// Customization state
let customizationState = {
    fruits: [],
    nuts: [],
    toppings: [],
    totalPrice: 0,
    totalProtein: 0,
    totalCalories: 0
};

// Cache DOM elements
const customizeDOM = {
    fruitsContainer: null,
    nutsContainer: null,
    toppingsContainer: null,
    addCustomBowlBtn: null,
    summaryProtein: null,
    summaryCalories: null,
    summaryPrice: null,
    selectedItems: null,
    customQuantity: null
};

/**
 * Initialize DOM cache
 */
function initializeCustomizeDOM() {
    customizeDOM.fruitsContainer = document.getElementById('fruits-options');
    customizeDOM.nutsContainer = document.getElementById('nuts-options');
    customizeDOM.toppingsContainer = document.getElementById('toppings-options');
    customizeDOM.addCustomBowlBtn = document.getElementById('add-custom-bowl');
    customizeDOM.summaryProtein = document.getElementById('summary-protein');
    customizeDOM.summaryCalories = document.getElementById('summary-calories');
    customizeDOM.summaryPrice = document.getElementById('summary-price');
    customizeDOM.selectedItems = document.getElementById('selected-items');
    customizeDOM.customQuantity = document.getElementById('custom-quantity');
}

/**
 * Initialize customization page
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeCustomizeDOM();
    renderCustomizationOptions();
    setupEventListeners();
});

/**
 * Render all customization options at once
 */
function renderCustomizationOptions() {
    // Render fruits
    if (customizeDOM.fruitsContainer) {
        customizeDOM.fruitsContainer.innerHTML = buildOptionsHTML(customizationData.fruits, 'fruit');
    }

    // Render nuts
    if (customizeDOM.nutsContainer) {
        customizeDOM.nutsContainer.innerHTML = buildOptionsHTML(customizationData.nuts, 'nut');
    }

    // Render toppings
    if (customizeDOM.toppingsContainer) {
        customizeDOM.toppingsContainer.innerHTML = buildOptionsHTML(customizationData.toppings, 'topping');
    }

    // Attach change listeners
    attachCheckboxListeners();
}

/**
 * Build options HTML in bulk
 * @param {Array} items - Items to render
 * @param {string} type - Type (fruit, nut, topping)
 * @returns {string} HTML string
 */
function buildOptionsHTML(items, type) {
    let html = '';
    
    items.forEach(item => {
        html += `
            <div class="p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-600 transition option-item">
                <label class="flex items-center cursor-pointer">
                    <input type="checkbox" data-type="${type}" data-id="${item.id}" class="w-4 h-4 mr-2 cursor-pointer customization-option">
                    <div class="flex-1">
                        <p class="font-semibold text-gray-800">${item.icon} ${item.name}</p>
                        <p class="text-xs text-gray-600">+₹${item.price}</p>
                    </div>
                </label>
            </div>
        `;
    });
    
    return html;
}

/**
 * Attach change listeners to all checkboxes
 */
function attachCheckboxListeners() {
    document.querySelectorAll('.customization-option').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const optionItem = e.target.closest('.option-item');
            if (e.target.checked) {
                optionItem.classList.add('border-green-600', 'bg-green-50');
            } else {
                optionItem.classList.remove('border-green-600', 'bg-green-50');
            }
            updateCustomization();
        });
    });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    if (customizeDOM.addCustomBowlBtn) {
        customizeDOM.addCustomBowlBtn.addEventListener('click', addCustomBowlToCart);
    }
}

/**
 * Update customization summary
 */
function updateCustomization() {
    // Get selected items
    const fruits = Array.from(document.querySelectorAll('input[data-type="fruit"]:checked')).map(input => {
        const id = input.dataset.id;
        return customizationData.fruits.find(f => f.id === id);
    });

    const nuts = Array.from(document.querySelectorAll('input[data-type="nut"]:checked')).map(input => {
        const id = input.dataset.id;
        return customizationData.nuts.find(n => n.id === id);
    });

    const toppings = Array.from(document.querySelectorAll('input[data-type="topping"]:checked')).map(input => {
        const id = input.dataset.id;
        return customizationData.toppings.find(t => t.id === id);
    });

    customizationState.fruits = fruits;
    customizationState.nuts = nuts;
    customizationState.toppings = toppings;

    // Calculate totals
    const basePrice = 100; // Base bowl price
    const totalPrice = basePrice + 
        fruits.reduce((sum, f) => sum + f.price, 0) +
        nuts.reduce((sum, n) => sum + n.price, 0) +
        toppings.reduce((sum, t) => sum + t.price, 0);

    const totalProtein = fruits.reduce((sum, f) => sum + f.protein, 0) +
        nuts.reduce((sum, n) => sum + n.protein, 0) +
        toppings.reduce((sum, t) => sum + t.protein, 0);

    const totalCalories = fruits.reduce((sum, f) => sum + f.calories, 0) +
        nuts.reduce((sum, n) => sum + n.calories, 0) +
        toppings.reduce((sum, t) => sum + t.calories, 0);

    customizationState.totalPrice = totalPrice;
    customizationState.totalProtein = totalProtein;
    customizationState.totalCalories = totalCalories;

    // Update display
    updateSummaryDisplay();
}

/**
 * Update summary display
 */
function updateSummaryDisplay() {
    // Update summary numbers
    if (customizeDOM.summaryProtein) customizeDOM.summaryProtein.textContent = `${customizationState.totalProtein.toFixed(1)}g`;
    if (customizeDOM.summaryCalories) customizeDOM.summaryCalories.textContent = `${customizationState.totalCalories.toFixed(0)}`;
    if (customizeDOM.summaryPrice) customizeDOM.summaryPrice.textContent = `₹${customizationState.totalPrice}`;

    // Update selected items list
    if (customizeDOM.selectedItems) {
        let html = '';

        if (customizationState.fruits.length === 0 && 
            customizationState.nuts.length === 0 && 
            customizationState.toppings.length === 0) {
            html = '<p class="text-gray-600">No items selected yet</p>';
        } else {
            if (customizationState.fruits.length > 0) {
                html += '<div class="mb-2"><p class="font-semibold text-gray-700">Fruits:</p>';
                customizationState.fruits.forEach(f => {
                    html += `<p class="text-xs text-gray-600">• ${f.icon} ${f.name}</p>`;
                });
                html += '</div>';
            }

            if (customizationState.nuts.length > 0) {
                html += '<div class="mb-2"><p class="font-semibold text-gray-700">Nuts:</p>';
                customizationState.nuts.forEach(n => {
                    html += `<p class="text-xs text-gray-600">• ${n.icon} ${n.name}</p>`;
                });
                html += '</div>';
            }

            if (customizationState.toppings.length > 0) {
                html += '<div class="mb-2"><p class="font-semibold text-gray-700">Toppings:</p>';
                customizationState.toppings.forEach(t => {
                    html += `<p class="text-xs text-gray-600">• ${t.icon} ${t.name}</p>`;
                });
                html += '</div>';
            }
        }

        customizeDOM.selectedItems.innerHTML = html;
    }

    // Update add button state
    if (customizeDOM.addCustomBowlBtn) {
        const hasSelection = customizationState.fruits.length > 0 || 
                            customizationState.nuts.length > 0 || 
                            customizationState.toppings.length > 0;
        
        if (!hasSelection) {
            customizeDOM.addCustomBowlBtn.disabled = true;
            customizeDOM.addCustomBowlBtn.classList.add('opacity-50', 'cursor-not-allowed');
            customizeDOM.addCustomBowlBtn.textContent = 'Select Items to Continue';
        } else {
            customizeDOM.addCustomBowlBtn.disabled = false;
            customizeDOM.addCustomBowlBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            customizeDOM.addCustomBowlBtn.textContent = 'Add to Cart';
        }
    }
}

/**
 * Validate custom bowl
 * @returns {Object} {isValid, errors}
 */
function validateCustomBowl() {
    const errors = [];

    if (customizationState.fruits.length === 0) {
        errors.push('Select at least one fruit');
    }
    if (customizationState.fruits.length > 3) {
        errors.push('Maximum 3 fruits allowed');
    }

    if (customizationState.nuts.length === 0) {
        errors.push('Select at least one nut');
    }
    if (customizationState.nuts.length > 3) {
        errors.push('Maximum 3 nuts allowed');
    }

    if (customizationState.toppings.length > 5) {
        errors.push('Maximum 5 toppings allowed');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

/**
 * Add custom bowl to cart
 */
function addCustomBowlToCart() {
    // Validate
    const validation = validateCustomBowl();
    
    if (!validation.isValid) {
        showErrorMessage('Please fix errors: ' + validation.errors.join(', '));
        return;
    }

    // Get quantity
    const quantity = customizeDOM.customQuantity ? parseInt(customizeDOM.customQuantity.value) || 1 : 1;

    // Build custom bowl name
    const fruitNames = customizationState.fruits.map(f => f.name).join(' + ');
    const nutNames = customizationState.nuts.map(n => n.name).join(' + ');
    const customBowlName = `Custom Bowl (${fruitNames} • ${nutNames})`;

    // Create custom bowl object
    const customBowl = {
        name: customBowlName,
        price: customizationState.totalPrice,
        protein: customizationState.totalProtein,
        calories: customizationState.totalCalories,
        icon: '🥗',
        ingredients: [
            ...customizationState.fruits.map(f => f.name),
            ...customizationState.nuts.map(n => n.name),
            ...customizationState.toppings.map(t => t.name)
        ]
    };

    // Add to cart
    addToCart(customBowl, quantity, customBowlName);

    // Reset form
    resetCustomization();

    // Show success message
    showSuccessMessage('Custom bowl added to cart! 🎉');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Reset customization form
 */
function resetCustomization() {
    // Uncheck all checkboxes
    document.querySelectorAll('.customization-option').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.closest('.option-item').classList.remove('border-green-600', 'bg-green-50');
    });

    // Reset quantity
    if (customizeDOM.customQuantity) {
        customizeDOM.customQuantity.value = 1;
    }

    // Update display
    updateCustomization();
}

/**
 * Update customization summary
 */
function updateCustomization() {
    // Get selected items
    const fruits = Array.from(document.querySelectorAll('input[data-type="fruit"]:checked')).map(input => {
        const id = input.dataset.id;
        return customizationData.fruits.find(f => f.id === id);
    });

    const nuts = Array.from(document.querySelectorAll('input[data-type="nut"]:checked')).map(input => {
        const id = input.dataset.id;
        return customizationData.nuts.find(n => n.id === id);
    });

    const toppings = Array.from(document.querySelectorAll('input[data-type="topping"]:checked')).map(input => {
        const id = input.dataset.id;
        return customizationData.toppings.find(t => t.id === id);
    });

    customizationState.fruits = fruits;
    customizationState.nuts = nuts;
    customizationState.toppings = toppings;

    // Calculate totals
    const basePrice = 100; // Base bowl price
    const totalPrice = basePrice + 
        fruits.reduce((sum, f) => sum + f.price, 0) +
        nuts.reduce((sum, n) => sum + n.price, 0) +
        toppings.reduce((sum, t) => sum + t.price, 0);

    const totalProtein = fruits.reduce((sum, f) => sum + f.protein, 0) +
        nuts.reduce((sum, n) => sum + n.protein, 0) +
        toppings.reduce((sum, t) => sum + t.protein, 0);

    const totalCalories = fruits.reduce((sum, f) => sum + f.calories, 0) +
        nuts.reduce((sum, n) => sum + n.calories, 0) +
        toppings.reduce((sum, t) => sum + t.calories, 0);

    customizationState.totalPrice = totalPrice;
    customizationState.totalProtein = totalProtein;
    customizationState.totalCalories = totalCalories;

    // Update display
    updateSummaryDisplay();
}

// Update summary display
function updateSummaryDisplay() {
    // Update summary numbers
    const proteinEl = document.getElementById('summary-protein');
    const caloriesEl = document.getElementById('summary-calories');
    const priceEl = document.getElementById('summary-price');

    if (proteinEl) proteinEl.textContent = `${customizationState.totalProtein.toFixed(1)}g`;
    if (caloriesEl) caloriesEl.textContent = `${customizationState.totalCalories.toFixed(0)}`;
    if (priceEl) priceEl.textContent = `₹${customizationState.totalPrice}`;

    // Update selected items list
    const selectedItemsEl = document.getElementById('selected-items');
    if (selectedItemsEl) {
        let html = '';

        if (customizationState.fruits.length === 0 && 
            customizationState.nuts.length === 0 && 
            customizationState.toppings.length === 0) {
            html = '<p class="text-gray-600">No items selected yet</p>';
        } else {
            if (customizationState.fruits.length > 0) {
                html += '<div class="mb-2"><p class="font-semibold text-gray-700">Fruits:</p>';
                customizationState.fruits.forEach(f => {
                    html += `<p class="text-xs text-gray-600">• ${f.icon} ${f.name}</p>`;
                });
                html += '</div>';
            }

            if (customizationState.nuts.length > 0) {
                html += '<div class="mb-2"><p class="font-semibold text-gray-700">Nuts:</p>';
                customizationState.nuts.forEach(n => {
                    html += `<p class="text-xs text-gray-600">• ${n.icon} ${n.name}</p>`;
                });
                html += '</div>';
            }

            if (customizationState.toppings.length > 0) {
                html += '<div class="mb-2"><p class="font-semibold text-gray-700">Toppings:</p>';
                customizationState.toppings.forEach(t => {
                    html += `<p class="text-xs text-gray-600">• ${t.icon} ${t.name}</p>`;
                });
                html += '</div>';
            }
        }

        selectedItemsEl.innerHTML = html;
    }

    // Update add button state
    const addBtn = document.getElementById('add-custom-bowl');
    if (addBtn) {
        const hasSelection = customizationState.fruits.length > 0 || 
                            customizationState.nuts.length > 0 || 
                            customizationState.toppings.length > 0;
        
        if (!hasSelection) {
            addBtn.disabled = true;
            addBtn.classList.add('opacity-50', 'cursor-not-allowed');
            addBtn.textContent = 'Select Items to Continue';
        } else {
            addBtn.disabled = false;
            addBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            addBtn.textContent = 'Add to Cart';
        }
    }
}

// Add custom bowl to cart
function addCustomBowlToCart() {
    // Validate selection
    if (customizationState.fruits.length === 0) {
        showErrorMessage('Please select at least one fruit');
        return;
    }

    if (customizationState.nuts.length === 0) {
        showErrorMessage('Please select at least one nut');
        return;
    }

    // Get quantity
    const quantityInput = document.getElementById('custom-quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    // Build custom bowl name
    const fruitNames = customizationState.fruits.map(f => f.name).join(' + ');
    const nutNames = customizationState.nuts.map(n => n.name).join(' + ');
    const customBowlName = `Custom Bowl (${fruitNames} • ${nutNames})`;

    // Create custom bowl object
    const customBowl = {
        name: customBowlName,
        price: customizationState.totalPrice,
        protein: customizationState.totalProtein,
        calories: customizationState.totalCalories,
        icon: '🥗',
        ingredients: [
            ...customizationState.fruits.map(f => f.name),
            ...customizationState.nuts.map(n => n.name),
            ...customizationState.toppings.map(t => t.name)
        ]
    };

    // Add to cart
    addToCart(customBowl, quantity, customBowlName);

    // Reset form
    resetCustomization();

    // Show success message
    showSuccessMessage('Custom bowl added to cart! 🎉');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset customization
function resetCustomization() {
    // Uncheck all checkboxes
    document.querySelectorAll('.customization-option').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.closest('.option-item').classList.remove('border-green-600', 'bg-green-50');
    });

    // Reset quantity
    const quantityInput = document.getElementById('custom-quantity');
    if (quantityInput) {
        quantityInput.value = 1;
    }

    // Update display
    updateCustomization();
}

// Validation functions
function validateCustomBowl() {
    const errors = [];

    if (customizationState.fruits.length === 0) {
        errors.push('Select at least one fruit');
    }
    if (customizationState.fruits.length > 3) {
        errors.push('Maximum 3 fruits allowed');
    }

    if (customizationState.nuts.length === 0) {
        errors.push('Select at least one nut');
    }
    if (customizationState.nuts.length > 3) {
        errors.push('Maximum 3 nuts allowed');
    }

    if (customizationState.toppings.length > 5) {
        errors.push('Maximum 5 toppings allowed');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}
