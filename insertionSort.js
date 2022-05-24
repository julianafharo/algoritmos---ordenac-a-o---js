const books = require ('./listbooks');

function insertionSorce(list) {
    for(let atual = 0; atual < list.length; atual++){
        let analyse = atual;
        while(analyse > 0 && list[analyse].price < list[analyse-1].price) {
            let itemAnalyse = list[analyse];
            let previousBook = list[analyse - 1];

            list[analyse] = previousBook;
            list[analyse-1] = itemAnalyse;

            analyse--;
        }
    }

    console.log(list);
}
insertionSorce(books);