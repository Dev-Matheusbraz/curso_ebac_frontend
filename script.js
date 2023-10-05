const form = document.getElementById('form');
const message = document.getElementById('message');
let validForm = false;

function validNumbers(numberA, numberB) {
    return numberB > numberA;
};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numberA = document.querySelector("#number-a");
    const numberB = document.querySelector("#number-b");
    let valueA = numberA.value;
    let valueB = numberB.value;

    validForm = validNumbers(valueA, valueB);

    if(validForm) {
        message.className = 'success-message';
        message.innerHTML = `Sucesso! O valor do campo B: '${valueB}', é maior que o valor do campo A: '${valueA}'`;
    } else if(valueA === '' || valueB === '') {
        message.className = 'failure-message';
        message.innerHTML = 'ERRO! Ambos os campos devem ser preenchidos';
    } else {
        message.className = 'failure-message';
        message.innerHTML = `ERRO! O valor do campo B: '${valueB}', deve ser maior que o valor do campo A '${valueA}'`;
    };
});

console.log(validNumbers(5, 10));