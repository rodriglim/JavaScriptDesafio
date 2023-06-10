function $contadorCaracteres() {
    var $getQtd = document.querySelector('#textArea').value;

    document.getElementById('qtdCaracteres').innerHTML = `${$getQtd.length}`;

}