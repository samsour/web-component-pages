const { exec } = require('child_process');
const prompts = require('prompts');
const fs = require('fs');

const viewsFolder = './src/views';
const viewChoices = [];

fs.readdirSync(viewsFolder).forEach(file => {
  viewChoices.push({
    title: file,
    value: `./src/views/${file}/${file}.js`,
  });
});

(async () => {
  const settings = [
    {
      type: 'select',
      name: 'type',
      message: 'What are you going to build?',
      choices: viewChoices,
    },
  ];

  const buildName = await prompts(settings);
  try {
    exec(
      'rimraf dist && rollup -c rollup.config.js --input ' + buildName.type,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  } catch (error) {
    console.log(`Execution error: ${error}`);
  } finally {
    console.log(`Building ${buildName.type}`);
  }
})();
