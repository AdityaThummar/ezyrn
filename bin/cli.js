#!/usr/bin/env node
const { program } = require('commander');
const shell = require('shelljs');

program
  .command('i')
  .description(
    'rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install',
  )
  .action(() => {
    console.log('🧹 Cleaning project dependencies...');

    // Remove directories/files
    shell.rm('-rf', 'node_modules');
    shell.rm('-rf', 'ios/Pods');
    shell.rm('-rf', 'ios/Podfile.lock');

    console.log('📦 Reinstalling npm dependencies using npm...');
    shell.exec('npm i');

    console.log('🍏 Reinstalling iOS pods...');
    shell.exec('npx pod-install');

    console.log('✅ Script done Boss !!');
  });

program
  .command('i-yarn')
  .description(
    'rm -rf node_modules && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install',
  )
  .action(() => {
    console.log('🧹 Cleaning project dependencies...');

    // Remove directories/files
    shell.rm('-rf', 'node_modules');
    shell.rm('-rf', 'ios/Pods');
    shell.rm('-rf', 'ios/Podfile.lock');

    console.log('📦 Reinstalling npm dependencies using yarn...');
    shell.exec('yarn');

    console.log('🍏 Reinstalling iOS pods...');
    shell.exec('npx pod-install');

    console.log('✅ Script done Boss !!');
  });

program
  .command('ci')
  .description(
    'rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i && npx pod-install',
  )
  .action(() => {
    console.log('🧹 Cleaning project dependencies...');

    // Remove directories/files
    shell.rm('-rf', 'node_modules');
    shell.rm('-rf', 'package-lock.json');
    shell.rm('-rf', 'ios/Pods');
    shell.rm('-rf', 'ios/Podfile.lock');

    console.log('📦 Reinstalling npm dependencies using npm...');
    shell.exec('npm i');

    console.log('🍏 Reinstalling iOS pods...');
    shell.exec('npx pod-install');

    console.log('✅ Script done Boss !!');
  });

program
  .command('ci-f')
  .description(
    'rm -rf node_modules && rm -rf package-lock.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && npm i -f && npx pod-install',
  )
  .action(() => {
    console.log('🧹 Cleaning project dependencies...');

    // Remove directories/files
    shell.rm('-rf', 'node_modules');
    shell.rm('-rf', 'package-lock.json');
    shell.rm('-rf', 'ios/Pods');
    shell.rm('-rf', 'ios/Podfile.lock');

    console.log('📦 Reinstalling npm dependencies using npm with force...');
    shell.exec('npm i -f');

    console.log('🍏 Reinstalling iOS pods...');
    shell.exec('npx pod-install');

    console.log('✅ Script done Boss !!');
  });

program
  .command('ci-yarn')
  .description(
    'rm -rf node_modules && rm -rf yarn.json && rm -rf ios/Pods && rm -rf ios/Podfile.lock && yarn && npx pod-install',
  )
  .action(() => {
    console.log('🧹 Cleaning project dependencies...');

    // Remove directories/files
    shell.rm('-rf', 'node_modules');
    shell.rm('-rf', 'yarn.json');
    shell.rm('-rf', 'ios/Pods');
    shell.rm('-rf', 'ios/Podfile.lock');

    console.log('📦 Reinstalling npm dependencies using yarn...');
    shell.exec('yarn');

    console.log('🍏 Reinstalling iOS pods...');
    shell.exec('npx pod-install');

    console.log('✅ Script done Boss !!');
  });

program
  .command('i-pods')
  .description(
    'rm -rf ios/Pods && rm -rf ios/Podfile.lock && npx pod-install',
  )
  .action(() => {
    console.log('🧹 Cleaning Pods...');

    // Remove directories/files
    shell.rm('-rf', 'ios/Pods');
    shell.rm('-rf', 'ios/Podfile.lock');

    console.log('🍏 Reinstalling iOS pods...');
    shell.exec('npx pod-install');

    console.log('✅ Script done Boss !!');
  });

program
  .command('start-exp-reset')
  .description(
    'npx react-native start --reset-cache --experimental-debugger',
  )
  .action(() => {
    shell.exec('npx react-native start --reset-cache --experimental-debugger');
  });

program
  .command('start-exp')
  .description('npx react-native start --experimental-debugger')
  .action(() => {
    shell.exec('npx react-native start --experimental-debugger');
  });

program
  .command('start-reset')
  .description('npx react-native start --reset-cache')
  .action(() => {
    shell.exec('npx react-native start --reset-cache');
  });

program.parse(process.argv);
