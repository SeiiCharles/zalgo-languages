const { emojis } = require("../../../../config");
module.exports = {
  title: (array) => `Membres mutes - (${array.length})`,
  timestamp: (s) =>
    `Unmute <t:${Math.round(s.communicationDisabledUntilTimestamp / 1000)}:R>`,
};
