const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Manager's office number can be set via constructor argument", () => {
  const testValue = 100;
  const manager = new Manager("Joe", 1, "test@test.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test("getRole() returns \"Manager\" for Manager instance", () => {
  const expectedRole = "Manager";
  const manager = new Manager("Joe", 1, "test@test.com", 100);
  expect(manager.getRole()).toBe(expectedRole);
});

test("getOfficeNumber() returns the office number for Manager instance", () => {
  const testValue = 100;
  const manager = new Manager("Joe", 1, "test@test.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});
