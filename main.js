let header = document.getElementById('header');
let turn = 'x';

function status(id){
    let square = document.getElementById(id);
    if(square.innerHTML == '' && turn == 'x'){
        header.innerHTML = 'O Playing';
        turn = 'o';
        square.innerHTML = 'X';
    }else if (square.innerHTML == '' && turn == 'o') {
        header.innerHTML = 'X Playing';
        turn = 'x';
        square.innerHTML = 'O';
    }
    winner();
};

let squares = [];
function winner(){
    for(let i = 1; i < 10; i++){
        squares[i] = document.getElementById('square' + i).innerHTML;
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        end_again(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        end_again(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        end_again(7,8,9);
    }

    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        end_again(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        end_again(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        end_again(3,6,9);
    }

    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        end_again(1,5,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        end_again(3,5,7);
    }
}

function end_again(num1,num2,num3){
    header.innerHTML = `${squares[num1]} winner`
    document.getElementById('square' + num1).style.background = '#eaea18';
    document.getElementById('square' + num2).style.background = '#eaea18';
    document.getElementById('square' + num3).style.background = '#eaea18';

    setInterval(() => { header.innerHTML += '.'}, 1000);
    setTimeout(() => {location.reload()}, 3000);

    for (let i = 1; i < 10; i++) {
        document.getElementById('square' + i).onclick = null;
    }
}