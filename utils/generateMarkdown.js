// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.userName}/${data.title})
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.installation}
# Usage
​This application is used for ${data.usage}
# License
This project is license under the ${data.license} license.
# Contributing
​Contributors: ${data.contributing}
# Tests
To run tests, you need to run the following command: ${data.test}
`;

}

module.exports = generateMarkdown;
