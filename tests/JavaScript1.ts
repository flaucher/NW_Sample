/// <reference path="../typings/index.d.ts"/>

import NB = require("nightwatch/nightwatch");
declare var module:any;
module.exports = {
    tags: ["P0"],
    'step one': function (browser: NB.NightWatchBrowser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'jack black')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(5000)
            .assert.containsText('#main', 'jack')
            .end();     
    }
};
