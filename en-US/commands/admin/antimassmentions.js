const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `                     
**1)** Prevent sending messages with excessive mentions\n${
    guildData.enabled
      ? `${emojis.enabled} Enabled\nSince <t:${Math.round(
          Number(guildData.since) / 1000
        )}:F>`
      : `${emojis.disabled} Disabled`
  }
              
**2)** Maximum number of mentions\n**${Number(
    guildData.number
  )}** maximum mentions
  
**3)** Ignore channels for sending messages with excessive mentions`,

  listDescription: () =>
    `**1)** Add a channel to ignore\n**2)** Remove a channel to ignore\n**3)** List of ignored channels`,

  title: (count) => `Ignored channels - (${count})`,

  noFoundChannel: () => `This channel can't be found!`,

  addChannelQuestion: () => `Please mention which channel to ignore!`,
  channelAlreadyExist: () => `This channel is already in ignored channels`,
  successAdd: (salon) => `${salon} has been added to ignored channels!`,

  removeChannelQuestion: () => `Please mention the channel to be removed!`,
  channelAlreadyNoExist: () => `This channel is not in the ignored channels`,
  successRemove: (salon) => `${salon} has been removed from ignored channels!`,

  mentionQuestion: () => `Enter the maximum number of mentions per message`,
  errorQuestion: () => `Enter a valid number!`,
  errorQuestion1: () => "Enter a number above 1!",
};
