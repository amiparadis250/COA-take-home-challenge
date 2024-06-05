**Professional Training Program**
**COA TAKE-HOME CHALLENGE**

Table of Contents
Project Description
Setup Instructions
Usage
Coding Challenges
Challenge 1: Subarray with Target Sum
Challenge 2: String Transformation
Project Description
This project contains two main parts:

UI Challenge: A web page with a responsive gallery that adjusts to different screen sizes.
Coding Challenges: Solutions to two algorithmic problems.
UI Challenge
The web page displays a gallery of images with overlay text that reacts to hover event and when you click Learn more you will get a popup with a full sized image. The overlay text moves up smoothly on hover and disappears when the screen width is below 880px.

Coding Challenges
Subarray with Target Sum: Determine if there exists a contiguous subarray within an array that sums up to a target value.
String Transformation: Transform a given string based on specific divisibility rules.
Setup Instructions
Clone the repository:
git clone https://github.com/fabmukunzi/COA-take-home-challenge.git
Navigate to the project directory:
cd COA-take-home-challenge
Open the index.html file in a web browser.
Browse through the photo gallery, hover over an image, and click "learn more" to view the image in full size
Usage
Running UI challenge
Open the index.html file in a web browser.
Hover over the images to see the overlay text move up.
Click Learn more to see a full-sized image.
Resize the browser window to see the overlay text disappear when the width is below 880px.
Deployment
Live

Coding Challenges
Challenge 1: Subarray with Target Sum
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

Example:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
Challenge 2: String Transformation
Given a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.
Example:
console.log(transformString('Hamburger')); // Output: "regrubmaH"
console.log(transformString('Pizza')); // Output: "80 105 122 122 97"
