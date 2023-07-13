# RHEALM - COLOURFIT APP

## STEP 1
After cloning the repo (project), make sure that you're inside the main directory by executing the following command on the terminal:

```cd rhealm```

## STEP 2
Being in the project's directory, in order to download all dependencies and packages, please use the following command:

```npm install```

## STEP 3
To run the project locally, without building, execute:

```npx expo start```

This will present you with the option of which platform you want to use:
a - for android
i - for ios
or you can scan the QR Code and choose which one you prefer

## STEP 4
To run the project in build mode, first execute:

```npx expo prebuild```

If both (Android and iOS) are prebuild with no errors, you can execute the following commands, depending on the platform you prefer to use:

```npx expo run:ios```

```npx expo run:android```

So far we noticed problems when running the Android, since we aren't having connection with the db.

## Note for developers
Make sure that you always have the libraries, dependencies and packages updated by running the install command:

```npm install```