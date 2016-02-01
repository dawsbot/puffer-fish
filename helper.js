'use strict';

const languages = require('./languages.json');
const inquirer = require('inquirer');
const fs = require('fs');

module.exports = {
  getSuffix: function(lang) {
    let toReturn = '';
    languages.forEach(function (elem, index) {
      if (typeof elem === 'object') {
        if (languages[index].hasOwnProperty(lang)){
          toReturn = languages[index][lang];
        }
      }
      //else throw error
    });
    return toReturn;
  },

  buildChoices: function() {
    let myChoices = [];
    for (let elem of languages) {
      if (typeof elem === 'string') {
        myChoices.push(new inquirer.Separator(' '));
        myChoices.push(new inquirer.Separator(elem));
      }
      else {
        for (let i in elem){
          myChoices.push(i);
        }
      }
    }
    return myChoices;
  },

  /*
   * arg1 must be > 0 and < 300,000,000
   * */
  isSafeInteger: function(str) {
    var n = ~~Number(str);
    return String(n) === str && n > 0 && n <= 300000000;
  },

  fileExists: function(fullPath) {
    let toReturn = false;
    fs.accessSync(fullPath, fs.R_OK | fs.W_OK, function(err) {
      if (!err) {
        toReturn = true;
      }
    });
    return toReturn;
  }

};
