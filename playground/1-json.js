const fs = require('fs')

const fileName = '1.json.json'

const dataBuffer = fs.readFileSync(fileName)
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

const myName = 'Sujoy'
const myAge = 22

data.name = myName
data.age = myAge

const json = JSON.stringify(data)
fs.writeFileSync(fileName, json)