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
Learn the Basics. (n.d.). React Native. Retrieved February 2, 2022 from  
https://reactnative.dev/docs/tutorial

Setting up the development environment. (n.d.). React Native. Retrieved February 5, 2022 from   
https://reactnative.dev/docs/environment-setup

react-native-maps. (n.d.). Github. Retrieved February 15, 2022 from  
https://github.com/react-native-maps/react-native-maps

Martin Miauro. (2021, June 17). MapView in Expo/React Native. Medium. Retrieved February 15, 2022 from  
https://medium.com/geekculture/mapview-in-expo-react-native-5aa69eb81519

Google Maps Search Component for React Native. (n.d.). Neatly Packaged Modules. Retrieved February 17, 2022 from  
https://www.npmjs.com/package/react-native-google-places-autocomplete

react-native-maps-directions. (n.d.). Github. Retrieved Retrieved February 15, 2022 from  
https://github.com/bramus/react-native-maps-directions

Getting started. (n.d.). Amplify. Retrieved March 21, 2022 from  
https://docs.amplify.aws/start/q/integration/react-native/

Designing a GraphQL API. (n.d.). AWS. Retrieved March 24, 2022 from  
https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html

Getting started with Lambda. (n.d.). AWS. Retrieved March 23, 2022 from  
https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html

Amazon Cognito tutorials. (n.d.). AWS. Retrieved March 23, 2022 from  
https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html

Mahdi Sharifimehr. React Native Tutorial #32 (2021) - Testing with Jest and React Test Renderer. (2021, July 12). Youtube. Retrieved March 25, 2022 from  
https://www.youtube.com/watch?v=bOJkNut1Qyo

Testing React Native Apps. (n.d.). JEST. Retrieved March 25, 2022 from  
https://jestjs.io/docs/tutorial-react-native
