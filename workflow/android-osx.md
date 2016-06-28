# Android OSX

## Android Keystore
To publish Android apps developer require a keystore. And this cannot change once the app is published. Its crucial to keep the keystore and the password used to generate it.
  
### Keystore  
Boost has a single keystore and its available in boost gitolite repository, named release.keystore. Password of the keystore in in boost wikki.

To see the details in the keystore use the command below with the password

`keytool -list -v -keystore release.keystore`  
  
## Key 
When generating the signed APK in addition to keystore and its password, a key is required. This consist of two parameters Key alias and Key password. This is generated the first time when the APK is signed.

Different apps can have different Keys. But make sure that the alias and password is archived.

To see the keys associated with the keystore use the command below with the password

`keytool -list -v -keystore release.keystore`

Because its important to have the keystore, password, key alias and key password when updating the app. Loosing one of this can be trouble.

Record the key info in boost wiki when a new key is created for a new app.