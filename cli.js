#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const helper = require('./helper.js');
const rs = require('random-strings');

inquirer.prompt([
  {
    type: 'list',
    name: 'language',
    message: 'What language would you like to generate?',
    default: 'CSS',
    choices: helper.buildChoices()
  },
  {
    type: 'input',
    name: 'size',
    message: 'What size file? (bytes)',
    default: '10000',
    filter: function( val ) {
      if (!helper.isSafeInteger(val)) {
        throw new Error('File size must be a positive integer <= 300,000,000');
      }
      return val.toLowerCase();
    }
  }
], function( answers ) {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'generateFile',
      message: 'Generate a ' + answers.size + ' byte ' + answers.language + ' file?',
      default: 'true'
    }
  ], function( confirm ) {
    if (confirm.generateFile === true) {
      const suffix = helper.getSuffix(answers.language);
      const pufferFishDir = '.puffer-fish';
      const fileName = rs.alphaNumMixed(10) + '.' + suffix;
      const fullPath = pufferFishDir + '/' + fileName;

			//build pufferFishDir for the puffer files if it does not already exist
			try {
					let stats = fs.lstatSync(pufferFishDir);

					if (stats.isDirectory()) {
						chalk.green(console.log(pufferFishDir + ' dir already exists! Thanks for coming back.'));
					}
					else {
						console.log('Creating ' + pufferFishDir + ' for your files...');
						fs.mkdirSync(pufferFishDir);
					}
			}
			catch (e) {
				console.log('Creating ' + pufferFishDir + ' for your files...');
				fs.mkdirSync(pufferFishDir);
			}

      const finalString = new Array( Number(answers.size) + 1).join('p');

      fs.writeFileSync(fullPath, finalString, 'utf8');

      console.log(chalk.green(fileName + ' successfully written!'));
    }
    else {
      console.log(chalk.yellow('No file and 0 bytes puffer-fished'));
    }
  });
});
