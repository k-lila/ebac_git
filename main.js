$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const novaTarefa = $('form input').val();
        let novoHtml = `<li>${novaTarefa}</li>`
        $(novoHtml).appendTo('ul')
        $('form input').val('')
    })

    $('ul').on('dblclick', 'li', function() {
        $(this).addClass('tarefa-feita');
    })
})