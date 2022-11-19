const core = require('@actions/core');
const github = require('@actions/github');

try {
    const triggerer_name = core.getInput('name_user');
    console.log(`Name of the triggerer: ${triggerer_name}`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`Event payload:\n${payload}`);
}
catch(error) {
    //log error.message and set a failing exit code
    core.setFailed(`action failed;\n${error.message}`);
}
