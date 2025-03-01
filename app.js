let cart = [];
let total = 0;
let selectedDrinkFlavor = "";

const drinkPrices = {
    "Orange": { "Small": 20, "Medium": 30, "Large": 40 },
    "Watermelon": { "Small": 25, "Medium": 35, "Large": 45 },
    "Mango": { "Small": 40, "Medium": 50, "Large": 60 },
    "Apple": { "Small": 20, "Medium": 30, "Large": 40 },
    "Melon": { "Small": 35, "Medium": 45, "Large": 55 },
    "Pomelo": { "Small": 30, "Medium": 40, "Large": 50 }
};


document.querySelectorAll('.item').forEach(button => {
    button.addEventListener('click', () => {
        let itemName = button.getAttribute('data-name');
        let itemPrice = button.getAttribute('data-price') ? parseInt(button.getAttribute('data-price')) : 0;

        if (drinkPrices[itemName]) {
            selectedDrinkFlavor = itemName;
            alert(`You selected ${itemName}. Now choose a size!`);
            return;
        }

        if (button.classList.contains('size')) {
            if (!selectedDrinkFlavor) {
                alert("Please select a drink flavor first!");
                return;
            }
            let size = button.getAttribute('data-size');
            itemName = `${selectedDrinkFlavor} (${size})`;
            itemPrice = drinkPrices[selectedDrinkFlavor][size];
            selectedDrinkFlavor = ""; 
        }

        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});


function updateCart() {
    let cartElement = document.getElementById('cart');
    let totalElement = document.getElementById('total');

    cartElement.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - ₱${item.price} 
            <button class="remove-btn" onclick="removeItem(${index})">❌</button>`;
        cartElement.appendChild(itemDiv);
        total += item.price;
    });

    totalElement.textContent = `₱${total}`;
}


function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}


document.getElementById('clearCart').addEventListener('click', () => {
    cart = [];
    selectedDrinkFlavor = "";
    updateCart();
});


document.getElementById('placeOrder').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items before placing an order.");
        return;
    }
    alert("Your order has been placed! Thank you.");
    cart = [];
    updateCart();
});


document.querySelector('#searchicon1').addEventListener('click', function(){
    document.querySelector('#searchinput1').style.display= 'flex';
    this.style.display= 'none';
});

document.querySelector('#searchicon2').addEventListener('click', function(){
    document.querySelector('#searchinput2').style.display= 'flex';
    this.style.display= 'none';
});


const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});
