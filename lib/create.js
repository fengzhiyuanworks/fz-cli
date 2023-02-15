const inquirer = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const request = require('../lib/request')

const getReposList = async () => {
  const reposList = await request({
    // url: 'https://api.github.com/users/fengzhiyuanworks/repos', // 从用户获取代码库
    url: 'https://api.github.com/orgs/frontz-cli-template/repos', // 从组织获取代码库
    methods: 'get'
  })

  return reposList.filter(t => t/* t.name.startsWith('cli-') */).map(t => {
    return {
      name: `${t.name}(${t.description})`,
      full_name: t.full_name,
      value: t.full_name,
      description: t.description,
      default_branch: t.default_branch,
    }
  })
}

const create = async (appName) => {
  const reposList = await getReposList()
  inquirer.prompt([{
    type: 'list',
    name: 'repository',
    message: 'select project template',
    default: '', // 默认值
    choices: reposList
  }]).then(({
    repository
  }) => {
    // 1 判断文件是否存在 存在-> 是否覆盖


    // 2 在当前文件夹下克隆项目
    const spinner = ora('download template ...').start();
    console.log(repository);
    download( /* "github:" +  */ repository, appName, {
      clone: false
    }, function (err) {
      spinner.stop()
      if (err) {
        console.log(err);
        spinner.fail()
        return
      }
      spinner.succeed()
      console.log([
        `create Success, you can run`,
        `cd ${appName}`,
        `npm install`
      ].join('\n'));
    })
  })
}

module.exports = (name) => {
  return create(name).catch(err => {
    console.log('create err', err);
  })
}