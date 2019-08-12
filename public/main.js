const input = document.getElementById('input');
const button = document.getElementById('erase');

button.addEventListener('click', function () {
    let tableRows = document.getElementById('body').getElementsByTagName('tr');
    let counter = 0;
    let length = tableRows.length;
    for (counter; counter < length; counter++) {
        tableRows.item(0).remove();
    }
});

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let sentence = input.value;
        if (sentence){
            let body = document.getElementById('body');
            let row = body.insertRow();
            let sentenceCell = row.insertCell();
            let palindromoCell = row.insertCell();
            sentenceCell.append(sentence);
    
            if (isPalindromo(sentence)) {
                palindromoCell.append('Sim');
                palindromoCell.setAttribute('data-verificado', 'positivo');
            } else {
                palindromoCell.append('Não');
                palindromoCell.setAttribute('data-verificado', 'negativo');
            }
            input.value = '';
        }        
    }
});

function isPalindromo(sentence) {
    let = re = /[\W_]/g;
    let lowerCaseSentence = sentence.toLowerCase().replace(re, '');
    let reverse = lowerCaseSentence.split('').reverse().join('');
    return lowerCaseSentence === reverse;
};