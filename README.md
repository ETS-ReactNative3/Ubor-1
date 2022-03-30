# Welcome to the Ubor App!
To run the project on a computer can be hard as the application is configured to be able to run on Android devices. However, it is still possible to run the application on computers. To do so, the following steps need to be followed:

1. Download Android Studio and Node.js to properly run the application. Android Studio provides the tools to emulate Android devices and Node.js is used to run the application.

2. In the Device Manager on Android Studio, download a new Android phone emulator. Then, run the emulator using the play button on the Device Manager window.

3. Open two command prompts. On each command prompt, navigate to the Ubor folder. The user can then pick whether they would like to run the User application or the Driver application.

4. Upon choosing the application that the user would like to run, navigate to the inside of the respective folder on both command prompts (ie. if you picked the User app, then navigate to the User app on both command prompts).

5. First, run the command “npm i”. Then, on one terminal, run the command “npm start” and on the other terminal, run the command “npm run android” (Windows). When using Mac if you encounter any issues type “chmod 755 android/gradlew” and into terminal then type “npx npm start” and open another terminal and type “npx npm run android”. If you are having troubles with both Windows or Mac you can enter the command “npm i” again.  

6. After configuring, building, and then downloading the application onto the emulator, the emulator should then run and the application can be tested. 

