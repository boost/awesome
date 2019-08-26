## Icon & Splashscreen

This is a guide for designers for generating icon & splashscreen images. Icon is required to be uploaded to both AppleStore via apple connect, GoolePlay for android and also added to Ionic project. The below are the dimensions for these.

```
Google Play:  512x512
AppStore:     1024x1024
Ionic:        1024x1024 
```


![GooglePlay](https://raw.githubusercontent.com/boost/awesome/master/images/google-icon.png)
![AppStore](https://raw.githubusercontent.com/boost/awesome/master/images/ios-icon.png)


Splash Screen should be 2732x2732 and is added to Ionic project inside `resources/` same as icon. Once both Splash Screen & Icon is added, run
`ionic cordova resources` which will create all versions of both the images required for iOS & Android. For more information check [Ionic documentation](https://ionicframework.com/docs/cli/commands/cordova-resources).

#### Note for designers

For best results, the splash screen's artwork should roughly fit within a square (1200×1200px) at the center of the image. You can use https://code.ionicframework.com/resources/splash.psd as a template for your splash screen.


