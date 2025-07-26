// Sample books – in real app, fetch from backend or JSON
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 499,
    image: "images/book1.jpg"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    image: "images/book2.jpg"
  }
];

// Render book cards on homepage
if (document.getElementById('book-list')) {
  const bookList = document.getElementById('book-list');

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${book.image}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">By ${book.author}</p>
          <p class="card-text"><strong>₹${book.price}</strong></p>
          <button class="btn btn-primary" onclick="addToCart(${book.id})">Add to Cart</button>
        </div>
      </div>
    `;
    bookList.appendChild(card);
  });
}

// Add book to cart (saved in localStorage)
function addToCart(bookId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const book = books.find(b => b.id === bookId);

  cart.push(book);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${book.title} added to cart!`);
}

// Display cart items
if (document.getElementById('cart-items')) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;
    const card = document.createElement('div');
    card.className = "col-md-6 mb-3";
    card.innerHTML = `
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">₹${item.price}</p>
              <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
    cartContainer.appendChild(card);
  });

  cartTotal.textContent = total;
}

// Remove item from cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload(); // Refresh the page to update
}
