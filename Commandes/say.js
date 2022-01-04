const Discord = require("discord.js")
const Command = require("../Structure/Command")
const prefix = require("./prefix")

module.exports = new Command({

    name: "say",
    description: "Permet d'écrire au nom du bot",
    utilisation: "",
    alias: ["say"],
    permission: "Aucune",
    category: "Information",
    cooldown: 0,

    async run(bot, message, args, db) {

        
        if (message.author.bot) return;
            const SayMessage = message.content.slice(4).trim();
            message.channel.send("**" + SayMessage + "**")
        
    
    }
})
