// Moment.js
const moment = require('moment')

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  return licenseBadge
}

// A function that returns the license messaging
function renderLicenseSection(license) {
  if (license === 'MIT') {
    licenseSection = `Copyright © ${moment().format('YYYY')}. Distributed under the [https://opensource.org/licenses/MIT](MIT) License.`
  } else if (license === 'Apache 2.0') {
    licenseSection = `Copyright © ${moment().format('YYYY')}. Distributed under the [https://opensource.org/licenses/Apache-2.0](Apache 2.0) License.`
  } else {
    licenseSection = `This is a free and unencumbered application released into the public domain.`
  }
  return licenseSection
}

// A function that generates the markdown for the README
function generateMarkdown(response) {
  return `# ${response.Title}
  
  ${renderLicenseBadge(response.License)}

  ## Description
  
  ${response.Description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
${response.Installation}
  
  ## Usage
  
  ${response.Usage}
  
  ## License
  
  ${renderLicenseSection(response.License)}
  
  ## How to Contribute

  ${response.Contributing}
  
  ## Tests
  
${response.Tests}

  ## Questions

[https://github.com/${response.GitHub}](https://github.com/${response.Username})<br>
Contact: ${response.Email}    
`;
}

// Generates the README.md file
module.exports = generateMarkdown;
