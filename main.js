const form = document.getElementById('form-dados');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tfoot');
    corpoAgenda.innerHTML = linhas;
}