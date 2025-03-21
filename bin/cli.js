#!/usr/bin/env node
const { program } = require('commander');
const shell = require('shelljs');

program
  .command('i')
  .description(
    'Clean React Native dependencies and reinstall using npm and iOS pods',
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
    'Clean React Native dependencies and reinstall using npm and iOS pods',
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
    'Clean React Native dependencies and reinstall using npm and iOS pods',
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
    'Clean React Native dependencies and reinstall using npm and iOS pods',
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
    'Clean React Native dependencies and reinstall using yarn and iOS pods',
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
    'Clean React Native dependencies and reinstall using npm and iOS pods',
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
    'Starting server with experimental debugger with resetting the packager ...',
  )
  .action(() => {
    shell.exec('npx react-native start --reset-cache --experimental-debugger');
  });

program
  .command('start-exp')
  .description('Starting server with experimental debugger ...')
  .action(() => {
    shell.exec('npx react-native start --experimental-debugger');
  });

program
  .command('start-reset')
  .description('Starting server with resetting the packager ...')
  .action(() => {
    shell.exec('npx react-native start --reset-cache');
  });

program.parse(process.argv);
