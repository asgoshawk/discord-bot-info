require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const moment = require("moment");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

client.on("ready", () => {
  console.log(`${client.user.tag} is logged in.`);
});

client.on("messageCreate", async (message) => {
  //   console.log(message);
  //   if (message.content === "打球") {
  //     await message.channel.send("來啊打球 <@userID>當球");
  //   }

  if (message.content == "起床") {
    const date = moment(message.createdTimestamp);
    const currentTime = date.utcOffset(8).format("HHmm");
    const numSet = ["洞", "么", "兩", "三", "四", "五", "六", "拐", "八", "勾"];
    const timeCall = Array.from(currentTime)
      .map((num) => numSet[parseInt(num)])
      .join("");

    // const embed = new EmbedBuilder()
    //   .setTitle(`@everyone 現在時間${timeCall}，部隊起床，寢室開燈`)
    //   .setURL("https://www.youtube.com/watch?v=ezcE-8aIXqY");
    // await message.channel.send({ embeds: [embed] });

    await message.channel.send(
      `@everyone 現在時間${timeCall}，部隊起床，寢室開燈\nhttps://www.youtube.com/watch?v=ezcE-8aIXqY`
    );
  }
});

client.login(DISCORD_BOT_TOKEN);
