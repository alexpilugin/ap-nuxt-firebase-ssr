# ap-nuxt-firebase-ssr

This is a Nuxt SSR (Server-Side Rendering) web application for Google Firebase.
I am going to use it as an initial template for other Nuxt SSR projects with Firebase.

There are already scripts in place that help you build and configure the deployment automatically defined as predeployment rules in `firebase.json`.

You just need to run the deployment command (which includes predeployment commands like ```npm run build``` and moving required files in correct folders):

```bash
firebase deploy
```

## Pre-Setup: Before Installing Any Dependencies

1. Obtain a Firebase Project ID to use for this project. [See Overiew Here](#firebase-project-setup)
2. Inside this directory, locate the file `.setup-firebaserc` and replace the text `YOUR_FIREBASE_PROJECT_ID` with your Firebase Project ID.

## Firebase Project Setup

1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).
2. Obtain the Firebase Project ID

### Features

- Server-side rendering with Firebase Hosting combined with Firebase Functions
- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)

### Things to know...

- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- If you have errors, make sure `firebase-tools` is up to date. I've experienced many problems that were resolved once I updated.

* The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

* ALL commands are ran from the root directory


---

## Manual Project Scaffolding from scratch

```
# Make an empty project folder
$ mkdir <project-name>

# Generate a Nuxt application in the src subfolder
$ npm init nuxt-app src

# To get started
$ cd src
$ npm run dev

# Create two extra folders: public and server
$ mkdir public && mkdir server

# Firebase Project Initialization
$ firebase logout
$ firebase login
$ firebase init

# Create a package.json file in the root folder
# Adding scripts which will run from a root folder
$ npm init

# install the same dependencies... etc
```