function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    if(numero.length < 2){
        document.getElementById('resultado').innerHTML = numero + num;
    }
    else{
        document.getElementById('resultado').innerHTML = "";
    }
}