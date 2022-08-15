let counter = 0;
let interval = setInterval(() => {
    console.log("Scrolling", counter);
    window.scrollTo(0, document.body.scrollHeight);
    counter++;
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log("interval cleared")
    let footers = document.getElementsByClassName("ph3 pb3");
    console.log("total data", footers.length);
    let connections = [];
    for (let footer of footers) {
        let button = footer.getElementsByTagName("button").length ? footer.getElementsByTagName("button")[0] : null;

        if (button) {
            if (button.outerHTML.includes("Connect")) {
                connections.push(button);
            }
        }
    }
    console.log("total connections", connections.length);

    let start = 0;
    let counter2 = 0;
    for (let connection of connections) {
        setTimeout(() => {
            connection.click();
            setTimeout(() => {
                let tipButton = document.querySelectorAll('[aria-label="Got it"]')[0];
                if (tipButton) {
                    tipButton.click();
                }
                let confirmConnectionButton = document.querySelectorAll('[aria-label="Send now"]')[0];
                if (confirmConnectionButton && counter2 < 10) {
                    confirmConnectionButton.click();
                    counter2++;
                }
            }, 200);
        }, start);
        start += 3200;
    }
}, 30000)
