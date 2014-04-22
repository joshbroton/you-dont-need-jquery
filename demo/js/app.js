$('#divAddClass').on('click', testAddRemoveClass);

$('#divToggleClass').on('click', testToggleClass);

$('#btnDivHide').on('click', testHide);
$('#btnDivShow').on('click', testShow);

$('#btnGetCSS').on('click', getCss);
$('#btnSetCSS').on('click', setCss);

$('#btnAjaxStart').on('click', getAjax);

function testAddRemoveClass() {
    var div = $('#divAddClass')
    if(div.hasClass('animate')) {
        div.removeClass('animate');
    } else {
        div.addClass('animate');
    }
}

function testToggleClass() {
    var div = $('#divToggleClass');
    div.toggleClass('animate');
}

function testHide() {
    $('#divShowHide').hide();
}

function testShow() {
    $('#divShowHide').show();
}

function getCss() {
    $('#divDisplayCSS').html($('#divGetSetCSS').css('background-color'));
}

function setCss() {
    $('#divGetSetCSS').css('background-color', 'purple');
}

function getAjax() {
    $.get('ajaxtest.txt', function(data, status) {
        $('body').html(data);
    });
}

//new RegExp('(\\s|^)' + className + '(\\s|$)', 'g')