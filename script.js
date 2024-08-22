const btnCadastrar = document.querySelector("#cadastrar");
const btnAuto_cadastrar = document.querySelector("#auto_cadastrar");
const btnImprimir = document.querySelector("#imprimir");
// caixas de textos
let txtNome = document.querySelector("#nome");
let txtIdade = document.querySelector("#idade");
let txtCurso = document.querySelector("#curso");
// arreys
var nome = [];
var idade = [];
var curso = [];

// botão cadastrar
btnCadastrar.addEventListener("click", () => {
  if (txtNome.value != "" && txtIdade.value != "" && txtCurso.value != "") {
    nome.push(txtNome.value);
    idade.push(txtIdade.value);
    curso.push(txtCurso.value);
  }
});

// botão auto cadastrar
btnAuto_cadastrar.addEventListener("click", () => {
  nome.push("João");
  idade.push(16);
  curso.push("Java");

  nome.push("Maria");
  idade.push(22);
  curso.push("PHP");

  nome.push("Jose");
  idade.push(19);
  curso.push("SQL");

  nome.push("Carla");
  idade.push(20);
  curso.push("JavaScript");

  nome.push("Ingrid");
  idade.push(16);
  curso.push("HTML e CSS");
});

// botão imprimir
btnImprimir.addEventListener("click", () => {
  let imprimir = document.querySelector("#dados");
  nome.map((el, pos) => {
    imprimir.innerHTML += `
        <div class="caixa">
            <button class="btnExcluir">
                <img src="img/lixeira.png">
            </button>
            <div class="inscrito">
                <p class="nome">${el}</p>
                <p class="idade">${idade[pos]} anos</p>
                <p class="curso">${curso[pos]}</p><br>
            </div>
        </div>`;
  });

  // botão excluir
  let btnExcluir = [...document.querySelectorAll(".btnExcluir")];
  btnExcluir.map((el) => {
    el.addEventListener("click", (event) => {
        // encontrar o nome do individo e armazenar a posição
        const pos = nome.indexOf(
            el.parentNode.querySelector(".nome").innerText
          );
        if (confirm(`certeza que deseja excluir ${nome[pos]}?`)) {
            let caixa = event.target.parentNode.parentNode;
            caixa.parentNode.removeChild(caixa);
    
            nome.splice(pos, 1);
            idade.splice(pos, 1);
            curso.splice(pos, 1);
          }
    });
  });
});

// pesquisar
var btnPesquisar = document.querySelector("#btnPesquisar");
btnPesquisar.addEventListener("click", () => {
  var imprimir = document.querySelector("#dadosPesquisa");
  var encontrado;
  let pesquisa = document.querySelector("#pesquisar").value;
  nome.map((el, pos) => {
    if (el == pesquisa) encontrado = pos;
  });

  imprimir.innerHTML += `
            <div class="caixa">
                <button class="btnExcluir">
                    <img src="img/lixeira.png">
                </button>
                <div class="inscrito">
                    <p class="nome">${nome[encontrado]}</p>
                    <p class="idade">${idade[encontrado]} anos</p>
                    <p class="curso">${curso[encontrado]}</p><br>
                </div>
            </div>`;

  // botão excluir
  let btnExcluir = [...document.querySelectorAll(".btnExcluir")];
  btnExcluir.map((el) => {
    el.addEventListener("click", (event) => {
      if (confirm(`certeza que deseja excluir ${nome[encontrado]}?`)) {
        let caixa = event.target.parentNode.parentNode;
        caixa.parentNode.removeChild(caixa);

        nome.splice(encontrado, 1);
        idade.splice(encontrado, 1);
        curso.splice(encontrado, 1);
      }
    });
  });
});;;
