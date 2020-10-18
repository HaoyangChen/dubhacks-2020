# DubHacks 2020 Mobile App

Mobile App Project Repo for DubHacks 2020 (the largest 24-hour hackathon hosted in the Pacific Northwest). Our project name is VIGOR - Better Care and better health just one touch away.

## Tools and Framework Used:

This project was developed using [React Native](https://reactnative.dev/) and the open-source platform of [Expo](https://docs.expo.io/). We created the frontend with React Native and used Google's [Firebase](https://firebase.google.com/) to handle the backend functionality

You can watch the project video by clicking this image:
[![Watch the video](./assets/video_cover.png)](https://www.youtube.com/watch?v=hXfqR9V-i_g&feature=youtu.be)

## Problem Statement:

Technology has evolved quickly and drastically over the past decades, but this fast-paced development can be difficult to keep up with, leaving many, particularly the elderly members of our society. Now, more than ever, with the rise of the COVID-19 pandemic, it is increasingly important that the elderly are able to easily access and use technology, particularly to meet their healthcare needs.

There are dozens of healthcare apps and websites, but few are easily accessible for the elderly. With confusing icons, low visual contrast, hidden buttons, and no guidance, the elderly are usually not able to accomplish certain tasks as they expect. Therefore, our problem statement becomes the following:

"How might we help seniors receive care from their practitioners faster by improving their appointment-making experience?"

## What it does

Vigor is a mobile app specially designed with improved accessibility that enables senior adults to manage appointments and receive care from their practitioners in a more timely manner.

-   Feature #1: We aim at simplifying the sign-up process, enabling users to log into the app with their emails or phone numbers in one click instead of having to remember passwords.
-   Feature #2: We create step-by-step instructions to guide the elderly to fill out their basic information, insurance, and payment when they first log into the app. The information is stored in the app, eliminating the repetitive steps when making doctor appointments in the future.
-   Feature #3: Vigor allows the elderly to schedule, reschedule, and cancel appointments online, as well as virtually meeting with doctors based on their preference through the chat feature.

## Mobile App UI Design:

We use Figma for our design : [UI Prototype](https://www.figma.com/file/9ILk7u3RypARp0N5T6eFcl/DubHacks-2020?node-id=76%3A2125)

## Routing and Navigation:

We used [React Navigation](https://reactnavigation.org/) to handle the screen transitions

## Authentication & Database Storage

We used Google's [Firebase](https://firebase.google.com/) to enable the Gmail log in feature and store user information

## UI Library Used:

[React Native Paper](https://callstack.github.io/react-native-paper/index.html)

## Project Structure:

-   assets (all images and icons placed in corresponding screen names)
-   components (all reusable components)
-   data (typography/color/general data information)
-   routes (navigation and screens)

## Available Scripts:

In the project directory, you can run:

### `npm install`

to install all packages.

After installing all packages, you can run

### `npm start`

to run the app in the development mode. This should bring you to a platform where you can run the mobile app using an emulator or simply scan the QRCode with the Expo App installed on your mobile devices.

## Copyright & License

Copyright 2020 Haoyang Chen, Yuqi Feng, Anh Le, Gerorge Gu, Jazmynn Combes-Troyer under the [GPL-3.0 License](https://github.com/HaoyangChen/ifu-2/blob/master/LICENSE)
