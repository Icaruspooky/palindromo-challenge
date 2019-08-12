const input = document.getElementById('input');
const button = document.getElementById('erase');
const table = document.getElementById('table');

button.addEventListener('click', function () {
    let tableRows = table.getElementsByTagName('tr');
    let counter = 1;
    let length = tableRows.length;
    for (counter; counter < length; counter++) {
        tableRows.item(1).remove();
    }
});

input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        let sentence = input.value;
        if (sentence){
            let row = table.insertRow();
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