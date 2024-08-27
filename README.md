# Frontend Mentor - Mortgage Repayment Calculator Solution

This is my solution to the [Mortgage Repayment Calculator Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). This challenge provided an opportunity to build a realistic project and improve my coding skills.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Input mortgage information and see the monthly repayment and total repayment amounts after submitting the form.
- See form validation messages if any field is incomplete.
- Complete the form using only the keyboard.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Screenshot of the mortgage repayment calculator](./design/desktop-design-completed.jpg)

### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://your-live-site-url.com)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [jQuery](https://jquery.com/) - JS library

### What I Learned

This project reinforced my understanding of:

- **Form validation:** Implementing custom validation messages for a better user experience.
- **Responsive design:** Ensuring that the calculator is user-friendly across all devices by utilizing a mobile-first approach.
- **Tailwind CSS:** Leveraging utility-first classes to build a clean and responsive UI quickly.

Example of form validation in JavaScript:

```js
function validateForm() {
  const loanAmount = document.getElementById("loan-amount").value;
  if (loanAmount === "") {
    alert("Please enter a loan amount");
    return false;
  }
  return true;
}
```

### Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Helped me understand how to efficiently use utility classes.
- [MDN Web Docs](https://developer.mozilla.org/) - A go-to resource for understanding HTML, CSS, and JavaScript concepts.

## Author

- Website - [Emmanuel Adetoro](https://emmanueladetoro.netlify.app/)

## Acknowledgments

I'd like to thank [Frontend Mentor](https://www.frontendmentor.io/) for providing the challenge and the community for the support and inspiration. Special thanks to anyone who provided feedback on my project!
