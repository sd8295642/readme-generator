// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    let badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return badge;
  }
  else if (license === 'MIT') {
    let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return badge;
  }
  else if (license === 'IBM') {
    let badge =`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    return badge;
  }
  else if (license === 'Mozilla Public License') {
    let badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    return badge;
  }
  else if (license === 'ISC') {
    let badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    return badge;
  }
  else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    let link = `https://opensource.org/licenses/Apache-2.0`
    return link;
  }
  else if (license === 'MIT') {
    let link = `https://opensource.org/licenses/MIT`
    return link;
  }
  else if (license === 'IBM') {
    let link = `https://opensource.org/licenses/IPL-1.0`
    return link;
  }
  else if (license === 'Mozilla Public License') {
    let link = `https://opensource.org/licenses/MPL-2.0`
    return link;
  }
  else if (license === 'ISC') {
    let link = `https://opensource.org/licenses/ISC`
    return link;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None'){
      return 'All rights reserved.'
    }
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
  ## Contact
  Github: http://github.com/${data.github}
  <br>
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
