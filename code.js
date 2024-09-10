async function pesquisarCep() {
    var cepInput = document.getElementById("cep");  // Renomeei para evitar conflitos de ID

    if (cepInput.value === "") {
        alert("CEP Vazio");
    } else {
        try {
            // Chamada da API para buscar informações do CEP
            var resposta = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);
            var dados = await resposta.json();

            if (dados.erro) {
                alert("CEP Inválido!");
                return;  // Sai da função se o CEP for inválido
            }
            
            // Atualização dos elementos HTML com os dados recebidos
            document.getElementById("bairro").innerHTML = dados.bairro || "N/A";
            document.getElementById("cep_result").innerHTML = dados.cep || "N/A";  // Atualizei o ID para evitar conflito
            document.getElementById("complemento").innerHTML = dados.complemento || "N/A";
            document.getElementById("ddd").innerHTML = dados.ddd || "N/A";
            document.getElementById("estado").innerHTML = dados.uf || "N/A";  // Corrigido de 'estado' para 'uf'
            document.getElementById("gia").innerHTML = dados.gia || "N/A";
            document.getElementById("ibge").innerHTML = dados.ibge || "N/A";
            document.getElementById("loc").innerHTML = dados.localidade || "N/A";
            document.getElementById("log").innerHTML = dados.logradouro || "N/A";
            document.getElementById("regiao").innerHTML = "N/A";  // API ViaCEP não retorna 'região'
            document.getElementById("siafi").innerHTML = dados.siafi || "N/A";
            document.getElementById("uf").innerHTML = dados.uf || "N/A";
            document.getElementById("unidade").innerHTML = dados.unidade || "N/A";

        } catch (e) {
            alert("Erro ao buscar o CEP. Verifique se o CEP está correto e tente novamente.");
        }
    }
}

// Função para limpar os campos
function limparCampos() {
    document.getElementById("cep").value = "";
    document.getElementById("bairro").innerHTML = "";
    document.getElementById("cep_result").innerHTML = "";
    document.getElementById("complemento").innerHTML = "";
    document.getElementById("ddd").innerHTML = "";
    document.getElementById("estado").innerHTML = "";
    document.getElementById("gia").innerHTML = "";
    document.getElementById("ibge").innerHTML = "";
    document.getElementById("loc").innerHTML = "";
    document.getElementById("log").innerHTML = "";
    document.getElementById("regiao").innerHTML = "";
    document.getElementById("siafi").innerHTML = "";
    document.getElementById("uf").innerHTML = "";
    document.getElementById("unidade").innerHTML = "";
}
