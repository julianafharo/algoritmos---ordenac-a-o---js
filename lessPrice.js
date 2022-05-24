const books = require('./listbooks');

function lessPrice(arrProducts, startPosition) {
    let cheap = startPosition;

for(let atual = startPosition; atual < arrProducts.length; atual++) {
    if(arrProducts[atual].price < arrProducts[cheap].price) {
        cheap = atual;
        }
    } return cheap;
}
module.exports = lessPrice;
