const emojis = {
  "-": " ",
  O: "🌋",
  X: "🪨",
  I: "🛟",
  PLAYER: "⛵",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "👎",
  WIN: "🏆",
  HEART: "❤️"
};
const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
O--------X
X-XXX-XXXX
XX----XXXX
X---XXXX-X
---------X
-XXXX--XXX
X-----XXXX
X-XXX-X-XX
X-XXX-XXXX
XI---XX-XX
`);
maps.push(`
I-----XXXX
XXXXX---XX
XX---XX-XX
XX-X--X--X
XX--X--X-X
XXX-XX---X
XXX--XXXXX
XXXX-XXXXX
XXX--XXXXX
XO--XXXXXX
`);