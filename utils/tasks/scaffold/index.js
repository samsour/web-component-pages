const prompts = require('prompts');
const path = require('path');
const fs = require('fs');

const componentPrefix = 'syz';

String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.kebabize = function () {
  return this.split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

// Begin scaffold task
console.clear();

(async () => {
  const settings = [
    {
      type: 'select',
      name: 'type',
      message: 'What are you going to build?',
      choices: [
        {
          title: 'Component',
          description: 'Single web component',
          value: 'component',
        },
        {
          title: 'View',
          description: 'Page component that wraps other web components',
          value: 'view',
        },
      ],
      initial: 0,
    },
    {
      type: 'text',
      name: 'name',
      message: 'Component name?',
      validate: value =>
        value.length > 0 ? true : `Please enter a component name`,
    },
  ];

  const config = await prompts(settings);

  scaffold(config);
})();

function scaffold({ type, name }) {
  const buildFolder = makeDir(type, name.capitalize());
  console.log(`Trying to scaffold component files...`);
  scaffoldFile(buildFolder, name.capitalize(), 'story', 'js', type);
  scaffoldFile(buildFolder, name.capitalize(), 'module', 'js', type);
}

function getTemplate(name, type, templateType, extension) {
  const template = fs.readFileSync(
    path.resolve(__dirname, `templates/component.${templateType}.${extension}`),
    'utf-8'
  );

  return template.interpolate({
    name: name,
    root: name,
    title: name.capitalize(),
    type: type,
    tag: `${componentPrefix}-${name.kebabize()}`,
  });
}

function makeDir(type, name) {
  const folder = `src/${type}s/${name}`;

  try {
    console.log(`Creating folder: ${folder}`);
    fs.mkdirSync(folder, { recursive: true });
  } catch (error) {
    console.log(error);
  }

  return folder;
}

function scaffoldFile(buildFolder, name, templateType, extension, type) {
  try {
    fs.writeFileSync(
      `${buildFolder}/${name}${
        templateType == 'story' ? '.' + templateType : ''
      }.${extension}`,
      getTemplate(name, type, templateType, extension),
      { flag: 'wx' }
    );
    console.log(
      `Success: created ${name}${
        templateType == 'story' ? '.' + templateType : ''
      }.${extension}`
    );
  } catch (error) {
    console.log(`Error: Component '${name}' already exists!`);
  }
}
