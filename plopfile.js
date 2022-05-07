const notEmpty = name => v => !v || v.trim() === '' ? `${name} is required` : true

module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Generate a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name please',
      validate: notEmpty('name')
    }],
    actions: [
      {
        type: 'add',
        path: 'packages/core/{{name}}/index.ts',
        templateFile: 'plop-templates/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/core/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/core/{{name}}/{{name}}.test.tsx',
        templateFile: 'plop-templates/component.test.hbs'
      }
    ]
  })
}
