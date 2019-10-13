const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

// add, remove, list, read

yargs
  // create add command
  .command({
    command: "add",
    describe: "add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string"
      },
      body: {
        desribe: "Note body",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv) {
      notes.addNotes(argv.title, argv.body)
    }
  })
  // remove command
  .command({
    command: "remove",
    describe: "remove a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv) {
      notes.removeNotes(argv.title)
    }
  })
  //list down the notes
  .command({
    command: "list",
    describe: "list all notes",
    handler: () => {
      notes.listNotes()
    }
  })
  //read from a note
  .command({
    command: "read",
    describe: "read from a note",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv) {
      notes.readNotes(argv.title)
    }
  })
  .parse();