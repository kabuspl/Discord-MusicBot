module.exports = async (client) => {
  (client.Ready = true),
    client.user.setPresence({
    status: client.botconfig.Presence.status, // You can show online, idle, and dnd
      activity: {
        name: client.botconfig.Presence.name,
        type: client.botconfig.Presence.type,
      },
});
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
  module.exports.end(client);
};

module.exports.end = (client) => {
  /*const splashes = [
      "СУКА БЛЯТЬ",
      "big dik dżek",
      "hello ni🅱🅱a",
      "something is no yes",
      "rm -rf / --no-preserve-root",
      "rd /s /q C:\\",
      "why are you gaming on linux?",
      "kurwa. znaczy... fuck",
      "bo ręce były za krótkie",
      "who is mariusz iwański?",
      "było juz puzyno",
      "nie no gta mi wypierdala",
      "wyjebany z pracy",
      "fucking idiot",
      "kernel panic - not syncing",
      "01100110 01110101 01100011 01101011 00100000 01111001 01101111 01110101",
      "0x0000007B INACCESSIBLE_BOOT_DEVICE",
      "Program explorer.exe przestał działać.",
      "Turniejowa kara czasowa 30 min",
  ];*/
  const splashes = [
    "Tomb Raider"
  ];
  clearInterval(module.exports.timerr);
  let spl=splashes[(Math.floor(Math.random()*splashes.length))];
  console.log("Status: "+spl);
  client.user.setActivity(spl);
  module.exports.timerr=setInterval(()=>{
      let spl=splashes[(Math.floor(Math.random()*splashes.length))];
      console.log("Status: "+spl);
      client.user.setActivity(spl);
  },300000);
}
