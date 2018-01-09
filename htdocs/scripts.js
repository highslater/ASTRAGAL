/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";

    $('#portfolio li img').on('click', function () {
        var src = $(this).attr('src'),
            img = '<img src="' + src + '" class="img-responsive center-block"/>';

        $('#myModal').modal();
        
        $('#myModal').on('shown.bs.modal', function () {
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function () {
            $('#myModal .modal-body').html('');
        });
    });
});