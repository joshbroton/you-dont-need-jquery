function getById(id) {
    return document.getElementById(id);
}

Element.prototype.addClass = function(className) {
    if(this.hasClass(className) == false) {
        this.className += ' ' + className;
    }
}

Element.prototype.removeClass = function(className) {
    if(this.hasClass(className)) {
        var rx = new RegExp('(\\s|^)' + className + '(\\s|$)', 'g');
        this.className = this.className.replace(rx, ' ');
    }
}

Element.prototype.hasClass = function(className) {
    var rx = new RegExp('(\\s|^)' + className + '(\\s|$)');

    if(this.className.match(rx)) {
        return true;
    }

    return false;
}

Element.prototype.toggleClass = function(className) {
    if(this.hasClass(className)) {
        this.removeClass(className);
    } else {
        this.addClass(className);
    }
}

Element.prototype.show = function(speed) {
    if(speed) {
        this.style.opacity = 0;
    
        var ms = {
            'slow': 1000,
            'med': 600,
            'fast': 300 };
        
        if (speed == 'slow' || speed == 'med' || speed == 'fast') {
            speed = ms[speed];
        }    
            
        var count = 0,
            max = speed / 10;
    }

    this.style.display = '';

    if(speed) {
        var el = this;
        var interval = setInterval(animateOpacity, 10);
    }
    
    function animateOpacity() { 
        count++;

        el.style.opacity = (1 / max) * count;

        if(count === max) {
            clearInterval(interval);
            el.style.opacity = '';
        }
    }
}

Element.prototype.hide = function(speed) {
    if(speed) {
        this.style.opacity = 1;
    
        var ms = {
            'slow': 1000,
            'med': 600,
            'fast': 300 };
        
        if (speed == 'slow' || speed == 'med' || speed == 'fast') {
            speed = ms[speed];
        }    
            
        var count = 0,
            max = speed / 10;
    }

    if(speed) {
        var el = this;
        var interval = setInterval(animateOpacity, 10);
    } else {
        this.style.display = 'none';
    }
    
    function animateOpacity() { 
        count++;

        el.style.opacity = 1 - ((1 / max) * count);

        if(count === max) {
            clearInterval(interval);
            el.style.display = 'none';
            el.style.opacity = '';
        }
    }
}

Element.prototype.after = function(str) {
    this.insertAdjacentHTML('afterend', str);
}

Element.prototype.before = function(str) {
    this.insertAdjacentHTML('beforebegin', str);
}

Element.prototype.prepend = function(el) {
    if(el.nodeType) {
        this.insertBefore(el, this.firstChild);
    } else {
        this.insertAdjacentHTML('afterbegin', el);
    }
}

Element.prototype.append = function(el) {
    if(el.nodeType) {
        this.appendChild(el);
    } else {
        this.insertAdjacentHTML('beforeend', el);
    }
}

Element.prototype.prependTo = function(el) {
    el.insertBefore(this, el.firstChild);
}

Element.prototype.appendTo = function(el) {
    el.appendChild(this);
}

Element.prototype.listen = function(event, callback) {
    if(this.attachEvent) {
        this.attachEvent("on" + event, function() {callback.call(this);});
    } else if(this.addEventListener) {
        this.addEventListener(event, callback, false);
    }
};

Element.prototype.css = function(attribute, value) {
    if(value) {
        this.style[attribute] = value;
    } else {
        return window.getComputedStyle(this).getPropertyValue(attribute);
    }
}

NodeList.prototype.addClass = function(className) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].addClass(className);
    }
}

NodeList.prototype.removeClass = function(className) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].removeClass(className);
    }
}

NodeList.prototype.hasClass = function(className) {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i].hasClass(className)) {
            return true;
        }
    }

    return false;
}

NodeList.prototype.hide = function(speed) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].hide(speed);
    }
}

NodeList.prototype.show = function(speed) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].show(speed);
    }
}

NodeList.prototype.listen = function(event, callback) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].listen(event, callback);
    }
}

NodeList.prototype.prependTo = function(el) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].prependTo(el);
    }
}

NodeList.prototype.appendTo = function(el) {
    for(var i = 0, len = this.length; i < len; i++) {
        this[i].appendTo(el);
    }
}

function xhr(method, url, content, format, success, failure) {
    var request = new XMLHttpRequest();
    request.open(method, url);

    if(method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
        if(format.toLowerCase() === 'json') {
            request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); 
        } else {
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
    } 

    request.onreadystatechange = function() {
        if(request.readyState != 4) { return; }
        if(request.status != 200) {
            failure(request.responseText);
        } else {
            success(request.responseText);
        }
    }

    request.send(content);
    
}