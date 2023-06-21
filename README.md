# Run App in IOS and Android following steps

Root folder name is App

Install package.json dependencies from root folder

- `yarn install`

Install iOS pods using CocaPods

- From the root folder, in your terminal, access the `ios` folder with this command `cd ios`
- From the `ios` folder, run `pod install`

Install App android in android

- `yarn android`

# deploy android app

- Generate a Signed APK: Generate a signed APK (Android Package) file that is digitally signed with your private key. This step ensures the integrity and authenticity of your app.

- Configure Release Settings: Set up the necessary release settings for your app. This includes specifying the version number, version name, target SDK version, and other relevant information in the build.gradle file.

- Optimize and Minify the Code: Optimize and minify your app's code to reduce the file size and improve performance. This step is optional but recommended for production-ready apps.

- Test the Release Build: Test the release build of your app to ensure that it functions as expected and there are no critical issues or bugs.

- Upload to Google Play Console: Create a developer account on the Google Play Console and sign in. Create a new app listing, fill in the required details, and upload the signed APK file.

- Configure App Details: Provide detailed information about your app, such as the description, screenshots, icons, categories, pricing, and other relevant metadata.

- Define App Releases: Set up different app release tracks (such as production, beta, alpha) and define the desired rollout strategy for each track.

- Set Pricing and Distribution: Specify the app's pricing, availability, and distribution preferences. Decide whether the app will be free or paid, and select the target countries or regions.

- Content Rating and Compliance: Complete the content rating questionnaire to determine the appropriate age-based rating for your app. Ensure that your app complies with all relevant policies and guidelines.

- Rollout and Publish: Choose the desired rollout method (immediate or staged) and publish your app to the Google Play Store. Once published, your app will be available for users to download and install

# deploy ios build

- Set up Apple Developer Account: Ensure that you have an Apple Developer Account. If you don't have one, you need to enroll in the Apple Developer Program.

- Prepare your App: Make sure your iOS app is ready for deployment. Complete all necessary development, testing, and debugging.

- Configure App Signing and Provisioning Profiles: Generate necessary signing certificates and provisioning profiles for your app. These profiles allow your app to run on physical devices and are used for code signing.

- Set App Bundle Identifier: Assign a unique bundle identifier to your app. This identifier should match the one associated with your provisioning profiles.

- Configure App Icons and Launch Screens: Prepare and configure the app icons and launch screens for different device resolutions. Provide the necessary images in the appropriate sizes.

- Enable App Services: If your app requires specific services like push notifications or in-app purchases, enable and configure these services in your Apple Developer Account.

- Create an App Store Distribution Provisioning Profile: Generate a provisioning profile specifically for App Store distribution.

- Archive the App: Build an archive of your app using Xcode. Ensure that you have selected the appropriate target and scheme for release distribution.

- Validate the Archive: Use the Xcode Organizer to validate the archive. This step checks for any potential issues or errors that may prevent the app from being accepted by the App Store.

- Submit to App Store: Once the archive is validated, submit your app to the App Store through App Store Connect. Provide the necessary metadata, such as app name, description, screenshots, keywords, pricing, and availability details.

- App Review and Approval: After submission, your app will go through the App Review process conducted by Apple. This process ensures that your app meets Apple's guidelines and policies. It may take some time for your app to be reviewed and approved.

- Release and Distribution: Once your app is approved, you can release it on the App Store. Choose the desired release date and any specific regions or countries where you want the app to be available.
