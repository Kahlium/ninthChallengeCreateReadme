// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === null)
    {
      return "";
    } else if (license === "MIT License")
    {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Boost Software License 1.0")
    {
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "ISC")
    {
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (license === "Mozilla Public License 2.0")
    {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === null)
    {
      return "";
    } else if (license === "MIT License")
    {
      return "https://opensource.org/license/MIT";
    } else if (license === "Boost Software License 1.0")
    {
      return "https://www.boost.org/LICENSE_1_0.txt";
    } else if (license === "ISC")
    {
      return "https://opensource.org/license/isc-license-txt";
    } else if (license === "Mozilla Public License 2.0")
    {
      return "https://opensource.org/license/MPL-2.0";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === null)
    {
      return "";
    } else
    {
      return "License section";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ${renderLicenseBadge()}, ${renderLicenseLink()}

  ${renderLicenseSection()}
`;
}

module.exports = generateMarkdown;