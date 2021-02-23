const mongoose = require('mongoose')
if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}



const url = `mongodb+srv://walter:${password}@cluster0-ndlyf.mongodb.net/contactList?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    contactName: String,
    phoneNumber: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    contactName: name,
    phoneNumber: pNumber,

})

if (process.argv.length == 5) {
    person.save().then(response => {
        console.log("added " + response.contactName + " number " + response.phoneNumber + " to phonebook");
        mongoose.connection.close();
    })
} else {
    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
            console.log(person.contactName + " " + person.phoneNumber)
        })
        mongoose.connection.close()
    })
}
export default mongo

