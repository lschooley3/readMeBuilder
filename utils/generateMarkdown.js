// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "GNU":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "Apache":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "BSD":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;
    case "Creative Commons":
      badge =
        "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)]";
      break;
    case "Mozilla":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
    default:
      console.log(`Please supply a valid License`);
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "(https://opensource.org/licenses/MIT)";
      break;
    case "GNU":
      link = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache":
      link = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD":
      link = "(https://creativecommons.org/licenses/by-nc/4.0/)";
      break;
    case "Creative Commons":
      link =
        "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)]";
      break;
    case "Mozilla":
      link = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      console.log(`Please supply a valid License`);
  }
  return link;
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
   return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  install,
  usage,
  guidelines,
  test,
  username,
  email,
  license,
}) {
  return `# ${title} 

${renderLicenseSection(license)}

${description} 

## Table of Contents

* [Installation](#installation)
* [Usage Guidelines](#usage-guidelines)
* [Contribution Guidelines](#contributing-guidelines)
* [Testing Guidelines](#testing-guidelines)
* [Questions](#questions)
* [Licensing](#license)  

## Installation

${install}


## Usage Guidelines

${usage}

## Contributing Guidelines

${guidelines}


## Testing Guidelines

${test}

## Questions

You can find me on [GitHub](https://github.com/${username}/) with username ${username}.

If you have further questions contact me via email at ${email}.

## License

${title} is covered under the ${license} license.

`;
}

export default generateMarkdown;
