document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(checkbox => checkbox.value);
    displaySmoothie(selectedIngredients);
});

// List of ingredient prices
const ingredientPrices = {
    "Banana": 1.59,
    "Strawberry": 3.43,
    "Blueberry": 2.69,
    "Mango": 2.13,
    "Spinach": 1.63,
    "Kale": 1.42,
    "Pineapple": 2.21
};

function displaySmoothie(ingredients) {
    const smoothieOutput = document.getElementById('smoothie-output');
    smoothieOutput.innerHTML = ''; // Clear previous output

    if (ingredients.length === 0) {
        smoothieOutput.textContent = "Please select at least one ingredient!";
        return;
    }

    const smoothieDescription = document.createElement('p');
    smoothieDescription.textContent = "Your desired smoothie includes: " + ingredients.join(", ");
    smoothieOutput.appendChild(smoothieDescription);

    // Calculate total price
    const total = calculateTotalPrice(ingredients);
    const bill = document.createElement('p');
    bill.textContent = "Total Price: $" + total.toFixed(2);
    smoothieOutput.appendChild(bill);
}

function calculateTotalPrice(ingredients) {
    let total = 0;
    ingredients.forEach(ingredient => {
        total += ingredientPrices[ingredient];
    });
    return total;
}
