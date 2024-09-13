const btnCadastrar = document.querySelector("#cadastrar");
const btnAuto_cadastrar = document.querySelector("#auto_cadastrar");
const btnImprimir = document.querySelector("#imprimir");

// matriz
var alunos = [];

// função para excluir a tudo
function excluir(){
  // aqui pega todos os botões excluir
  let btnExcluir = [...document.querySelectorAll(".lixo")];
  // aqui percorre por todos eles e coloca uma função de click
  btnExcluir.map((el) => {
    //aqui é uma função de click que indentifica ela mesma com o "event" 
    el.addEventListener("click", (event) => {
      // aqui ele faz um puta role no DOM pra achar o nome ao qual ele está sendo clicado
      procNome=event.target.nextElementSibling.children[0].innerText;
      // aqui ele percorre a matriz e procura o nome e exclui caso seja encontrado
      alunos.map((el,pos)=>{
        el.map((elem)=>{
          if(elem==procNome){
            // aqui ele confirma se você quer excluir o aluno
            if (confirm(`certeza que deseja excluir ${el[0]}?`)) {
              // aqui é uma forma de faciliar a indenticar onde ele está inserido no html
              let caixa = event.target.parentNode;
              // aqui ele apaga o a caixa
              caixa.parentNode.removeChild(caixa);
              // aqui ele remove o aluno da matriz
              alunos.splice(pos,1);
              console.log(alunos);
            }
          }
        })
      });
    });
  });
}

// botão cadastrar
btnCadastrar.addEventListener("click", () => {
  // caixas de textos
  const txtNome = document.querySelector("#nome").value;
  const txtIdade = document.querySelector("#idade").value;
  const txtCurso = document.querySelector("#curso").value;

  console.log(txtNome);
  if (txtNome != "" && txtIdade != "" && txtCurso != "") {
    alunos.push([txtNome, txtIdade, txtCurso]);
  }
});

// botão auto cadastrar
var vezCadastro = 1;
btnAuto_cadastrar.addEventListener("click", () => {
  if (vezCadastro == 1) {
    alunos.push(["João", 16, "Java"]);

    alunos.push(["Maria", 22, "PHP"]);

    alunos.push(["José", 19, "SQL"]);

    alunos.push(["Carla", 20, "JavaScript"]);

    alunos.push(["Ingrid", 16, "HTML e CSS"]);

    vezCadastro++;
  }
});

// função encontrar e criar
var findCreate = (pesquisa, imprimir) => {
  // esse map vai percorrer as linhas
  alunos.map((el_pesquisa) => {
    // esse aqui vai olhar os valores de cada coluna na linha que em que o map de cima esta
    el_pesquisa.map((elem_pesquisa) => {
      // condição para mostrar  valor
      if (elem_pesquisa == pesquisa) {
        imprimir.innerHTML += `
      <div class="caixa">
        <img class='lixo' src="img/lixeira.png" alt="">
        <div class="inscritos">
          <p>${el_pesquisa[0]}</p>
          <p>${el_pesquisa[1]}</p>
          <p>${el_pesquisa[2]}</p>
        </div>
      </div>
        `;
        excluir();
      }
    });
  });
};

// botão imprimir
var vez = 1;
btnImprimir.addEventListener("click", () => {
  let imprimir = document.querySelector("#dados");
  let limpar = document.querySelector("#limpar");
  limpar.style.display = "block";
  alunos.map((el) => {
    if (vez == 1) {
      imprimir.innerHTML += `
      <div class="caixa">
        <img class='lixo' src="img/lixeira.png" alt="">
          <div class="inscritos">
            <p>${el[0]}</p>
            <p>${el[1]}</p>
            <p>${el[2]}</p>
          </div>
          </div>
        `;
        excluir();
    }
  });

  vez++;

  limpar.addEventListener("click", () => {
    limpar.style.display = "none";
    imprimir.innerHTML = "";
    vez = 1;
  });
});

// pesquisar
var btnPesquisar = document.querySelector("#btnPesquisar");
// função click da pesquisa
btnPesquisar.addEventListener("click", () => {
  let limpar = document.querySelector("#limpar");
  limpar.style.display = "block";

  let imprimir = document.querySelector("#dadosPesquisa");
  let pesquisa = document.querySelector("#pesquisar").value;
  findCreate(pesquisa, imprimir);
  // botão excluir



  
  // parei aqui
  // limpar o valor e esconder o botão
  limpar.addEventListener("click", () => {
    limpar.style.display = "none";
    imprimir.innerHTML = "";
    vez = 1;
  });
});

