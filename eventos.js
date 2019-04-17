var vet_class = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var vet_indece = [];

var indice = '';
var id = 0;
function verifica(i) {
    var classe = document.getElementById(i).className;
    if (indice == '') {//primeiro click...
        indice = classe;
        id = i;
        $('img#' + i).attr('src', 'imagens/' + i + '.png');

    }
    else if (classe == indice) {//acertou...
        let img = $('.' + classe);
        $('#' + i).attr('src', 'imagens/' + i + '.png');
        setTimeout(function () {
            img.remove();
        }, 2000);
        indice = '';
        classe = '';
    }
    else {//errou...
        $('#' + i).attr('src', 'imagens/' + i + '.png');
        setTimeout(function () {
            $('#' + id).attr('src', 'imagens/0.png');
            $('#' + i).attr('src', 'imagens/0.png');
        }, 1500);
        classe = '';
        indice = '';
    }
}

for (let i = 1; i <= 20; i++) {
    var img = document.getElementById(i);
    //     var aleatorio = Math.floor(Math.random() * 20);
    //     if (vet_indece.indexOf(aleatorio) == -1) {
    //         img.setAttribute('class', vet_class[aleatorio]);
    //         console.log(vet_class[aleatorio]);
    //         vet_indece.push(aleatorio);
    //         vet_class.pop(aleatorio);
    //     }
    img.addEventListener('click', function () {
        verifica(i);
    });
}