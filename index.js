const ragebaitmessages = [
    "go b4b",
    "wheres ur ledger",
    "pipe down",
    "stop projecting faggot",
    "im harmful nigga",
    "nobodys laughing",
    "fuck up",
    "nobody cares about your opinion",
    "idk how ur talking nigga",
    "ironic",
    "you have no room to speak",
    "ur deflecting",
    "speechless?",
    "dont bother talking to me with 2 digit iq",
    "its a battle of wits and you are unarmed",
    "your lack of intellect is profound",
    "good, just like the little bitch you are",
    "good girl",
    "cope",
    "show me 100$ and i will slit my wrists",
    "pick a gender",
    "stop talking inbred",
    "ill shoot you up fucktard",
    "im backed by indian forces",
    "shut the fuck up third worlder",
    "i own you retard",
    "rule #1 of discord: do NOT fuck with phan",
    "xaxaxaxaxa faggot",
    "�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�鴂�",
    "im simply stating the obvious",
    "at least admit when ur severely outmatched",
    "you wouldnt last a day in mumbai",
    "fatherless faggots conversing",
    "one band bro please",
    "posting this like we care",
    "dont fuck around",
    "braindead fag",
    "dont speak on shit you know nothing about",
    "shut the fuck up faggot",
    "i run shit around these parts",
    "piss poor fag nobody loves you",
    "you think you know shit?",
    "lower your tone",
    "show me one band please",
    "stray from this rule and your safety could be compromised",
    "i take pity on the harmless",
    "learn your place",
    "did i give you permission to speak?",
    "dont push your luck and i might let you watch",
    "fuck around and find out",
    "ure poor",
    "u dont know nuffin",
    "have you ever been sexually assaulted?",
    "how did it feel like when your father left?",
    "please show me one band",
    "dont talk to me little faggot",
    "cant seem to see anyone laughing",
    "show me 500$ and ill slit my wrists on cam",
    "i dont care",
    "noone cares retard",
    "bro PLEASE show me one band",
    "you dont know shit",
    "tranny retard talking",
    "dont talk to me or ill fuck you up",
    "youre harmless",
    "i dont listen to harmless little retards",
    "i own you",
    "good dog",
    "cope harder",
    "anyone up to take a ride on my beast? (4.6 inches HARD)",
    "im boutta cum 😁",
    "i only talk to good obedient kittens who listen to me"
];

const rizzmessages = [
    "Are you the school stairs? Cause you take my breath away.",
    "Kiss me if I’m wrong but the earth sure is flat.",
    "Are you iron? Because I don’t get enough of you.",
    "Are you a TV? Because I sure like watching you.",
    "Don’t mind me! I’m just following my dreams.",
    "Math is confusing. It’s always talking about x and y and never you and I.",
    "Are you a scientist? Because I want to do you on a table periodically.",
    "Are you the ocean? Because I just want to dive inside of you.",
    "I’m really jealous of your heart because it’s pounding inside of you and I’m not.",
    "Are you from France? Cause, maDAMN you’re fine!",
    "You can call me Fred Flinstone because I’ll make your bed rock.",
    "What’s your name again? Can I call you mine?",
    "You must be lucky charms because you’re magically delicious.",
    "I may not be a cashier, but you sure have a few things I’d like to check out!",
    "Are you a phone charger? Cause I’m dying without you!",
    "I’d love to take you out to the movies, but they don’t allow snacks.",
    "Can I take your picture? I need to show Santa what I want this year for Christmas.",
    "Are you chicken fingers and fries? Because I don’t care how many other options I have, I will always choose you.",
    "Are you a parking ticket? Cause you’ve got fine written all over you.",
    "Are you a triangle? Cause you’re an acute one.",
    "There must be something wrong with my eyes because I can’t take them off of you.",
    "Do you believe in love at first sight, or should I walk past again?",
    "Do you like soccer? My favorite player is Ronaldo, but we can get Messi.",
    "Do you have a bandaid? Because I just scraped my knee falling for you.",
    "We're not pants, but I think we'd make a pretty great pair.",
    "Have you ever been to jail? Because it should be illegal to be that good-looking.",
    "Are you a keyboard, because you're just my type.",
    "I got us sushi for dinner tonight, but that’s not the only thing we’ll be doing raw.",
    "Kissing is a universal love language. Want to start a conversation with me?",
    "You’re so magnetic! My zipper is falling for you.",
    "You look like the scariest haunted house because I’m going to scream so loud when I’m inside of you.",
    "Can I buy you a drink? I’d like to see how good you are at swallowing.",
    "Where in Asia are you from? I can totally see myself in ja-panties.",
    "It doesn’t matter to me what you’ve got in your pants, so long as you can take what’s in mine!",
    "Did you sit in a pile of sugar? Because you have a pretty sweet ass!",
    "Is it hot in here? Or is it just you?",
    "Are you a bank loan? Because you got my interest.",
    "Hey, I'm Microsoft. Can I crash at your place tonight?"
];

let ragebaitActive = false;
let rizzActive = false;
let lastMessage = "";

register("command", () => {
    if (rizzActive) {
        rizzActive = false;
        ChatLib.chat("§cAutorizz was turned OFF because Ragebait is being activated.");
    }
    ragebaitActive = !ragebaitActive;
    ChatLib.chat(`§1&l[&9&lVoid&1]&7: Ragebait is now §f${ragebaitActive ? "ON" : "OFF"}§a.`);
}).setName("ragebait");

register("command", () => {
    if (ragebaitActive) {
        ragebaitActive = false;
        ChatLib.chat("§cRagebait was turned OFF because Autorizz is being activated.");
    }
    rizzActive = !rizzActive;
    ChatLib.chat(`§1&l[&9&lVoid&1]&7: Autorizz is now §f${rizzActive ? "ON" : "OFF"}§a.`);
}).setName("autorizz");

register("chat", (event) => {
    const message = ChatLib.getChatMessage(event).removeFormatting();

    if (message === lastMessage) return;
    lastMessage = message;

    let usernameMatch = message.match(/(\w+)(?=:)/);
    if (!usernameMatch) usernameMatch = message.match(/<(\w+)>/);
    if (!usernameMatch) return;

    const username = usernameMatch[1];

    if (username === Player.getName()) return;

    if (ragebaitActive) {
        const template = ragebaitmessages[Math.floor(Math.random() * ragebaitmessages.length)];
        const response = template.replace("${username}", username);
        ChatLib.say(response);
    }

    if (rizzActive) {
        const template = rizzmessages[Math.floor(Math.random() * rizzmessages.length)];
        const response = template.replace("${username}", username);
        ChatLib.say(response);
    }
});
