const PocketBase = require("pocketbase/cjs");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("library")
    .setDescription("View your library"),
  async execute(interaction) {
    // Load Pocketbase
    const pb = new PocketBase("http://127.0.0.1:8090");

    // Get user
    const user = await pb
      .collection("discordusers")
      .getFirstListItem(`discord_ID=${interaction.user.id}`);

    // Get library
    const library = user.library;

    // Send embed
    const embed = new EmbedBuilder()
      .setTitle(`${interaction.user.username}'s Library`)
      .setDescription("Here are all the cards in your library!")
      .setThumbnail(interaction.user.avatarURL())
      .addFields({ name: "Cards", value: library.join("\n") });
		
		await interaction.reply({ embeds: [embed] });
  },
};
