const webpack = require('webpack');
module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "@angular/core",
        "@angular/common": "@angular/common",
        "@angular/platform-browser": "@angular/platform-browser",
        "@angular/platform-browser-dynamic": "@angular/platform-browser-dynamic",
        "@angular/compiler": "@angular/compiler",
        "@angular/elements": "@angular/elements",

        // Uncomment and add to scripts in angular.json if needed
        // "@angular/router": "ng.router",
        // "@angular/forms": "ng.forms"
    }
}