console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes.js');
//console.log(process);

const argv = yargs.argv;
var command = argv._[0];
console.log('command: ',command);
//console.log("process",process.argv);

console.log("yargs", argv);

if(command === 'list'){
  notes.getAll();
  //console.log('listing all notes');
} else if(command === 'add'){
  notes.addNote(argv.title, argv.body);
//  console.log('adding new note');
} else if(command === 'read'){
  notes.getNote(argv.title);
  //console.log('fetching note');
}else if(command === 'remove'){
  notes.removeNote(argv.title);
  //console.log('removing note');
}else {
  console.log('command not recognised');
}
