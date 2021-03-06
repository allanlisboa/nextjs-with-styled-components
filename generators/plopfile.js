module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'templates/index.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.test.tsx',
        templateFile: 'templates/index.test.tsx.hbs'
      }
    ]
  })
}
