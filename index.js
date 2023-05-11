// Import necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Define an array to hold new staff member data
const newStaffMemberData = [];

// Define a function to prompt the user for information
async function promptQuestions() {
  // Ask the user for their name, ID, email, and role
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  // Depending on the selected role, ask additional questions
  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ]);

    // Create a new Manager object with the user's answers and push it to the newStaffMemberData array
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    newStaffMemberData.push(newManager);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "Please provide GITHUB username",
        name: "github",
      },
    ]);

    // Create a new Engineer object with the user's answers and push it to the newStaffMemberData array
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
    newStaffMemberData.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "Where did you go to college?",
        name: "school",
      },
    ]);

    // Create a new Intern object with the user's answers and push it to the newStaffMemberData array
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
    newStaffMemberData.push(newIntern);
  }

  // Ask the user if they want to add another member or create the team
  const addMemberAns = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  // If the user wants to add a new member, call the function recursively
  if (addMemberAns.addMember === "Add a new member") {
    return promptQuestions();
  }

  // If the user wants to create the team, call the createTeam function
  return createTeam();
}

// Define a function to create the team
function createTeam() {
  // Write the generated HTML to a file
  fs.writeFileSync("./output/index.html", generateTeam(newStaffMemberData
  ))};