async function pesquisarCep() {
    var cep = document.getElementById("cep");

    if(cep.value == "") alert("CEP Vazio");
    else{
    //chamada da Api
    //https://viacep.com.br/ws/62823000/json/
   
   try{
    var resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    var dados = await resposta.json();
   }catch(e){
    alert("CEP Invalido!");
   }

    console.log(dados);
    console.log(dados.localidade);
    console.log(dados.regiao);

    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");
    var complemento = document.getElementById("complemento");
    var ddd = document.getElementById("ddd");
    var estado = document.getElementById("estado");
    var gia = document.getElementById("gia");
    var ibge = document.getElementById("ibge");
    var localidade = document.getElementById("loc");
    var logradouro = document.getElementById("log");
    var regiao = document.getElementById("regiao");
    var siafi = document.getElementById("siafi");
    var uf = document.getElementById("uf");
    var unidade = document.getElementById("unidade");
    // cep 60861360

    bairro.innerHTML = dados.bairro;
    cep.innerHTML = dados.cep;
    complemento.innerHTML = dados.complemento;
    ddd.innerHTML = dados.ddd;
    estado.innerHTML = dados.estado;
    gia.innerHTML = dados.gia;
    ibge.innerHTML = dados.ibge;
    localidade.innerHTML = dados.localidade;
    logradouro.innerHTML = dados.logradouro;
    regiao.innerHTML = dados.regiao;
    siafi.innerHTML = dados.siafi;
    uf.innerHTML = dados.uf;
    unidade.innerHTML = dados.unidade;

    }
}