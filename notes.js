console.log('strating notes.js');
var fs = require('f');
var addNote = (title, body) => {
  //console.log("Adding note", title, body);
  var notes = [];
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);

  } catch (e) {

  }
  
  notes.push(note);
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var getAll = () => {
  console.log("Getting all Notes");
};
var getNote = (title) => {
  console.log("reading note", title);
};
var removeNote = (title) => {
  console.log("Removing Note", title);
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

/*module.exports.addNote = () =>{
  console.log('addNote');
  return 'newNode';
};
*/
