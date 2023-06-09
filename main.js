$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#cancel-button').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const newImageAddress = $('#new-image-address').val()
        const newItem = $('<li style="display: none"></li>')
        $(`<img src='${newImageAddress}' />`).appendTo(newItem)
        $(`
            <div class='overlay-imagem-link'>
                <a href='${newImageAddress}' target='_blank' title='See full size image'>
                    See full size image
                </a>
            </div>
            `).appendTo(newItem)
            $(newItem).appendTo('ul')
            $(newItem).fadeIn(1000)
            $('#new-image-address').val('')
    })

})