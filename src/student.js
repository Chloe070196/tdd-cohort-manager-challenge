// DUMMY DATA
const studentNumber = '01'

class Student {
  constructor(firstName, lastName, githubUsername, email) {
    if (!firstName || !lastName || !githubUsername || !email) {
      throw new Error('new student cannot be created - missing input')
    }
    this.studentID = studentNumber + firstName[0] + lastName[0]
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

export { Student }