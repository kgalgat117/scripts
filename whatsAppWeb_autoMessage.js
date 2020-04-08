var messageOperation = 'start';
function startMessages() {
    let messageBox = document.getElementsByClassName("_2S1VP copyable-text selectable-text")[1];
    let event = document.createEvent("UIEvents");
    let messagePara = `
    Girls worry a lot about how their vaginas smell. But as a woman, you need to know that your vagina has to have good bacteria and a balanced pH to make it smell excellent and healthy. A bad smell from a vagina is usually a result of bacterial imbalances or even infections, which mean you need to see a gynecologist. A fresh smelling vagina is essential. It indicates that a woman has a healthy body; thereby improving her self-confidence and making her feel good. You wouldn’t feel confident in bed knowing your vagina has a strange smell. As a woman, you need to be aware of what your natural scent is. Different vaginas in different bodies will all produce their own unique scent. You need to be observant and keep track of what your vaginal fluid usually smells like, so you can easily spot any changes. A healthy vagina usually has a neutral scent. You should not disrupt its nature or your vagina will change in taste and smell. Below are some simple tips based on research that are quite easy to follow and will effectively help you maintain a natural smell in your vagina. These tips shouldn’t take you long to implement and, despite their simplicity, they can pack a punch!.
    1. Drink Enough Water To Make Your Vagina Smell Good. 2. Shave The Vagina, Clean It With Water; Avoid Douching. 3. Get Herby To Keep The Smell Attractive. 4. Wear Cotton Panties, Avoid Thongs.
    5. Eat More Citrus Fruits And Pineapples. 6. Use Scented Lube To Smell Good Before Sex. 7. Become A Vegan To Maintain Good Smell. 8. Practice Good Personal Hygiene.
    `.replace(/\n|\r/g, "").trim().split(' ')
    let messageCount = 0;
    sendMessage("Hi")
    function sendMessage(messageText) {
        messageBox.innerText = messageText;
        event.initUIEvent("input", true, true, window, 1);
        messageBox.dispatchEvent(event);
        let sendButton = document.getElementsByClassName('_35EW6')[0];
        sendButton.click();
        if (messageOperation == 'start' && messageCount < messagePara.length) {
            let nextMessageIn = (Math.floor(Math.random() * (5 - 2 + 1)) + 2) * 1000
            setTimeout(() => {
                if (messagePara[messageCount]) {
                    sendMessage(messagePara[messageCount])
                }
                messageCount++;
            }, nextMessageIn)
        }
    }
}
startMessages();