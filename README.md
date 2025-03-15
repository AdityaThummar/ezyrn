# ezyrn
## Scripts that make your process fast using the custom scripts that every developer is using daily.

## How to install

### Install package globally
```bash
npm i -g ezyrn
```
or
```bash
npm install -global ezyrn
```

### Install necessary other packages
```bash
npm i -g pod-install
```
or
```bash
npm install -global pod-install
```

# How to use

## i 
```Run at your root of project
npx ezyrn i
``` 
- It will run command ```rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install```

## i-yarn
```Run at your root of project
npx ezyrn i-yarn
```
- It will run command ```rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install```

## ci 
```Run at your root of project
npx ezyrn ci
```
- It will run command ```rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && cd ios && pod install```

## ci-f
```Run at your root of project
npx ezyrn ci-f
```
- It will run command ```rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i -f && cd ios && pod install```

## ci-yarn
```Run at your root of project
npx ezyrn ci-yarn
```
- It will run command ```rm -rf node_modules && rm -rf yarn.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && cd ios && pod install```

## i-pods
```Run at your root of project
npx ezyrn i-pods
```
- It will run command ```rm -rf ios/Pods && rm -rf ios/Podfile.lock && npx pod-install```

## start-exp-reset
```Run at your root of project
npx ezyrn start-exp-reset
```
- It will run command ```yarn start --reset-cache --experimental-debugger```

## start-exp
```Run at your root of project
npx ezyrn start-exp
```
- It will run command ```yarn start --experimental-debugger```

## start-reset
```Run at your root of project
npx ezyrn start-reset
```
- It will run command ```yarn start --reset-cache```

### Always open to Feedbacks, So keep giving the Feedback on thummar.aditya@gmail.com so we can improve this.

# ⚡️⚡️⚡️
