const PocketBase = require("pocketbase/cjs");
const { SlashCommandBuilder } = require("discord.js");
const logger = require("../../utils/logger");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Register for the game"),

  async execute(interaction) {
    const pb = new PocketBase("http://127.0.0.1:8090");
    try {
      const user = await pb
        .collection("discordusers")
        .getFirstListItem(`discord_id=${ineraction.user.id}`);
      logger.info("User already exists");
      await interaction.reply({
        content: "You already have an account!",
      });
    } catch (error) {
      logger.error("User does not exist")
      const data = {
        discord_ID: interaction.user.id,
        discord_username: interaction.user.username,
        deck: [],
        library: [],
        roll: true,
      };
      console.log(data);
      const user = await pb.collection("discordusers").create(data);
      await interaction.reply({
        content: "You have been registered!",
      });
    }
  },
};
