class Estudante {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
};
function criarLista(tamanho) {
    var lista_estudantes = [];
    for (let i=1; i<=tamanho; i++) {
        let nota = Math.floor(Math.random() * 11);
        const estudante = new Estudante(`Aluno${i}`, nota);
        lista_estudantes.push(estudante);
    }
    return lista_estudantes
};
function acimaMedia(lista) {
    return lista.filter(aluno => aluno.nota >= 6)
};
//
const listaEstudantes = criarLista(25);
const listaAcimaMedia = acimaMedia(listaEstudantes);
// console.log(listaEstudantes);
console.log(listaAcimaMedia);