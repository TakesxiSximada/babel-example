// -*- coding: utf-8 -*-

class HelloWorld {
    constructor(){
        console.log('hello babel world');
    }
    show (){
        var message = "babel!!"
        var elm = document.createTextNode(`go go ${message}`);
        var body = document.querySelector('body');
        body.appendChild(elm);
    }
}
var hello = new HelloWorld();
hello.show();
