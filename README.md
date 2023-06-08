# rhealm

If you're not in the `rhealm` directory, `cd rhealm` to get there.

`npm install`

`npx expo`

After the bundling is complete, follow the menu and type in `i` for iOS emulator.  

If it asks you download XCode even though you already have it, hit `Ctrl+C` to cancel the process first.  
Check if you have XCode CLI installed by running `xcode-select --install`.

If you need to install it, run this to ensure Homebrew has been properly installed:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then, for XCode CLI, run:
```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

After that, run `npx expo` again, then `i` to launch the emulator.

The front-end and back-end is connected If you see a "wat" in the middle of the screen of the emulator (first item in the database).
