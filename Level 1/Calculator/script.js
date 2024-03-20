// This below function is used for display value in text box
function display(val){
    document.getElementById('display').value += val;
}

// This below function is used for clear value in text box
function clear(){
    document.getElementById('display').value = '';
}
document.getElementById('clear').addEventListener('click', clear);

// This below function is used for evaluate the result and update in textbox
function solve(){
    let x = document.getElementById('display').value;
    if(x===''){
        alert('enter a number');
    }
    else{
        let y = eval(x);
        document.getElementById('display').value = y;
    } 
}
document.getElementById('result').addEventListener('click', solve);

// This below function is used for remove last chars in text box
function backspace(){
    let value = document.getElementById('display').value;
    document.getElementById('display').value = value.substr(0, value.length - 1);
}
document.getElementById('backspace').addEventListener('click', backspace);

// This is single event listener for keys (event deligation)
document.getElementById('keys').addEventListener('click', function(e){
    keys = e.target.id;
    display(keys);
});

