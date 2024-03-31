//definindo a variável para o escopo do formulário
const form = document.getElementById('form')

// constantes para as imagens
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji-Celebrando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji-Triste">'

//variáveis constantes para os inputs
const inputAtividade = document.getElementById('campo-atividade')
const inputNota = document.getElementById('campo-nota')

//criando arrays para o cálculo da média
const atividades = []
const notas = []

//constantes para inserir o html dos resultados
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

//constante para o user digitar o peso mínimo
const notaMin = parseFloat(prompt("Digite a nota mínima: "))

//variável linhas para não sobrescrever a linha anterior
let linhas = ''

//função principal
form.addEventListener('submit', function(e) {
    e.preventDefault()

    //funções
    adicionarLinha()
    atualizaTabela()
    mediaFinal()
})

//função para adicionar o conteúdo - atividades e nota / linha
function adicionarLinha() {

    if(atividades.includes(inputAtividade.value)) {
        alert(`A atividade: ${inputAtividade.value} já foi inserida!`)
    }else {
    //adicionando os valores entrados pelo input nos arrays
        atividades.push(inputAtividade.value)
        notas.push(parseFloat(inputNota.value))

        let linha = '<tr>'
        linha += `<td>${inputAtividade.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMin ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }
    //para resetar os campos de input
    inputAtividade.value = ''
    inputNota.value = ''
}

//função para atualizar a tabela com a nova linha de conteúdo
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

//função para calcular a média final
function calcMedia() {
    let somaNotas = 0

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }
    
    return somaNotas / notas.length
}

//função para mostrar o resultado da média final
function mediaFinal() {
    const media = calcMedia()

    document.getElementById('media-final').innerHTML = media.toFixed(2)
    document.getElementById('resultado-final').innerHTML = media >= notaMin ? spanAprovado : spanReprovado
}