# NFT Marketplace App
NFT Marketplace Mobile App. The template is from JavaScript Mastery youtube channel

## Tools
- React Native
- Expo CLI

## Notes
- `expo init ./` to create a new React Native project on your root folder
- `npm install --legacy-peer-deps` to bypass peerDependency auto-installation
- `import { FlatList } from 'react-native';` FlatList is a component that renders basic list.  It only renders items when they are about to appear on the screen and remove them when they are off view.  It technically uses lazy loading.
- `rnfe` in VSC to create template codes for react-native
-  `TouchableOpacity` is a button
- `handlePress={() => navigation.navigate("Details", { data })}` you can pass data to another screen
- `navigation.goBack()` to go back page