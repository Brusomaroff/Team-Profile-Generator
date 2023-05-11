const BaseEmployee = require("./Employee");

class SoftwareEngineer extends BaseEmployee {
  constructor(fullName, employeeId, emailAddress, githubUsername) {
    super(fullName, employeeId, emailAddress);
    this.githubUsername = githubUsername;
  }

  getRole() {
    return 'Software Engineer';
  }

  getGithubUsername() {
    return this.githubUsername;
  }
}

module.exports = SoftwareEngineer;
