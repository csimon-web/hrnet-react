<!-- PROJECT SHIELDS -->
<!--
*** This template uses markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# HRNet-react: React employees management app

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

<!-- ABOUT THE PROJECT -->

## About The Project

[![HRNet screenshot][product-screenshot]](#)

This project was realized during my training as a javascript/react developer for a fictitious company wanting to update a jQuery-based application whose github repository is: https://github.com/csimon-web/hrnet-jquery.

This application had to be developed with React and use a state manager. As this project counts only 2 pages, I chose Context instead of Redux.

### Built With

- HTML, CSS, Javascript
- React, Context
- Git
- VS Code

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Git
- Npm

### Installation

1. Clone the repo

```sh
git clone https://github.com/csimon-web/hrnet-react.git
```

2. Go to the hrnet-react directory

```sh
cd hrnet-react
```

3. Install the dependencies

```sh
npm install
```

4. Launch the project

```sh
npm run start
```

5. Open a browser at the url: http://localhost:3000/

<!-- USAGE EXAMPLES -->

## Usage

You can use this app to add and display employees.
When you display the list of the employees, you can order them according the field you want, and the results are paginated
When you add an employee, you get a modal screen confirming this addition. This modal screen component had to be a [distinct code stored as a library on github](https://github.com/csimon-web/modals-for-react) and this project just had to call this library to easily build the modal screen component according to the library's documentation.

<!-- CONTACT -->

## Contact

Christophe Simon: [personnal website](https://www.csimon.info)

Project Link: [https://github.com/csimon-web/hrnet-react](https://github.com/csimon-web/hrnet-react)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- This readme version is a customized version of this [github repository](https://github.com/NicolasBrondin/basic-readme-template) by NicolasBrondin

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/csimon-web/hrnet-react.svg?style=flat-square
[contributors-url]: https://github.com/csimon-web/hrnet-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/csimon-web/hrnet-react.svg?style=flat-square
[forks-url]: https://github.com/csimon-web/hrnet-react/network/members
[stars-shield]: https://img.shields.io/github/stars/csimon-web/hrnet-react.svg?style=flat-square
[stars-url]: https://github.com/csimon-web/hrnet-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/csimon-web/hrnet-react.svg?style=flat-square
[issues-url]: https://github.com/csimon-web/hrnet-react/issues
[product-screenshot]: docs/screenshot.jpg
