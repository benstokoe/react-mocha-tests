var jsdom = require('jsdom');

//jsdom.env(
    //'<div id="todo"></div>',
    //function (errors, window) {
        //console.log("jsdom did something");
    //}
//);
global.document = jsdom.jsdom('<!doctype html><html><body><div id="todo"></div></body></html>');
global.window = document.parentWindow;
global.navigator = global.window.navigator;
