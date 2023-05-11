class StaffMember {
  constructor(firstName, lastName, staffId, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.staffId = staffId;
    this.emailAddress = emailAddress;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getStaffId() {
    return this.staffId;
  }

  getEmailAddress() {
    return this.emailAddress;
  }

  getJobTitle() {
    return 'Staff Member';
  }
}

module.exports = StaffMember;
