<div align="center">
  <h1>Serverflow</h1>
</div>

<div align="center">
  <h2>Project Demo-</h2>

[![Serverflow](https://res.cloudinary.com/marcomontalbano/image/upload/v1649167385/video_to_markdown/images/youtube--q2OLBGaGBtM-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/q2OLBGaGBtM 'Serverflow')

</div>

<hr />

<div align="center">
  <h2>About</h2>

![Workflow status](https://github.com/Pranav016/serverflow/actions/workflows/cd.yaml/badge.svg?branch=master) ![Release](https://img.shields.io/github/v/release/Pranav016/serverflow?display_name=tag&sort=semver) [![Netlify Status](https://api.netlify.com/api/v1/badges/68f58760-b1f1-459a-9640-1b397a3a9a8b/deploy-status)](https://app.netlify.com/sites/serverflow/deploys)

Serverflow is a platform where Software Engineers and Developers come to solve their doubts and contribute to the open-source community.

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pranav016/serverflow)

We ensure to promote a healthy environment and help our users stay strong and motivated.

All you have to do is start posting your doubts!

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

</div>

<hr />

## Application Features

-   Questions-console to display all questions.
-   Signup and Login functionalities via Email-Password and Google Authentication via Google APIs.
-   Solution to 'Forgot Password' via email for resetting the password.
-   Protected routes that only authorized users can access.
-   Searching and posts filtering via tags functionalities.
-   User dashboard to show user information and their posts.
-   Adding a post with heading, content and technology tags.
-   Updating a post by the author.
-   Upvoting or downvoting a post based on relevance.
-   Deletion of a post by the author.
-   Adding solutions under a post/question.
-   Upvoting or downvoting solutions based on relevance.
-   Deletion of a comment/solution by the author.
-   Solution with highest upvotes moves up. (Sorted solutions)
-   Single click clear filter functionality.
-   Notification toasts throughout the application.
-   Update comment/solution by the author.

<hr />

## Features currently being worked on:

-   [x] Post filtering by tags and search
-   [x] Markdown parser with preview
-   [x] Update question/post by author
-   [x] Update comment/solution by author
-   [x] Reset Password in user dashboard

<hr />

## Technology Stack 🛠️

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

<hr />

## Environment Setup-

-   Drop a :star: on the GitHub repository.
    <br/>

-   Download [Git](https://git-scm.com/downloads) (when you install Git, Git Bash also gets installed by default)
    <br/>

-   Download and install a code/ text editor.

    -   Recommended-
        -   [Download VS Code](https://code.visualstudio.com/download)
        -   [Download Atom](https://atom.io/)

    <br/>

-   Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you install Node, npm also gets installed by default)
    <br/>

-   Install Yarn via npm (Since this project is using yarn) - `npm install --global yarn`

<hr />
    
##### Note-

If you want to work with `npm` itself, delete `yarn.lock` file and run `npm install` in the root of the project.

<hr />

-   Clone the repository by running command

```
git clone https://github.com/<your user-name>/serverflow.git
```

in your git bash.
<br/>

-   Run command `cd serverflow`.
    <br/>

-   Run this command to install all dependencies for the project.

```
yarn
```

<br/>

-   Make an account on [Firebase](https://firebase.google.com/) and initiate a new project. Create a [Firestore DB](https://firebase.google.com/docs/firestore) and switch on [Email and Password](https://firebase.google.com/docs/auth/web/password-auth) as well as [Google](https://firebase.google.com/docs/auth/web/google-signin) authentication.
    <br/>
-   Refer to the [.env.example](https://github.com/Pranav016/serverflow/blob/master/.env.example) file to create a `.env.local` file by running

```
touch .env.local
```

in your command prompt, and add your Firebase API keys to it.
<br/>

-   Run this command to start the project.

```
yarn start
```

<br/>

<hr />

## Important scripts set in `package.json`

-   This project uses [Husky](https://typicode.github.io/husky/#/) with [Lint-staged](https://www.npmjs.com/package/lint-staged) for pre-commit hooks thus linting of code will automatically be done when you commit.

-   For manual linting of code, run command `yarn lint`.

-   Run command `yarn test` to run all unit tests.

-   Run command `yarn test:watch` to run all unit tests in `watch` mode.

-   Run command `yarn cz` to make use of [Commitizen CLI](https://github.com/commitizen/cz-cli) for [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

<hr />

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
