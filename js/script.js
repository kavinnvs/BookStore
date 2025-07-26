const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$15"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: "$10"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$9"
  }
];
const bookList = document.getElementById('book-list');

books.forEach(book => {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';

  bookCard.innerHTML = `
    <h3 class="book-title">${book.title}</h3>
    <p class="book-author">by ${book.author}</p>
    <p class="book-price">${book.price}</p>
  `;

  bookList.appendChild(bookCard);
});
