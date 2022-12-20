// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'MIT') {
		licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
	} else if (license === 'Apache 2.0') {
		licenseBadge = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
	} else {
		licenseBadge = ''	
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === 'MIT') {
		licenseLink = '(https://opensource.org/licenses/MIT)'
	} else if (license === 'Apache 2.0') {
		licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
  } 	else {
  licenseLink = '' //  if no license is chosen, then an empty string is returned
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.Title}
  
  ${renderLicenseBadge(license)}

  ## Description
  
  ${response.Description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributors](#contributors)
  
  ## Installation
  
${response.Installation}
  
  ## Usage
  
  ${response.Usage}
  
  ## Credits
  
${response.Credits}
  
  ## License
  
${response.License}
  
  ## How to Contribute

  ${response.Contributors}
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
