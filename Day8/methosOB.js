const hersi1 = {
    firstName: "Yussuf",
    lastName: "Sheikh Madey",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    country: "Kenya",
    skills:[
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'Mongo DB',
        'Python',
        'D3.js',
        'Machine Learning',
        'Deep learning',
        'Sql'
    ],
    title: "Teacher",
    address:{
        street:"Parkroad",
        House:"Alfurqan",
        HouseNo:39
    },
    city:"Nairobi",
    getPersonalInfo: function(){
        return `I am ${this.fullName} and I live ${this.city} in ${this.country}. `
    }
}
const copyPerson = Object.assign({},hersi1)
console.log(copyPerson)