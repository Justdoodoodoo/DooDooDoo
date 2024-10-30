const Twit = require('twit');
const config = require('../config/config');
const tweet = require('./tweet');

// Initialize Twitter API client
const T = new Twit(config);

// Simple function to post a tweet
const postTweet = async (status) => {
    try {
        const result = await T.post('statuses/update', { status });
        console.log('Tweet posted successfully:', result.data.text);
    } catch (error) {
        console.error('Error posting tweet:', error);
    }
};

// Run the bot
const runBot = () => {
    const message = tweet.generateMessage();  // Get tweet message from tweet.js
    postTweet(message);
};

runBot();
