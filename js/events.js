function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle green button click by setting function name

const greenButton = document.getElementById('make-green-button');

greenButton.onclick = makeGreen ;

function makeGreen (){
    document.body.style.backgroundColor = 'green';
}

// handle event using anonymous function

const blueButton = document.getElementById('make-blue-button');

blueButton.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}

// handle by using addEventListener

const goldenRodButton = document.getElementById('make-goldenrod-button');
goldenRodButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod (){
    document.body.style.backgroundColor = 'goldenrod';
}

// add event listener using anonymous function

const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
});

// direct shortcut
document.getElementById('make-lightblue-button').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})
