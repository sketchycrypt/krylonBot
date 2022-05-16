import DiscordJS, { Intents, Permissions } from "discord.js";
import { Node, Cluster } from "lavaclient";
import "dotenv/config";
import path from "path";
import fs from 'fs';

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.once("ready", async () => {
    // command handler shit
    let handler = require('./command-handler')
    if(handler.default) handler = handler.default;
    handler(client);
    // console log and activity
    console.log("Bots ready mate");
    client.user?.setActivity("to the screams of the tarnished", {
        type: 'LISTENING'
    })
})

client.on("messageCreate", async (message) => {
    console.log(`${message.author.username} : ${message.content}`);
  });

client.login(process.env.TOKEN);