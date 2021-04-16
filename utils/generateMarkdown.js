// generates badge or no badge depending on user's choice of license
function renderLicenseBadge(license) {
  
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === 'GNU GPL v3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'IBM Public License v1.0') {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } else if (license === 'Perl') {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)` 
  } else {
    return '';
  }
}

// returns link to license portion in table of contents
function renderLicenseLink(data) {
  const noLicenseResp = '';

  if (data.license === 'MIT' || data.license ==='Apache 2.0' || data.license === 'GNU GPL v3' || data.license === 'IBM Public License v1.0' || data.license === 'Mozilla Public License 2.0' || data.license === 'Perl') {
    return `[License](${data.license})`
  } else {
    return noLicenseResp; 
  }
}

// returns license section of README
function renderLicenseSection(license) {

  if (license === 'MIT') {
    return `License: MIT`
  } else if (license === 'Apache 2.0') {
    return `License: Apache 2.0`
  } else if (license === 'GNU GPL v3') {
    return `License: GNU GPL v3`
  } else if (license === 'IBM Public License v1.0') {
    return `License: IBM Public License v1.0`
  } else if (license === 'Mozilla Public License 2.0') {
    return `Mozilla Public License 2.0`
  } else if (license === 'Perl') {
    return `License: Perl`
  } else {
    return '';
  }
}

// generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Description](#description)
2. [Install](#installation)
3. [Usage](#usage)
4. [Contributors](#contributing)
5. [Test](#tests)
6. [Username](#questions)
7. [Email](#questions)
${data.license !== 'N/A'? '8. [License](#license)': ''}

## Installation
${data.install}

## Usage
${data.usage}

${data.license !== 'N/A'? '## License': ''}
${data.license !== 'N/A'? renderLicenseLink(data.license): ''}
${data.license !== 'N/A'? renderLicenseSection(data.license): ''}

## Contributing
${data.contributors}

## Tests
${data.test}

## Questions
[Github](https://github.com/${data.username})

[E-mail](mailto:${data.email})
`; 

}


module.exports = generateMarkdown; 
// File is a commonJS module; it may be converted to an ES6 module - import to index.js
