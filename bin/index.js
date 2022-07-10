#! /usr/bin/env node

// cli info
const {
  name,
  version,
  description
} = require('../package.json')
// console.log(`${name} ${version}\n${description}`);

// commander 
const {
  Command
} = require('commander');
const program = new Command();

// cli help info
program.name(name).description(description).version(version, '-v, -V, --version', `${name} 版本号`)

// cli commands
// [mode] 可选参数
// <name> 必选参数
program.command('create <name> [mode]').description('脚手架创建项目模板').action((model, name) => {
  console.log('model',model, name);
  require('../lib/create')(name)
})


program.parse()