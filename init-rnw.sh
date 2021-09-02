#!/bin/bash
name=${1:-test}
react-native init $name
echo "app created successfully"
cp /Users/guillermosierraaiello/dev/dgFolio/config-overrides.js $name
cp -r /Users/guillermosierraaiello/dev/dgFolio/src $name
cp -r /Users/guillermosierraaiello/dev/dgFolio/public $name
echo "added src, public & config overr file"
cd $name
yarn add react-dom react-native-web consistencss moment lodash mobx react-native-web-hover react-native-web-linear-gradient
yarn add react-navigation modal-enhanced-react-native-web react-navigation modal-enhanced-react-native-web @react-navigation/native mobx-react-lite @react-navigation/native mobx-react-lite
yarn add -D babel-plugin-react-native-web customize-cra react-app-rewired react-dev-utils babel-plugin-import react-scripts
cd ios && pod install && cd ..
