#!/usr/bin/env node
const { program } = require('commander');
const shell = require('shelljs');

const startScript = () => {
  console.log('\n-------⚡️⚡️ Ezy RN ⚡️⚡️-------\n');
};

const endScript = () => {
  console.log('\n✅ Script done Boss !!\n\n');
};

const cleaningWarning = () => {
  console.log('\n🧹 Cleaning ..');
};

const executeScript = (script) => {
  console.log('＞ ' + script);
  shell.exec(script);
}

const installPackages = (npm = true, force = false) => {
  console.log(`\n📦 Installing (Using ${npm ? 'npm' : 'yarn'}) ..`);
  let script = '';
  if(npm) {
    script = 'npm i';
  } else {
    script = 'yarn';
  }
  if(force) {
    script += ' -f';
  }
  executeScript(script);
};

const installPod = (npm = true) => {
  console.log(`\n🍏 Installing Pods ..`);
  const script = 'npx pod-install';
  executeScript(script);
};

const removalScript = (string = 'Please wait...') => {
  console.log('＞ rm -rf ' + string);
  shell.rm('-rf', string);
};

program
  .command('i')
  .description(
    'rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install',
  )
  .action(() => {
    startScript();

    cleaningWarning();
    // Remove directories/files
    removalScript('node_modules');
    removalScript('ios/Pods');
    removalScript('ios/Podfile.lock');

    installPackages();

    installPod();

    endScript();
  });

program
  .command('i-yarn')
  .description(
    'rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install',
  )
  .action(() => {
    startScript();

    cleaningWarning();
    // Remove directories/files
    removalScript('node_modules');
    removalScript('ios/Pods');
    removalScript('ios/Podfile.lock');

    installPackages(false);

    installPod();

    endScript();
  });

program
  .command('ci')
  .description(
    'rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install',
  )
  .action(() => {
    startScript();

    cleaningWarning();
    // Remove directories/files
    removalScript('node_modules');
    removalScript('package-lock.json');
    removalScript('ios/Pods');
    removalScript('ios/Podfile.lock');

    installPackages();

    installPod();

    endScript();
  });

program
  .command('ci-f')
  .description(
    'rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i -f && npx pod-install',
  )
  .action(() => {
    startScript();

    cleaningWarning();
    // Remove directories/files
    removalScript('node_modules');
    removalScript('package-lock.json');
    removalScript('ios/Pods');
    removalScript('ios/Podfile.lock');

    installPackages(true, true);

    installPod();

    endScript();
  });

program
  .command('ci-yarn')
  .description(
    'rm -rf node_modules && rm -rf yarn.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install',
  )
  .action(() => {
    startScript();

    cleaningWarning();
    // Remove directories/files
    removalScript('node_modules');
    removalScript('package-lock.json');
    removalScript('ios/Pods');
    removalScript('ios/Podfile.lock');

    installPackages(false);

    installPod();

    endScript();
  });

program
  .command('i-pods')
  .description('rm -rf ios/Pods && rm -rf ios/Podfile.lock && npx pod-install')
  .action(() => {
    startScript();

    cleaningWarning();
    removalScript('ios/Pods');
    removalScript('ios/Podfile.lock');
    installPod();

    endScript();
  });

program
  .command('start-exp-reset')
  .description('npx react-native start --reset-cache --experimental-debugger')
  .action(() => {
    startScript();

    executeScript(
      'npx react-native start --reset-cache --experimental-debugger',
    );

    endScript();
  });

program
  .command('start-exp')
  .description('npx react-native start --experimental-debugger')
  .action(() => {
    startScript();

    executeScript(
      'npx react-native start --experimental-debugger',
    );

    endScript();
  });

program
  .command('start-reset')
  .description('npx react-native start --reset-cache')
  .action(() => {
    startScript();

    executeScript(
      'npx react-native start --reset-cache',
    );

    endScript();
  });

  program
  .command('adb-rv')
  .description('adb reverse tcp:8081 tcp:8081')
  .action(() => {
    startScript();

    executeScript(
      'adb reverse tcp:8081 tcp:8081',
    );

    endScript();
  });

program.parse(process.argv);
