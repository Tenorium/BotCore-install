const path = require("path");
const os = require("os");

const {spawnSync} = require("child_process");

console.log("BotCore installer");

console.log("Installing dependencies...");

spawnSync("npm", ["i", "auto-git-update@1.1.1"], {
    cwd: __dirname
});

import("./node_modules/auto-git-update/index.js").then(imported => {
    const AutoGitUpdater = imported.default;

    let updaterConfig = {
        repository: "https://github.com/Tenorium/BotCore",
        branch: "master",
        tempLocation: path.join(os.tmpdir(), 'botcore')
    };

    let updater = new AutoGitUpdater(updaterConfig);

    updater.autoUpdate();
});

