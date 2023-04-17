const grids = document.querySelectorAll('.grid');
let counter = 0;
const arr = [];

grids.forEach(function(item) {
    item.addEventListener('click', function() {
        let number = Number(this.getAttribute('value'));
        if (number === 1) return; number++;
        this.setAttribute('value', '1');

        const turn = document.querySelector('[data-turn]');
        counter++;

        if (counter %2 === 1) {
            this.textContent = 'X';
            turn.textContent = "O's turn";
        } else if (counter %2 === 0) {
            this.textContent = 'O';
            turn.textContent = "X's turn";
        };

        let i = -1;
        grids.forEach(function(item) {
            i++;
            arr[i] = item.textContent;

            if (arr[i] === '') arr[i] = Math.random();
        }); 

        const res = document.querySelector('[data-result]');
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[0]) {
            res.textContent = `Winner: ${arr[0]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] === arr[3]) {
            res.textContent = `Winner: ${arr[3]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[7] === arr[6]) {
            res.textContent = `Winner: ${arr[6]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] === arr[0]) {
            res.textContent = `Winner: ${arr[0]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] === arr[1]) {
            res.textContent = `Winner: ${arr[1]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] === arr[2]) {
            res.textContent = `Winner: ${arr[2]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] === arr[0]) {
            res.textContent = `Winner: ${arr[0]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        } else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] === arr[2]) {
            res.textContent = `Winner: ${arr[2]}`;
            grids.forEach(item => item.setAttribute('value', '1'));
        };
    });
});

document.querySelector('[data-restart]').addEventListener('click', function() {
    grids.forEach((item) => {
        item.setAttribute('value', '0');
        item.textContent = '';
    });
    for (item in arr) arr[item] = '';
});