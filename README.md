# simple-pocketcast
A simple PocketCast website wrapper

## What it can
Start the pocketcast player website inside a webview and map media keys to it (Only tested on MacOS).

## How to run it

```bash
yarn install
yarn start
```

## How to package it
I created a MacOS app package using https://www.npmjs.com/package/electron-packager with the following command:

```bash
electron-packager . PocketCasts --icon="assets/icons/mac/pclogo.icns"
````

electron-packager must be globally installed, of course.