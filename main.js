let quotes = [
    "All dreams can come true, if we have the courage to pursue them. -Walt Disney.",
    "The way to get started is to quit talking and start working.",
    "Hard things are put in our way not to stop us, but to call out our strength.",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You learn to write by writing.",
    "If people are doubting how far you can go, go so far you can\'t hear them anymore.",
    "Your limitation- it\'s only your imagination.",
    "Push yourself, Because no one else will do it for you.",
    "Sometimes later becomes never, do it now.",
    "All our dreams can come through, if we have the courage to pish them.",
    "Great things never comes from comfort zones.",
    "Dream it. Wish it. Do it.", 
    "Success doesn\'t just find you, you have to go out and get it.",
    "Dream bigger. Do bigger.",
    "Don\'t stop when you are tired, stop when you are done.",
    "Wake up with determination, sleep with satisfaction",
    "Do something today that your future self will thank you for.",
    "It\'s going to be hard, but hard does not mean impossible.",
    "Don\'t wait for opportunity. Create it.",
    "The key to success is to focusnon goals not obstacles.",
    "Always bear in mind that your resolution to succeed is more important than any other. - Abraham Lincoln",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "Do not worry about holding high position; worry rather about playing your proper role. - Confucius",
    "No one can make you feel inferior without your consent. - Eleanor",
    "Nothing is so strong as gentleness, nothing so gentle as real strength. - Goethe",
    "Don\'t tell me the sky is the limit when there are footprints on the moon. - Paul Brandt",
    "Sometimes later becomes never. Do it now",
    "The best time to plant a tree was 20 years ago. The second best time is now",
    "Some people want it to happen, some wish it happen, others make it happen. - Michael Jordan",
    "It\'s not the load that breaks you down, it\'s the way you carry it. - Lou Holtz",
    "If you believe it\'ll work, you\'ll see opportunities. If you don\'t believe it\'ll work, you\'ll see obstacles. - Wayne Dyer",
];

let newQuote = () => {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}