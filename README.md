# Project description
This project contains scenarios implemented for testing notification in Litmus (https://www.litmus.com/)
Cypress is used for tests implementation.
Based on the expected screens in fixture folder, tests decides whether images presented in litmus corresponds to the optimal notification view - images must be identical.


#### Prerequisites:
1. Before running test use should install NodeJS >12.0 at your environment: https://nodejs.org/en/download/
2. Create Litmus account (https://www.litmus.com/) and set up your email and password in cypress.json file (instead of asterisks)

#### 1. Install dependencies
As soon as project is loaded, go to the root and perform command:
```
npm install
```
It will install all components based on package.json file into node_modules folder.
#### 2. Run testing script 
##### For example, you can open the Cypress UI using the following command

```
npx cypress open
```

Enjoy playing with scripts!



