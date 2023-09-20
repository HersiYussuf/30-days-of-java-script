const person = {
    firstName: "Yussuf",
    lastName : "Sheikh Madey",
    age: 250,
    country: "Kenya",
    city:"Nairobi",
    skills:[
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'Mongo',
        'Python',
        'D3.js'

    ],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    isMarried:true,
    'PhoneNumber': +25470078989,
    
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)
// accessing values using square brackets
console.log(person['firstName'])
console.log(person['lastName'])
// accessing instance of 
console.log(person['PhoneNumber'])
console.log(person.getFullName())
// Setting a new key for  an object 
// An object is a mutable data structure and we modify the content of an object after it is created 
