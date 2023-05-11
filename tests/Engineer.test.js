const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("Constructor", () => {
    it("Should set GitHub account via constructor", () => {
      const testValue = "GitHubUser";
      const engineer = new Engineer("Joe", 1, "test@test.com", testValue);
      expect(engineer.github).toBe(testValue);
    });
  });

  describe("getRole method", () => {
    it("Should return \"Engineer\"", () => {
      const testValue = "Engineer";
      const engineer = new Engineer("Joe", 1, "test@test.com", "GitHubUser");
      expect(engineer.getRole()).toBe(testValue);
    });
  });

  describe("getGithub method", () => {
    it("Should get GitHub username via getGithub()", () => {
      const testValue = "GitHubUser";
      const engineer = new Engineer("Joe", 1, "test@test.com", testValue);
      expect(engineer.getGithub()).toBe(testValue);
    });
  });
});
