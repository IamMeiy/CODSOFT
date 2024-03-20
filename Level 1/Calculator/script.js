function display(val){
    document.getElementById('display').value += val;
}
function clear(){
    document.getElementById('display').value = '';
}
document.getElementById('clear').addEventListener('click', clear);

document.getElementById('keys').addEventListener('click', function(e){
    keys = e.target.id;
    console.log(keys)
    display(keys);
});

