const books = require('./listbooks');
const lessPrice = require('./lessPrice');

for(let atual = 0; atual < books.length; atual++) {
    let less = lessPrice(books, atual); 
    let atualBook = books[atual];
    let bookLessPrice = books[less];

    books[atual] = bookLessPrice;
    books[less] = atualBook;
}

console.log(books)