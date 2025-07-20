document.getElementsByTagName("input")[0].addEventListener("change", visualizarImagem);

let visualizacao = document.querySelector('img');

function visualizarImagem(event) {
    const file = event.target.files[0];

    if (file.type.includes("image")) {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            visualizacao.src = reader.result;
            document.getElementsByTagName("textarea")[0].value = reader.result;
            document.getElementsByClassName("botaoCopiaTexto")[0].style.display = "block";
        };
    }
    else {
        alert("Atenção! Por favor, escolha um arquivo no formato de imagem para realizar a conversão para Texto.");
    }
}

function copiarTextoImagem() {
  var copiaTexto = document.getElementById("txtCampoTexto");

  copiaTexto.select();
  copiaTexto.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copiaTexto.value);

  alert("Texto copiado para área de transferência.");
}    