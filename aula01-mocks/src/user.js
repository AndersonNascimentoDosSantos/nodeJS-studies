class User {
  constructor({ name, id, proffession, age }) {
    this.id = parseInt(id);
    this.name = name;
    this.proffession = proffession;
    this.birthday = new Date().getFullYear() - age;
  }
}
module.exports = User;
