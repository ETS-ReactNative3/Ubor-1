# Welcome to the Ubor App!
To run the project on a computer can be hard as the application is configured to be able to run on Android devices. However, it is still possible to run the application on computers. To do so, the following steps need to be followed:

1. Download Android Studio and Node.js to properly run the application. Android Studio provides the tools to emulate Android devices and Node.js is used to run the application.

2. In the Device Manager on Android Studio, download a new Android phone emulator. Then, run the emulator using the play button on the Device Manager window.

3. Open two command prompts. On each command prompt, navigate to the Ubor folder. The user can then pick whether they would like to run the User application or the Driver application.

4. Upon choosing the application that the user would like to run, navigate to the inside of the respective folder on both command prompts (ie. if you picked the User app, then navigate to the User app on both command prompts).

5. First, run the command “npm i”. Then, on one terminal, run the command “npm start” and on the other terminal, run the command “npm run android” (Windows). When using Mac if you encounter any issues type “chmod 755 android/gradlew” and into terminal then type “npx npm start” and open another terminal and type “npx npm run android”. If you are having troubles with both Windows or Mac you can enter the command “npm i” again.  

6. After configuring, building, and then downloading the application onto the emulator, the emulator should then run and the application can be tested. 


Various tutorials, guides and websites were used to achieve the final result.

References:

Getting started. (n.d.). Amplify. Retrieved March 21, 2022 from
https://docs.amplify.aws/start/q/integration/react-native/

Designing a GraphQL API. (n.d.). AWS. Retrieved March 24, 2022 from
https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html

Learn the Basics. (n.d.). React Native. Retrieved February 10, 2022 from
https://reactnative.dev/docs/tutorial

Setting up the development environment. (n.d.). React Native. Retrieved _ from 
https://reactnative.dev/docs/environment-setup

react-native-maps. (n.d.). Github. Retrieved _ from
https://github.com/react-native-maps/react-native-maps

Martin Miauro. (2021, June 17). MapView in Expo/React Native. Medium. Retrieved _ from
https://medium.com/geekculture/mapview-in-expo-react-native-5aa69eb81519

Google Maps Search Component for React Native. (n.d.). Neatly Packaged Modules. Retrieved _ from
https://www.npmjs.com/package/react-native-google-places-autocomplete

react-native-maps-directions. (n.d.). Github. Retrieved _ from
https://github.com/bramus/react-native-maps-directions

Getting started with Lambda. (n.d.). AWS. Retrieved _ from
https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html

Amazon Cognito tutorials. (n.d.). AWS. Retrieved _ from
https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html
