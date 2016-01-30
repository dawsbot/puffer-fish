#!/usr/bin/env node

'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

function isNormalInteger(str) {
  var n = ~~Number(str);
  return String(n) === str && n >= 0 && n <= 100000000;
}

inquirer.prompt([
  {
    type: 'list',
    name: 'language',
    message: 'What language would you like to generate?',
    default: 'CSS',
    choices: [
      new inquirer.Separator(' '),
      new inquirer.Separator('== Most popular =='),
      'JavaScript',
      'CSS',
      'HTML',
      new inquirer.Separator(' '),
      new inquirer.Separator('== Moderate popularity =='),
      'Swift',
      new inquirer.Separator(' '),
      new inquirer.Separator('== Least popularity =='),
      'bash'
    ]
  },
  {
    type: 'input',
    name: 'size',
    message: 'What size file? (bytes)',
    default: '5000',
    filter: function( val ) {
      if (!isNormalInteger(val)) {
        throw new TypeError('File size must be a positive integer <= 100,000,000');
      }
      return val.toLowerCase();
    }
  }
], function( answers ) {
  //generate the test file here
  // console.log( JSON.stringify(answers, null, '  ') );
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'generateFile',
      message: 'Generate a ' + answers.size + ' byte ' + answers.language + ' file?',
      default: 'true'
    }
  ], function( confirm ) {
    if (confirm.generateFile === true) {
      const suffix = 'sh';
      const fileName = 'puffer-fish.' + suffix;
      console.log('Building ' + fileName + '...');
      const finalString = new Array( Number(answers.size) + 1).join('p');
      fs.writeFileSync('puffer-fish.sh', finalString, 'utf8');
      console.log(chalk.green(fileName + ' successfully written!'));
    }
    else {
      console.log(chalk.yellow('No file and 0 bytes puffer-fished'));
    }
  });
});
