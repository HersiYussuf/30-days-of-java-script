const persona1= {
    firstName: "Yussuf",
    lastName: "Sheikh Madey",
    age: 250,
    country: "Kenya",
    city: "Nairobi",
    skills: [
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
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    isMarried: true,
    PhoneNumber: 25470078989,
}

persona1.nationality = "Kenyan"
persona1.country = "Kenya"
persona1.title = "Data Scientist"
persona1.skills.push("Meteor")
persona1.skills.push("SaaS")
persona1.getPersona1lInfo = function () {
    let SkillsWithoutLastSkill = this.skills.slice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills[this.skills.length - 1]
    let skills = `${SkillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`
    return statement
}

console.log(persona1)
console.log(persona1.getPersonalInfo())
