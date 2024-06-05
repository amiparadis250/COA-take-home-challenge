# Professional Training Program
# COA TAKE-HOME CHALLENGE

## Table of Contents

1. [Project Description](#project-description)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)
4. [Coding Challenges](#JavaScript-challenges)
   - [Challenge 1: Subarray with targeting sum](#challenge-1-subarray-with-target-sum)
   - [Challenge 2: String Transformation to  basing on given criteria.](#challenge-2-string-transformation)

## Project Description

This project contains two main parts:

1. **UI Challenge**: A web page with a  Photograllery and it is full responsive.
2. **JavaScript Challenges**: Solutions to provided challenges on arrays and String Transformation.

### UI Challenge

The web page displays a gallery of images with overlay text that reacts to hover event and also this overlay text disappear on small screen, in addition  to that on  Hover event image becomes blur.
```javascript
 container.addEventListener('mouseenter', () => {
      animal.style.backdropFilter = 'blur(5px)';
      animalDetails.style.transform = 'translateY(10%)';
      image.style.transform = 'scale(1.1)';
      image.style.filter = 'grayscale(100%) brightness(25%)';
      learnMore.style.opacity = '1';
    });
```

### Coding Challenges

- **Subarray with targeting sum*: Determine if there exists a contiguous subarray within an array that sums up to a target value.
- **String Transformation to ASCII code**: Transform a given string based on specific divisibility rules.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amiparadis250/COA-take-home-challenge.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd COA-take-home-challenge
   ```
3. **Open the `index.html` file in a web browser**.
4. **Browse through the photo gallery, hover over an image, and click "learn more" to view what happens image will come in full size**

## Usage

### Running UI challenge

1. Open the `index.html` file in a web browser.
2. Hover over the images to see the overlay text move up.
3. Resize the browser window to see the responsiveness.

## Deployment link below

**[Link](https://github.com/amiparadis250/COA-take-home-challenge)**

## Coding Challenges

### Challenge 1: Subarray with Target Sum

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

#### Example:

```javascript
const hasSubarrayWithSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) return true;
      }
    }
    return false;
  };
example: console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 3)); //true
```

### Challenge 2: String Transformation

Given a string, transform it based on the following rules:

-If the length of the string is divisible by 3, reverse the entire string.
-If the length of the string is divisible by 5, replace each character with its ASCII code.
-If the length of the string is divisible by both 3 and 5, perform both operations in the
order specified above.
#### Example:

```javascript
console.log(transformString('happy')); // Output: "72 65 80 80 89"
```
