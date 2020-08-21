#### Flutter

- [Flutter](https://flutter.dev/docs)
- [Flutter API](https://api.flutter.dev/index.html)
---

#### Dart
- [Dart](https://dart.dev)
- [Dart Playground](https://dartpad.dev)
---
#### Testing
- [Testing](https://flutter.dev/docs/cookbook/testing)
---

#### Tutorials Link
- [Building layouts](https://flutter.dev/docs/development/ui/layout/tutorial)

#### Release Preparation for Android

Include `android:label="Boosted"` in your android/app/src/main/AndroidManifest.xml file for the name to be used in the app store that will be visible to users.

Include `<uses-permission android:name="android.permission.INTERNET"/>` in the manifest file if the app requires access to the internet. If the app uses location services there is a permission for that that needs to be included.

Ensure the package is set to a unique domain that you own. e.g package="nz.co.boost.boosted". Your MainActivity file should also have `package nz.co.boost.boosted` in it to match. Your build.gradle file should also have this under defaultConfig e.g `applicationId "nz.co.boost.boosted"`.

Use flutter_launcher_icons as a devDependency to setup launch icons and include `flutter_icons:` in `pubspec.yaml`. Run the command to generate the icons for android e.g https://pub.dev/packages/flutter_launcher_icons

```flutter pub get```
```flutter pub run flutter_launcher_icons:main -f <your config file name here>```

#### Deployment for Android

There's some good documentation here, essentially follow the steps. One thing worth doing is to add the key.properties to the .gitignore file.
https://flutter.dev/docs/deployment/android

1. Create a key store with

`keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key`

2. Create a file named <app dir>/android/key.properties that contains a reference to your keystore:

```
storePassword=<password from previous step>
keyPassword=<password from previous step>
keyAlias=key
storeFile=< location of the key store file, such as /Users/<user name>/key.jks >
```

I've added the keystore password I used in 1password under 'Boosted Android Keystore Password'

After you've completed 'Configure signing in gradle' step in the guide then you can build the app for android with `flutter build appbundle` 

Now you can go to the Google Play Console and create the app release and upload the built release file.

Now you need to fill in all the sections required before you can publish the app to the app store.

You'll need a few screenshots among other things before the app can be released onto the play store.

#### Release Preparation for ios

Ensure all permissions are setup correctly in ios/Runner/Info.plist ( No specific permission required for internet access ).

Start up XCode and open the ios/Runner.xcworkspace file.

Under Targets, set the Display Name of the app e.g Boosted. Also set the bundle identifier e.g `nz.co.boost.boosted`. ( Note: for ios use camelcase naming e.g greatPlaces rather than great_places on android for the app name when the name is more than one word ).

For ios go to Runner/Assets.xcassets and drag the icon into all 3 slots of the LaunchImage. You can preview in the LaunchScreen.storyboard file.

#### Deployment for ios

There's some good documentation here, essentially follow the steps.
https://flutter.dev/docs/deployment/ios

