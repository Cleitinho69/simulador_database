const btnCadastrar = document.querySelector('#cadastrar');
const btnAuto_cadastrar = document.querySelector("#auto_casdastrar");
const btnImprimir = document.querySelector('#imprimir');
var nome = [];
var idade = [];
var curso =[];
console.log(nome)
btnCadastrar.addEventListener('click', ()=>{
    nome.push(document.querySelector('#nome').value);''
})