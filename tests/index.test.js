const PocketBase = require("pocketbase/cjs");

test('check database discordusers connection', async () => {
		async function getDiscordUsers() {
			const pb = new PocketBase("http://127.0.0.1:8090");
			const discordusers = await pb.collection("discordusers").getFullList(200, {
				sort : "-created"
			});
			// console.log(discordusers);
		}
		const data = await getDiscordUsers();
		expect(data).toBeDefined;
})

test('check discord Client', async () => {
		const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
		const client = new Client({ intents: [GatewayIntentBits.Guilds] });
		// console.log(client);
		expect(client).toBeDefined;
})