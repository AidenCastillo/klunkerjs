const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const PocketBase = require("pocketbase/cjs");
const logger = require("../../utils/logger");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("library")
		.setDescription("View your library"),
	async execute(interaction) {
		const pb = new PocketBase("http://127.0.0.1:8090");
		try {
			const user = await pb.collection("discordusers").getFirstListItem(`discord_ID=${interaction.user.id}`, {
				expand: "library"
			});
			
			// Get cards from user's library
			var cards = [];
			for (var i = 0; i < user.expand.library.length; i++) {
				const card = user.expand.library[i].name;
				cards.push(card);
			}
			logger.info(`${user.id} cards: ` + cards);

			// Send embed of user's library
			const embed = new EmbedBuilder()
				.setTitle(`${interaction.user.username}'s Library`)
				.addFields(
					{ name: "Cards", value: `${cards}` }
				)
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			logger.error(error);
			console.log(error);
			await interaction.reply("You may not be registered. Please register with /register");
		}
	},
}