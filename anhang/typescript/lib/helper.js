
var originalConsole = console;
var console = {};
console.log = function (...args){
    var text = "";
    for (var arg of args) {
        if (arg === 'Live reload enabled.') {
            return '';
        }
        if (typeof arg === 'object') {
            arg = JSON.stringify(arg);
        }

        text += `${arg} `;
    }
    document.querySelector("#content").appendChild(document.createElement('p')).textContent = text;
    originalConsole.log(...args);
};
