
/* Template Name   : Treelink, mobile page for links.
* Author           : Jorge Perez
* Version          : 1.0.2
* Created          : Nov 2022
* File Description : Contact.js file of the Contant Form page  */

$('#working_form').submit(function() {

    var action = $(this).attr('action');

    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});