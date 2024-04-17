// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = 'Apache') {
    let badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return badge;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'Apache') {
    let link = `https://opensource.org/licenses/Apache-2.0`
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `This application is licensed under ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # Title: ${data.title}
  ${renderLicenseBadge(data.license)}
  ## ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
  ## Description: ${data.description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Testing](#testing)
  5. [Contact](#contact)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing 
  ${data.contributing}
  ## Testing 
  ${data.testing}
  ## Contact Me
  Github: http://github.com/${data.github}
  <br>
  Email: ${data.contact}
`;
}

module.exports = generateMarkdown;
