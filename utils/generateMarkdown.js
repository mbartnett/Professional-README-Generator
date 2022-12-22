const moment = require('moment')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    licenseSection = `Copyright ${moment().format('YYYY')}<br><br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br><br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === 'Apache 2.0') {
    licenseSection = `Copright ${moment().format('YYYY')}<br><br>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at<br><br>http://www.apache.org/licenses/LICENSE-2.0<br><br>Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`
  } else {
    licenseSection = `The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It combines a copyright waiver patterned after the very successful public domain SQLite project with the no-warranty statement from the widely-used MIT/X11 license.`
  }
  return licenseSection
}

// TODO: Create a function to generate markdown for README
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
  
  ## Credits

  ${response.Credits}

  ## License
  
  ${renderLicenseSection(response.License)}
  
  ## How to Contribute

  ${response.Contributing}
  
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
${response.Tests}

  ## Questions

[https://github.com/${response.GitHub}](https://github.com/${response.GitHub})<br>
${response.Email}    
`;
}

module.exports = generateMarkdown;
