#! /usr/bin/env node

// cli info
const {
  name,
  version,
  description
} = require('../package.json')

// commander
const {
  Command
} = require('commander');
const program = new Command();

// cli help info
program.name(name).description(description).version(version, '-v, -V, --version', `${name} 版本号`)

// cli commands
// <name> 必选参数
// [mode] 可选参数
program.command('create <name> [mode]').description('脚手架创建项目模板').action((name, model) => {
  require('../lib/create')(name)
})

program.command('jh [name]').description('inquirer 交互效果测试').action((name, model) => {
  console.log('model', model, name);
  require('../lib/inquirer')(name)
})


program.parse()