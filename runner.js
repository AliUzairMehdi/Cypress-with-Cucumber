const { exec } = require("child_process");

const flowName = process.argv[2];
const browser = process.argv[3];
const runMode = `--${process.argv[4]}`;
const env = "";

exec(
  `npx cypress run --env flowName=${flowName} --browser ${browser} ${runMode} ${env}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);
