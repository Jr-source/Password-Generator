# PASSWORD GENERATOR

## TASK

Create an application that an employee can use to generate a random password. Random password needs to be based of set criteria established by the employee. 

## STORY

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## ACCEPTANCE CRITERIA

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## MOCK-UP

The following image shows the web application's appearance and functionality:

![password generator demo](./images/03-javascript-homework-demo.png)

## WORKING PASSWORD GENERATOR

![working password generator](./images/working-password-generator.png)
