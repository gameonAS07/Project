// —— Countdown code (unchanged) —— 
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears = "31 Jan 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);

// —— New: Dynamic product loading & cart handling —— 

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://127.0.0.1:5000/getProducts')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('product-container');
      container.innerHTML = products.map(p => `
        <div class="product-box">
          <h3>${p.name}</h3>
          <p>Price: ₹${p.price_per_unit}</p>
          <p>Stock: ${p.quantity}</p>
          <button class="cart-btn"
                  onclick="addToCart(${p.product_id}, '${p.name}', ${p.price_per_unit})">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
        </div>
      `).join('');
    })
    .catch(err => console.error('Could not load products:', err));
});

// In-memory cart
let cart = [];
function addToCart(id, name, price) {
  const item = cart.find(i => i.product_id === id);
  if (item) item.quantity++;
  else cart.push({ product_id: id, name, price_per_unit: price, quantity: 1 });
  console.log('Cart:', cart);
}
