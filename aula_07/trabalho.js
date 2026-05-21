let totalGeral = 0;

function adicionarItem(){

    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    if(produto === "" || quantidade === "" || preco === ""){
        alert("Preencha todos os campos!");
        return;
    }

    let total = quantidade * preco;

    totalGeral += total;

    let tabela = document.getElementById("listaItens");

    tabela.innerHTML += `
        <tr>
            <td>${produto}</td>
            <td>${quantidade}</td>
            <td>R$ ${parseFloat(preco).toFixed(2)}</td>
            <td>R$ ${total.toFixed(2)}</td>
        </tr>
    `;

    document.getElementById("valorFinal").innerHTML =
        `Total: R$ ${totalGeral.toFixed(2)}`;

    document.getElementById("produto").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}