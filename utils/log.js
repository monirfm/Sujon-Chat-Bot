const chalk = require("chalk");
function randomColor() {
    let color = '';
    for (let i = 0; i < 3; i++) {
        let hex = Math.floor(Math.random() * 256).toString(16);
        if (hex.length === 1) hex = '0' + hex;
        color += hex;
    }
    return '#' + color;
}

module.exports = (message, type = "log") => {
    switch (type) {
        case "warn":
            console.log(chalk.bold.hex("#ff0000").bold("» Log « ") + message);
            break;
        case "error":
            console.log(chalk.bold.hex("#ff0000").bold("» Log « ") + message);
            break;
        default:
            console.log(chalk.bold.hex(randomColor()).bold(type + " » ") + message);
            break;
    }
};

module.exports.loader = (message, type = "info") => {
    switch (type) {
        case "warn":
            console.log(
                chalk.bold.hex(randomColor()).bold(" •─༅𝐒𝐇𝐀𝐇𝐀𝐃𝐀𝐓 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓 ༅─• ") +
                chalk.bold.hex("#8B8878").bold(message)
            );
            break;
        case "error":
            console.log(
                chalk.bold.hex(randomColor()).bold(" •─༅𝐒𝐇𝐀𝐇𝐀𝐃𝐀𝐓 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓 ༅─• ") +
                chalk.bold.hex("#FF0000").bold(message)
            );
            break;
        default:
            console.log(
                chalk.bold.hex(randomColor()).bold("∞∞ SUJON LOADED ∞∞ ") +
                chalk.bold.hex(randomColor()).bold(message)
            );
            break;
    }
};
