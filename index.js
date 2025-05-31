const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
// Get the bot token from environment variables
const token = process.env.DISCORD_BOT_TOKEN;
if (!token) {
	console.error('Please set the DISCORD_BOT_TOKEN environment variable in your .env file.');
	process.exit(1);
}

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

// Log in to Discord with your client's token
client.login(token);