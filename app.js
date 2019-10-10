var app = require("node-server-screenshot");

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please Enter the URL you want a ScreenShot of");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log('User wants a screenshot of : ' + data);

        var random = Math.floor(1000 + Math.random() * 9000);
        app.fromURL(data, "ss" + random + ".png", function () {
            console.log("Screenshot Generated with name ss" + random + ".png")
        });
    }
});

