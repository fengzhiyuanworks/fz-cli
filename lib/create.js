const inquirer = require('inquirer')

const create = async (name) => {
  console.log('项目创建主逻辑', name);
  // 单选
  // 多选
  // 输入
  // 密码


  inquirer.prompt([
     //type： input, number, confirm, list, expand , checkbox ...
    {
      type: 'input',
      name: 'name', // key 名
      message: '输入框', // 提示信息
      default: '输入框' // 默认值
    },
    {
      type: 'number',
      name: 'number', // key 名
      message: '数字', // 提示信息
      default: '0' // 默认值
    },
    {
      type: 'list',
      name: 'list', // key 名
      message: '单选项', // 提示信息
      default: '选项1', // 默认值
      choices:[
        '选项1',
        '选项2',
        '选项3'
      ]
    },
    {
      type: 'expand',
      name: 'expand2', // key 名
      message: '单选项2', // 提示信息
      default: '', // 默认值
      choices:[
        {key: '1', value: '选项1'},
        {key: '2', value: '选项2'},
        {key: '3', value: '选项3'},
      ]
    },

    {
      type:"checkbox",
      message:"选择附加项",
      name:"Fruits",
      choices:[
          { name : "vuex", value:'x' },
          // new inquirer.Separator(), // 可以添加分隔符
          { name : "TypescRipt", value:'ts'  },
          { name : "router" },
          { name : "css" },
      ]
    }


  ]).then(answers => {
    // 打印互用输入结果
    console.log(answers)
  })
}

module.exports = (name) => {
  return create(name).catch(err => {
    console.log('create err', err);
  })
}