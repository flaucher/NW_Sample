/// <reference path="../typings/index.d.ts"/>
//Build
    //The build process taks the test.ts that you create and edit 
    //and recreates them in the buildOutput folder so that nightwatch can execute them
//To enable automatic build.
    //Ctrl+P  >  type task then space select watch
    //this will open an output pane that shows the build - you can just minimize this
    //to terminate the task
    //CTRL+Shift P > type - terminate then select Task:Terminate Running Task
//Manual Build
     //Ctrl+P  >  type task then space select default
//Running Test
    //Setup
        //Must start selenium server
        //cmd prompt open to the folder storing selenium server
        //java -jar selenium-server-standalone.jar
    //Execution    
        //From a command prompt open to the root folder of the test
        //to run with tags:  node node_modules/nightwatch/bin/runner.js --tag GF
        //To run one test node node_modules/nightwatch/bin/runner.js -t buildOutput/javascript1.js
import NB = require("nightwatch/nightwatch");
import URL = require('../Repo/ReportURL');
import REPO = require('../Repo/Navigation')
declare var module:any;
module.exports = {
    '@disabled': false, // If set to true the test module will not run
    tags: ["P0","GF"], // You can set multiple tags.  Like use your initials so you can run only your test while writing them
   
    'Test Name': function (browser: NB.NightWatchBrowser) {// this line names the test and allows for intellisense to work
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue(REPO.txt_searchField, 'jack black')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(5000)
            .assert.containsText('#main', 'jack')
            .end();     
    }
};
