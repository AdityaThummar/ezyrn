# ZRN

## Scripts that make your process fast using the custom scripts that every developer is using daily.

## How to install


### Install package globally
```
npm i -g zrn
```
or
```
npm install -global zrn
```

### Install necessary other packages
```
npm i -g pod-install
```
or
```
npm install -global pod-install
```

# How to use

## i 
Run this command at root of your project
```
npx zrn i
``` 
- It will run command ```rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install```

## i-yarn
Run this command at root of your project
```
npx zrn i-yarn
```
- It will run command ```rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install```

## ci 
Run this command at root of your project
```
npx zrn ci
```
- It will run command ```rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install```

## ci-f
Run this command at root of your project
```
npx zrn ci-f
```
- It will run command ```rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i -f && npx pod-install```

## ci-yarn
Run this command at root of your project
```
npx zrn ci-yarn
```
- It will run command ```rm -rf node_modules && rm -rf yarn.lock && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install```

## i-pods
Run this command at root of your project
```
npx zrn i-pods
```
- It will run command ```rm -rf ios/Pods && rm -rf ios/Podfile.lock && npx pod-install```

## start-exp-reset
Run this command at root of your project
```
npx zrn start-exp-reset
```
- It will run command ```npx react-native start --reset-cache --experimental-debugger```

## start-exp
Run this command at root of your project
```
npx zrn start-exp
```
- It will run command ```npx react-native start --experimental-debugger```

## start-reset
Run this command at root of your project
```
npx zrn start-reset
```
- It will run command ```npx react-native start --reset-cache```

## adb-rv
Run this command at root of your project
```
npx zrn adb-rv
```
- It will run command ```adb reverse tcp:8081 tcp:8081```

### Always open to Feedbacks, So keep giving the Feedback on thummar.aditya@gmail.com so we can improve this.

# ⚡️⚡️⚡️
