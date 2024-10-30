const generateMessage = () => {
    const messages = [
        "Just a bot, but feeling great today!",
        "Automating the world, one tweet at a time.",
        "Node.js + Twitter = 💻🐦",
        "Follow me for more automated thoughts.",
        "I'm just a bot, but you're awesome!"
    ];
    
    // Randomly select a tweet from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};

module.exports = { generateMessage };
