# ezyrn
## Scripts that make your process fast using the custom scripts that every developer is using daily.

## How to install

### Install package globally
```
npm i -g ezyrn
```
or
```
npm install -global ezyrn
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
npx ezyrn i
``` 
- It will run command ```rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install```

## i-yarn
Run this command at root of your project
```
npx ezyrn i-yarn
```
- It will run command ```rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install```

## ci 
Run this command at root of your project
```
npx ezyrn ci
```
- It will run command ```rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && cd ios && pod install```

## ci-f
Run this command at root of your project
```
npx ezyrn ci-f
```
- It will run command ```rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i -f && cd ios && pod install```

## ci-yarn
Run this command at root of your project
```
npx ezyrn ci-yarn
```
- It will run command ```rm -rf node_modules && rm -rf yarn.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && cd ios && pod install```

## i-pods
Run this command at root of your project
```
npx ezyrn i-pods
```
- It will run command ```rm -rf ios/Pods && rm -rf ios/Podfile.lock && npx pod-install```

## start-exp-reset
Run this command at root of your project
```
npx ezyrn start-exp-reset
```
- It will run command ```yarn start --reset-cache --experimental-debugger```

## start-exp
Run this command at root of your project
```
npx ezyrn start-exp
```
- It will run command ```yarn start --experimental-debugger```

## start-reset
Run this command at root of your project
```
npx ezyrn start-reset
```
- It will run command ```yarn start --reset-cache```

### Always open to Feedbacks, So keep giving the Feedback on thummar.aditya@gmail.com so we can improve this.

# ⚡️⚡️⚡️
