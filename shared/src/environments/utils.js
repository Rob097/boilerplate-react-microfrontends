/* const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

module.exports = function getEnvironmentKeys(environment) {
    // Get the root path (assuming your webpack config is in the root of your project!)
    const currentPath = path.join(__dirname);

    // Create the fallback path (the production .env)
    const basePath = currentPath + '/.env';

    // We're concatenating the environment name to our filename to specify the correct env file!
    const envPath = basePath + '.' + environment;

    // Check if the file exists, otherwise fall back to the production .env
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    // Set the path parameter in the dotenv config
    const fileEnv = dotenv.config({ path: finalPath }).parsed;

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = fileEnv[next];
        if (fileEnv[next] === 'true' || fileEnv[next] === 'false') {
            prev[`process.env.${next}`] = fileEnv[next] === 'true';
        }// else if(fileEnv[next].includes(":")){
         //   prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
         //}
        return prev;
    }, {});

    return envKeys;
} */