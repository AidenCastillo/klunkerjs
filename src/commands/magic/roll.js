const PocketBase = require("pocketbase/cjs");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const logger = require("../../utils/logger");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Roll for a card"),
  async execute(interaction) {
    // Load Pocketbase
    const pb = new PocketBase("http://127.0.0.1:8090");
    const cards = await pb.collection("cards").getFullList(200, {
      sort: "-created",
    });

    // Add card to user's library
    try {
      // Get user
      const user = await pb
        .collection("discordusers")
        .getFirstListItem(`discord_ID=${interaction.user.id}`);
      // Get random card
      const card = cards[Math.floor(Math.random() * cards.length)];
      var available = card.available;
      console.log(available)
      // Check if card is available
      if (available == 0) {
        console.log("here");
        await interaction.reply(`Sorry, ${card.name} is not available!`);
        return;
      }


      // Embed
      const embed = new EmbedBuilder()
        .setTitle(`You rolled ${card.name}!`)
        .setDescription(card.lore)
        .setImage(card.picture)
        .addFields(
          { name: "Stats", value: `${card.power}/${card.toughness}` },
          { name: "Type", value: card.type},
          { name: "Now available", value: `${available - 1}`, inline: true },
        )
        
      console.log(embed);
      await interaction.reply({ embeds: [embed] });

      // Update user
      await pb.collection("discordusers").update(user.id, {
        library: [...user.library, card.id],
      });

      // Update card availability
      available = available - 1;
      await pb.collection("cards").update(card.id, {
        available: available,
      });
    } catch (error) {
      // User doesn't exist
      logger.error(error);
      console.log(error);
      await interaction.followUp({
        content:
          "You don't have a user account! Please create one with `/register`",
        ephemeral: true,
      });
      return;
    }
  },
};
