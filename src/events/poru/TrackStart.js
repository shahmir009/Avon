const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const AvonClientEvent = require(`../../structures/Eventhandler`);
class TrackStart extends AvonClientEvent{
    get name(){
        return 'trackStart'
    }
    async run(player,track){
        let emb = new EmbedBuilder().setColor(this.client.config.color).setDescription(`[${track.info.title}](${track.info.uri}) \n ${this.client.emoji.author} **Author** : ${track.info.author} \n ${this.client.emoji.users} **Requester** : ${track.info.requester}`).setAuthor({name : `| Now Playing` , iconURL : this.client.user.displayAvatarURL()}).setImage(player.currentTrack.info.image)
        const channel = this.client.channels.cache.get(player.textChannel);
        let but1 = new ButtonBuilder().setStyle(ButtonStyle.Danger).setLabel(`Stop`).setCustomId(`pl1`);
        let but2 = new ButtonBuilder().setStyle(ButtonStyle.Success).setLabel(`Pause`).setCustomId(`pl2`);
        let but3 = new ButtonBuilder().setStyle(ButtonStyle.Primary).setLabel(`Loop`).setCustomId(`pl3`);
        let but4 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Previous`).setCustomId(`pl4`);
        let but5 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Skip`).setCustomId(`pl5`);
        let but6 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Vol-`).setCustomId(`pl6`);
        let but7 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Shuffle`).setCustomId(`pl7`);
        let but8 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Fav`).setCustomId(`pl8`);
        let but9 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Repeat`).setCustomId(`pl9`);
        let but10 = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Vol+`).setCustomId(`pl10`);
        let ro = new ActionRowBuilder().addComponents(but1,but2,but3,but4,but5);
        let ro2 = new ActionRowBuilder().addComponents(but6,but7,but8,but9,but10);
        if(channel){
            return channel?.send({embeds : [emb],components : [ro,ro2]}).then(x => player.message = x)
        }
    }
}
module.exports = TrackStart;