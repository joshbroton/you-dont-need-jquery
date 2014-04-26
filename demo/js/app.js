//$('#divAddClass').on('click', testAddRemoveClass);
getById('divAddClass').listen('click', testAddRemoveClass);
$('#divToggleClass').on('click', testToggleClass);

$('#btnDivHide').on('click', testHide);
$('#btnDivShow').on('click', testShow);

$('#btnGetCSS').on('click', getCss);
$('#btnSetCSS').on('click', setCss);

$('#btnAjaxStart').on('click', getAjax);

function getById(id) {
    return document.getElementById(id);
}

Element.prototype.listen = function(action, callback) {
    this.addEventListener(action, callback);
}

function testAddRemoveClass() {
    var div = $('#divAddClass')
    if(div.hasClass('animate')) {
        div.removeClass('animate');
    } else {
        div.addClass('animate');
    }

    var div = getById('divAddClass');

    if(div.hasClass('animate')) {
        div.removeClass('animate');
    } else {
        div.className += ' animate';
    }
}

Element.prototype.hasClass = function(className) {
    if(this.className.indexOf(className) > -1) {
        return true;
    }

    return false;
}

Element.prototype.removeClass = function(className) {
    this.className = this.className.replace(className, '')
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
    /*$.get('ajaxtest.txt', function(data, status) {
        $('body').html(data);
    });*/

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'ajaxtest.txt');
    xhr.onreadystatechange = function() {
        if(xhr.readyState != 4) {return; }
        document.querySelector('body').innerHTML = xhr.responseText;
    }

    xhr.send();
}



//new RegExp('(\\s|^)' + className + '(\\s|$)', 'g')