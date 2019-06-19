function contar() {

    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var res = document.getElementById("res");
    var c;

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("falta dados");
        res.innerHTML = "Impossivel contar."
    } else {
        res.innerHTML = "Contando...<br>";
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(p <= 0){
            window.alert("Passo inválido!!! Será considerado o PASSO 1");
            p = 1;
        }

        if (i < f) {

            for (c = i; c <= f; c += p) {

                res.innerHTML += `${c}  \u{1F603}	`;
            }
            // Unicode no JS é u\
        } else {
            for (c = i; c >= f; c -= p) {

                res.innerHTML += `${c} \u{1F603}	`;

            }
        }
        
        res.innerHTML += `${c} \u{1F603}	`;

    }

}