# SuperCoolPasswordPicker

Super Cool Password Picker!
Introduction: This repository was an attempt to create a password generator using HTML, CSS, and Javascript. To do this I had the option to use java scripts windows prompt, confirm, or use javascript to create box pop ups using forms which turned out to be a bit more challenging than expected but definitely more aesthetically pleasing. Throughout the course of the process I used forms, queries, and functions.

Motivation: Cyber security is constantly evolving and with it those that are trying to compromise it. Every year corporations and individuals lose billions of dollars annually due to breaches in cyber security. One of the most basic and easy steps one can tag to improve their security is make a strong password. The best are randomized using a variety of randomly chosen different character types which are long in length. Because I myself personally don't want to be a victim of cyber crime nor do others, I thought it would be a good idea to create a password generator.

Development: To begin I took to pen and paper to sketch out how I wanted my webpages password generator to look. Next I started on the pre filled html files and used their containers to build two separate pop up windows- one for character length and the other for character types. After this initialization I got to work on javascript. To begin I wanted to transition my pop-ups to initially be out of sight then appear replacing the starting screen. I wrote a function that would switch the display properties between none and flex.
 
 <img src= "https://github.com/pwg26/SuperCoolPasswordPicker/blob/main/Assets/Images/pop-up.jpg">
 
The next part is where it got challenging. after using queries to give variables for all my elements in javascript. I tried using functions to gather the stored response variable from the forms in order to randomize the password based on the selected criteria. I think I got close because I was able to change the text associated with the card, the starting card body.
For resources I used a few youtube few youtube on both password generators and how to create form pop ups. I think the issue is that I don't know how to properly store the information from multiple forms in a centralized function. I will be diligently working to solve this.


<img src= "https://github.com/pwg26/SuperCoolPasswordPicker/blob/main/Assets/Images/function.jpg">

Update:
I finally was able to get the generator working! One big problem was that I was using form tags instead of div tags before having the knowledge that the default behavior of form tags would mess up how the windows would transition. Aside from this, I added functions that randomized the password indexes they would appear at and a function that made sure each of every selected character was included. I then used some additional styling.

*** I did several versions of this project on different files which I have in the trail folder. This was a learning experience for organziing my repository.

Usage:
This password generator guides the user through a series of prompt windows to select criteria before ultimately making the password. A range bar is used for its length checkboxes for the character criteria. At least one selection must be made on the checkboxes before submission.

<img src= "https://github.com/pwg26/SuperCoolPasswordPicker/blob/main/Assets/Images/Usage.jpg">

Rescources:
I watched a few youtube videos on both password generators and how to creaet form pop ups. I
Resources:

https://www.youtube.com/watch?v=ptI8g-05VM0&t=456s&ab_channel=UMTutorial

https://www.youtube.com/watch?v=iKo9pDKKHnc&ab_channel=WebDevSimplified
