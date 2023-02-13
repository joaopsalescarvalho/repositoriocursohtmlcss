



function insert(num) {
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}
function mais() {
    res.innerHTML += "+"
    }
    function menos() {
        res.innerHTML += "-"
    }
    function multiplicar() {
        res.innerHTML += "*"
    }
    function dividir() {
        res.innerHTML += "/"
    }
    function x() {
        var res = document.getElementById('res').innerHTML;
        document.getElementById('res').innerHTML = res.substring(0, res.length - 1);
    }

function igual() {
    var res = document.getElementById('res').innerHTML;
    if (res) {
        document.getElementById('res').innerHTML = eval(res);
    }
}
