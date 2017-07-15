# Cycling Club

#### 07.14.17

#### **By John Dowd**

## Description

This is a web application that will allow club users to see who is part of the cycling club.  Profile information of each cyclist: name, speciality(road,cyclocross and mountain) and email.  The admin feature of the app will allow the administrator to create, edit or delete members.

|Behavior| Input (User Action/Selection) |Output|
|---|:---:|:---:|
|View Members |"All Members"| Eddy Merckx","Road" "eddy@gmail.com"|
|Admin able to Delete a  Member  | "Eddy Merckx"| "Deleted" |
|About Page  | Information about the club| "Displays club info" |

## Setup/Installation Requirements

To download and run this project:
1. Clone this repository to your desktop.
2. Run {$ npm install} and {$ bower install} in your terminal to gather required packages.
3. Create a account in Firbase https://firebase.google.com/
4.  Create a New Project. Select this option, provide a name for your new project, and select your Country/region    from the drop-down menu.
5.  npm install angularfire2@4.0.0-rc.0 firebase --save
6.  In firebase change both the ".read", and ".write" properties here to "true".
7. Create an api key in the app folder export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };


## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.  Thanks!!

## Technologies Used

* Javascript
* Angular2
* Firebase
* TypeScript
* JSON
* HTML
* CSS
* Bootstrap

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **John Dowd**
