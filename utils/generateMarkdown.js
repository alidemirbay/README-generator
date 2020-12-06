// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
![GitHub license](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Installation
The following  dependencies must be installed to run the application: ${data.installation}

## Usage
​This application is used for ${data.usage}

## License
This project is under the ${data.license} license.

## Contributing
​Contributors: ${data.contributing}

## Tests
To run tests, you need to run the following command: ${data.test}
`;

}

module.exports = generateMarkdown;
