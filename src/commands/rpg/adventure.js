const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('adventure')
		.setDescription('Starts an adventure!'),
	async execute(interaction) {
		return interaction.reply('Adventure!');
	},
}