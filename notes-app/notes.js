const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const returnString = 'Your note ....'
    return returnString
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => {
        note.title === title
    })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('Note title added')
    } else {
        console.log('Duplicate note title. Cannot add note')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) =>
        note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red('No note found'))
    }

}

const readNotes = (title) => {
    const notes = loadNotes()

    const noteFound = notes.find((note) => note.title === title)

    if (noteFound) {
        console.log(chalk.inverse(noteFound.title))
        console.log(noteFound.body)
    } else {
        console.log(chalk.red.inverse('No note found with the specified title'))
    }
}

const saveNotes = (notes) => {
    const stringData = JSON.stringify(notes)

    fs.writeFileSync('notes.json', stringData)
}

const listNotes = () => {
    console.log(chalk.green('Your Notes ....'))

    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    });
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNotes: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}