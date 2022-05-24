function exchange(list, analyse) {
    let itemAnalyse = list[analyse];
    let previousBook = list[analyse-1];

    list[analyse] = previousBook;
    list[analyse-1] = itemAnalyse;
}
module.exports = exchange;