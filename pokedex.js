const express = require('express');
const app = express();

"use strict";

app.get('/pokemon/grookey', function(req, res){
  res.json({"name":"grookey",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/810.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/thwackey', function(req, res){
  res.json({"name":"thwackey",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/811.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/rillaboom', function(req, res){
  res.json({"name":"rillaboom",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/812.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/scorbunny', function(req, res){
  res.json({"name":"scorbunny",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/813.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/raboot', function(req, res){
  res.json({"name":"raboot",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/814.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/cinderace', function(req, res){
  res.json({"name":"cinderace",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/815.png",
  "gmax":null});
})

app.get('/pokemon/sobble', function(req, res){
  res.json({"name":"sobble",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/816.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/drizzile', function(req, res){
  res.json({"name":"drizzile",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/817.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/inteleon', function(req, res){
  res.json({"name":"inteleon",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/818.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/blipbug', function(req, res){
  res.json({"name":"blipbug",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/824.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/dottler', function(req, res){
  res.json({"name":"dottler",
  "types":["bug", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/825.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/orbeetle', function(req, res){
  res.json({"name":"orbeetle",
  "types":["bug", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/826.png",
  "img-fem": null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/826-gi.png"});
})

app.get('/pokemon/caterpie', function(req, res){
  res.json({"name":"caterpie",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/010.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/metapod', function(req, res){
  res.json({"name":"metapod",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/011.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/butterfree', function(req, res){
  res.json({"name":"butterfree",
  "types":["bug", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/012.png",
  "img-fem": "https://www.serebii.net/swordshield/pokemon/012-f.png",
  "gmax":"https://www.serebii.net/swordshield/pokemon/012-gi.png"});
})

app.get('/pokemon/grubbin', function(req, res){
  res.json({"name":"grubbin",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/736.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/charjabug', function(req, res){
  res.json({"name":"charjabug",
  "types":["bug", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/737.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/vikavolt', function(req, res){
  res.json({"name":"vikavolt",
  "types":["bug", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/738.png",
  "gmax":null});
})

app.get('/pokemon/hoothoot', function(req, res){
  res.json({"name":"hoothoot",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/163.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/noctowl', function(req, res){
  res.json({"name":"noctowl",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/164.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/rookidee', function(req, res){
  res.json({"name":"rookidee",
  "types":["flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/821.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/corvisquire', function(req, res){
  res.json({"name":"corvisquire",
  "types":["flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/822.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/corviknight', function(req, res){
  res.json({"name":"corviknight",
  "types":["flying", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/823.png",
  "img-fem": null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/823-gi.png"});
})

app.get('/pokemon/skwovet', function(req, res){
  res.json({"name":"skwovet",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/819.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/greedent', function(req, res){
  res.json({"name":"greedent",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/820.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/pidove', function(req, res){
  res.json({"name":"pidove",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/519.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/tranquill', function(req, res){
  res.json({"name":"tranquill",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/520.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/unfezant', function(req, res){
  res.json({"name":"unfezant",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/521.png",
  "img-fem": "https://www.serebii.net/swordshield/pokemon/521-f.png",
  "gmax":null});
})

app.get('/pokemon/nickit', function(req, res){
  res.json({"name":"nickit",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/827.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/thievul', function(req, res){
  res.json({"name":"thievul",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/828.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/zigzagoon/galar', function(req, res){
  res.json({"name":"zigzagoon",
  "types":["dark", "normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/263-g.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/zigzagoon', function(req, res){
  res.json({"name":"zigzagoon",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/263.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/linoone/galar', function(req, res){
  res.json({"name":"linoone",
  "types":["dark", "normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/264-g.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/linoone', function(req, res){
  res.json({"name":"linoone",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/264.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/obstagoon', function(req, res){
  res.json({"name":"obstagoon",
  "types":["normal", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/862.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/wooloo', function(req, res){
  res.json({"name":"wooloo",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/831.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/dubwool', function(req, res){
  res.json({"name":"dubwool",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/832.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/lotad', function(req, res){
  res.json({"name":"lotad",
  "types":["water", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/270.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/lombre', function(req, res){
  res.json({"name":"lombre",
  "types":["water", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/271.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/ludicolo', function(req, res){
  res.json({"name":"ludicolo",
  "types":["water", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/272.png",
  "img-fem": "https://www.serebii.net/swordshield/pokemon/272-f.png",
  "gmax":null});
})

app.get('/pokemon/seedot', function(req, res){
  res.json({"name":"seedot",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/273.png",
  "img-fem": null,
  "gmax":null});
})

app.get('/pokemon/nuzleaf', function(req, res){
  res.json({"name":"nuzleaf",
  "types":["grass", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/274.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/274-f.png",
  "gmax":null});
})

app.get('/pokemon/shiftry', function(req, res){
  res.json({"name":"shiftry",
  "types":["grass", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/275.png",
  "img-fem": "https://www.serebii.net/swordshield/pokemon/275-f.png",
  "gmax":null});
})

app.get('/pokemon/chewtle', function(req, res){
  res.json({"name":"chewtle",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/833.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drednaw', function(req, res){
  res.json({"name":"drednaw",
  "types":["water", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/274.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/274-gi.png"});
})

app.get('/pokemon/purrloin', function(req, res){
  res.json({"name":"purrloin",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/509.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/liepard', function(req, res){
  res.json({"name":"liepard",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/510.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/yamper', function(req, res){
  res.json({"name":"yamper",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/835.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/boltund', function(req, res){
  res.json({"name":"boltund",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/836.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bunnelby', function(req, res){
  res.json({"name":"bunnelby",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/659.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/diggersby', function(req, res){
  res.json({"name":"diggersby",
  "types":["normal", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/660.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/minccino', function(req, res){
  res.json({"name":"minccino",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/572.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cinccino', function(req, res){
  res.json({"name":"cinccino",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/573.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bounsweet', function(req, res){
  res.json({"name":"bounsweet",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/761.png",
  "img-fem":null,
  "gmax":null});
})


app.get('/pokemon/steenee', function(req, res){
  res.json({"name":"steenee",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/762.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/tsareena', function(req, res){
  res.json({"name":"tsareena",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/763.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/oddish', function(req, res){
  res.json({"name":"oddish",
  "types":["grass", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/043.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gloom', function(req, res){
  res.json({"name":"gloom",
  "types":["grass", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/044.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/044-f.png",
  "gmax":null});
})

app.get('/pokemon/vileplume', function(req, res){
  res.json({"name":"vileplume",
  "types":["grass", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/045.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/045-f.png",
  "gmax":null});
})

app.get('/pokemon/bellossom', function(req, res){
  res.json({"name":"bellossom",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/182.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/budew', function(req, res){
  res.json({"name":"budew",
  "types":["grass", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/406.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/roselia', function(req, res){
  res.json({"name":"roselia",
  "types":["grass", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/315.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/315-f.png",
  "gmax":null});
})

app.get('/pokemon/roserade', function(req, res){
  res.json({"name":"roserade",
  "types":["grass", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/407.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/407-f.png",
  "gmax":null});
})

app.get('/pokemon/wingull', function(req, res){
  res.json({"name":"wingull",
  "types":["water", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/278.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pelipper', function(req, res){
  res.json({"name":"pelipper",
  "types":["water", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/279.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/joltik', function(req, res){
  res.json({"name":"joltik",
  "types":["bug", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/595.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/galvantula', function(req, res){
  res.json({"name":"galvantula",
  "types":["bug", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/596.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/electrike', function(req, res){
  res.json({"name":"electrike",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/309.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/manectric', function(req, res){
  res.json({"name":"manectric",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/310.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/vulpix', function(req, res){
  res.json({"name":"vulpix",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/037.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ninetales', function(req, res){
  res.json({"name":"ninetales",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/038.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/growlithe', function(req, res){
  res.json({"name":"growlithe",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/058.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/arcanine', function(req, res){
  res.json({"name":"arcanine",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/059.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/vanillite', function(req, res){
  res.json({"name":"vanillite",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/582.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/vanillish', function(req, res){
  res.json({"name":"vanillish",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/583.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/vanilluxe', function(req, res){
  res.json({"name":"vanilluxe",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/584.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/swinub', function(req, res){
  res.json({"name":"swinub",
  "types":["ice", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/220.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/piloswine', function(req, res){
  res.json({"name":"piloswine",
  "types":["ice", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/221.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/221-f.png",
  "gmax":null});
})

app.get('/pokemon/mamoswine', function(req, res){
  res.json({"name":"mamoswine",
  "types":["ice", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/473.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/473-f.png",
  "gmax":null});
})

app.get('/pokemon/delibird', function(req, res){
  res.json({"name":"delibird",
  "types":["ice", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/225.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/snorunt', function(req, res){
  res.json({"name":"snorunt",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/361.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/glalie', function(req, res){
  res.json({"name":"glalie",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/362.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/froslass', function(req, res){
  res.json({"name":"froslass",
  "types":["ice", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/478.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/baltoy', function(req, res){
  res.json({"name":"baltoy",
  "types":["ground", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/343.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/claydol', function(req, res){
  res.json({"name":"claydol",
  "types":["ground", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/344.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mudbray', function(req, res){
  res.json({"name":"mudbray",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/749.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mudsdale', function(req, res){
  res.json({"name":"mudsdale",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/750.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dwebble', function(req, res){
  res.json({"name":"dwebble",
  "types":["bug", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/557.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/crustle', function(req, res){
  res.json({"name":"crustle",
  "types":["bug", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/558.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/golett', function(req, res){
  res.json({"name":"golett",
  "types":["ground", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/622.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/golurk', function(req, res){
  res.json({"name":"golurk",
  "types":["ground", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/623.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/munna', function(req, res){
  res.json({"name":"munna",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/517.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/musharna', function(req, res){
  res.json({"name":"musharna",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/518.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/natu', function(req, res){
  res.json({"name":"natu",
  "types":["psychic", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/177.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/xatu', function(req, res){
  res.json({"name":"xatu",
  "types":["psychic", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/178.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/178-f.png",
  "gmax":null});
})

app.get('/pokemon/stufful', function(req, res){
  res.json({"name":"stufful",
  "types":["normal", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/759.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bewear', function(req, res){
  res.json({"name":"bewear",
  "types":["normal", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/760.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/snover', function(req, res){
  res.json({"name":"snover",
  "types":["grass", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/459.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/459-f.png",
  "gmax":null});
})

app.get('/pokemon/abomasnow', function(req, res){
  res.json({"name":"abomasnow",
  "types":["grass", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/460.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/460-f.png",
  "gmax":null});
})

app.get('/pokemon/krabby', function(req, res){
  res.json({"name":"krabby",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/098.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/kingler', function(req, res){
  res.json({"name":"kingler",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/099.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/099-gi.png"});
})

app.get('/pokemon/wooper', function(req, res){
  res.json({"name":"wooper",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/194.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/194-f.png",
  "gmax":null});
})

app.get('/pokemon/quagsire', function(req, res){
  res.json({"name":"quagsire",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/195.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/195-f.png",
  "gmax":null});
})

app.get('/pokemon/corphish', function(req, res){
  res.json({"name":"corphish",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/341.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/crawdaunt', function(req, res){
  res.json({"name":"crawdaunt",
  "types":["water", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/342.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/nincada', function(req, res){
  res.json({"name":"nincada",
  "types":["bug", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/290.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ninjask', function(req, res){
  res.json({"name":"ninjask",
  "types":["bug", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/291.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/shedinja', function(req, res){
  res.json({"name":"shedinja",
  "types":["bug", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/292.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/tyrogue', function(req, res){
  res.json({"name":"tyrogue",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/236.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hitmonlee', function(req, res){
  res.json({"name":"hitmonlee",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/106.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hitmonchan', function(req, res){
  res.json({"name":"hitmonchan",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/107.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hitmontop', function(req, res){
  res.json({"name":"hitmontop",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/237.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pancham', function(req, res){
  res.json({"name":"pancham",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/674.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pangoro', function(req, res){
  res.json({"name":"pangoro",
  "types":["fighting", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/675.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/klink', function(req, res){
  res.json({"name":"klink",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/599.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/klang', function(req, res){
  res.json({"name":"klang",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/600.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/klinklang', function(req, res){
  res.json({"name":"klinklang",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/601.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/combee', function(req, res){
  res.json({"name":"combee",
  "types":["bug", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/415.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/415-f.png",
  "gmax":null});
})

app.get('/pokemon/vespiquen', function(req, res){
  res.json({"name":"vespiquen",
  "types":["bug", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/416.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bronzor', function(req, res){
  res.json({"name":"bronzor",
  "types":["steel", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/436.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bronzong', function(req, res){
  res.json({"name":"bronzong",
  "types":["steel", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/437.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ralts', function(req, res){
  res.json({"name":"ralts",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/280.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/kirlia', function(req, res){
  res.json({"name":"kirlia",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/281.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gardevoir', function(req, res){
  res.json({"name":"gardevoir",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/282.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gallade', function(req, res){
  res.json({"name":"gallade",
  "types":["psychic", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/475.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drifloon', function(req, res){
  res.json({"name":"drifloon",
  "types":["ghost", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/425.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drifbloom', function(req, res){
  res.json({"name":"drifblom",
  "types":["ghost", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/426.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gossifleur', function(req, res){
  res.json({"name":"gossifleur",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/829.png",
  "img-fem":null,
  "gmax":null});
})


app.get('/pokemon/eldegoss', function(req, res){
  res.json({"name":"eldegoss",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/830.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cherubi', function(req, res){
  res.json({"name":"cherubi",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/420.png",
  "img-fem":null,
  "gmax":null});
})


app.get('/pokemon/cherrim', function(req, res){
  res.json({"name":"cherrim",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/421.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/stunky', function(req, res){
  res.json({"name":"stunky",
  "types":["poison", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/434.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/skuntank', function(req, res){
  res.json({"name":"skuntank",
  "types":["poison", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/435.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/tympole', function(req, res){
  res.json({"name":"tympole",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/535.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/palpitoad', function(req, res){
  res.json({"name":"palpitoad",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/536.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/seismitoad', function(req, res){
  res.json({"name":"seismitoad",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/537.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/duskull', function(req, res){
  res.json({"name":"duskull",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/355.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dusclops', function(req, res){
  res.json({"name":"dusclops",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/356.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dusknoir', function(req, res){
  res.json({"name":"dusknoir",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/477.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/machop', function(req, res){
  res.json({"name":"machop",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/066.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/machoke', function(req, res){
  res.json({"name":"machoke",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/067.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/machamp', function(req, res){
  res.json({"name":"machamp",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/068.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gastly', function(req, res){
  res.json({"name":"gastly",
  "types":["ghost", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/092.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/haunter', function(req, res){
  res.json({"name":"haunter",
  "types":["ghost", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/093.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gengar', function(req, res){
  res.json({"name":"gengar",
  "types":["ghost", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/094.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/magikarp', function(req, res){
  res.json({"name":"magikarp",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/129.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/129-f.png",
  "gmax":null});
})

app.get('/pokemon/gyarados', function(req, res){
  res.json({"name":"gyarados",
  "types":["water", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/130.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/130-f.png",
  "gmax":null});
})

app.get('/pokemon/goldeen', function(req, res){
  res.json({"name":"goldeen",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/118.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/118-f.png",
  "gmax":null});
})

app.get('/pokemon/seaking', function(req, res){
  res.json({"name":"seaking",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/119.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/119-f.png",
  "gmax":null});
})

app.get('/pokemon/remoraid', function(req, res){
  res.json({"name":"remoraid",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/223.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/octillery', function(req, res){
  res.json({"name":"octillery",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/224.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/224-f.png",
  "gmax":null});
})

app.get('/pokemon/feebas', function(req, res){
  res.json({"name":"feebas",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/349.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/milotic', function(req, res){
  res.json({"name":"milotic",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/350.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/basculin', function(req, res){
  res.json({"name":"basculin",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/550.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/basculin/blue', function(req, res){
  res.json({"name":"basculin",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/550-b.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wishiwashi', function(req, res){
  res.json({"name":"wishiwashi",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/746.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wishiwashi/school', function(req, res){
  res.json({"name":"wishiwashi",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/746-s.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pyukumuku', function(req, res){
  res.json({"name":"pyukumuku",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/771.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/trubbish', function(req, res){
  res.json({"name":"trubbish",
  "types":["poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/568.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/garbodor', function(req, res){
  res.json({"name":"garbodor",
  "types":["poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/569.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/569-gi.png"});
})

app.get('/pokemon/sizzlipede', function(req, res){
  res.json({"name":"sizzlipede",
  "types":["bug", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/850.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/centiskorch', function(req, res){
  res.json({"name":"centiskorch",
  "types":["bug", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/851.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/851-gi.png"});
})

app.get('/pokemon/rolycoly', function(req, res){
  res.json({"name":"rolycoly",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/837.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/carkol', function(req, res){
  res.json({"name":"carkol",
  "types":["rock", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/838.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/coalossal', function(req, res){
  res.json({"name":"coalossal",
  "types":["rock", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/839.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/839-gi.png"});
})

app.get('/pokemon/diglett', function(req, res){
  res.json({"name":"diglett",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/050.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/diglett/alola', function(req, res){
  res.json({"name":"diglett",
  "types":["ground", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/050-a.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dugtrio', function(req, res){
  res.json({"name":"dugtrio",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/051.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dugtrio/alola', function(req, res){
  res.json({"name":"dugtrio",
  "types":["ground", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/051-a.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drilbur', function(req, res){
  res.json({"name":"drilbur",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/529.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/excadrill', function(req, res){
  res.json({"name":"excadrill",
  "types":["ground", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/530.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/roggenrola', function(req, res){
  res.json({"name":"roggenrola",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/524.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/boldore', function(req, res){
  res.json({"name":"boldore",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/525.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gigalith', function(req, res){
  res.json({"name":"gigalith",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/526.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/timburr', function(req, res){
  res.json({"name":"timburr",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/532.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gurdurr', function(req, res){
  res.json({"name":"gurdurr",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/533.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/conkeldurr', function(req, res){
  res.json({"name":"conkeldurr",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/534.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/woobat', function(req, res){
  res.json({"name":"woobat",
  "types":["psychic", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/527.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/swoobat', function(req, res){
  res.json({"name":"swoobat",
  "types":["psychic", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/528.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/noibat', function(req, res){
  res.json({"name":"noibat",
  "types":["flying", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/714.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/noivern', function(req, res){
  res.json({"name":"noivern",
  "types":["flying", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/715.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/onix', function(req, res){
  res.json({"name":"onix",
  "types":["rock", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/095.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/steelix', function(req, res){
  res.json({"name":"steelix",
  "types":["steel", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/208.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/arrokuda', function(req, res){
  res.json({"name":"arrokuda",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/846.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/barraskewda', function(req, res){
  res.json({"name":"barraskewda",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/847.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/meowth/galar', function(req, res){
  res.json({"name":"meowth",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/052-g.png",
  "img-fem":null,
  "gmax":null});
})


app.get('/pokemon/meowth', function(req, res){
  res.json({"name":"meowth",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/052.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/052-gi.png"});
})


app.get('/pokemon/meowth/alola', function(req, res){
  res.json({"name":"meowth",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/052-a.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/perrserker', function(req, res){
  res.json({"name":"perrserker",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/863.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/persian', function(req, res){
  res.json({"name":"persian",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/053.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/persian/alola', function(req, res){
  res.json({"name":"persian",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/053-a.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/milcery', function(req, res){
  res.json({"name":"milcery",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/868.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/alcremie', function(req, res){
  res.json({"name":"alcremie",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/869.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/869-gi.png"});
})

app.get('/pokemon/cutiefly', function(req, res){
  res.json({"name":"cutiefly",
  "types":["bug", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/742.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ribombee', function(req, res){
  res.json({"name":"ribombee",
  "types":["bug", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/743.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ferroseed', function(req, res){
  res.json({"name":"ferroseed",
  "types":["grass", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/597.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ferrothorn', function(req, res){
  res.json({"name":"ferrothorn",
  "types":["grass", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/598.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pumpkaboo', function(req, res){
  res.json({"name":"pumpkaboo",
  "types":["ghost", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/710.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gourgeist', function(req, res){
  res.json({"name":"gourgeist",
  "types":["ghost", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/711.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pichu', function(req, res){
  res.json({"name":"pichu",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/172.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pikachu', function(req, res){
  res.json({"name":"pikachu",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/025.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/025-f.png",
  "gmax":"https://www.serebii.net/swordshield/pokemon/025-gi.png"});
})

app.get('/pokemon/raichu', function(req, res){
  res.json({"name":"raichu",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/026.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/026-f.png",
  "gmax":null});
})

app.get('/pokemon/raichu/alola', function(req, res){
  res.json({"name":"raichu",
  "types":["electric", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/026-a.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/eevee', function(req, res){
  res.json({"name":"eevee",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/133.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/133-gi.png"});
})

app.get('/pokemon/vaporeon', function(req, res){
  res.json({"name":"vaporeon",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/134.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/jolteon', function(req, res){
  res.json({"name":"jolteon",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/135.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/flareon', function(req, res){
  res.json({"name":"flareon",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/136.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/espeon', function(req, res){
  res.json({"name":"espeon",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/196.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/umbreon', function(req, res){
  res.json({"name":"umbreon",
  "types":["dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/197.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/leafeon', function(req, res){
  res.json({"name":"leafeon",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/470.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/glaceon', function(req, res){
  res.json({"name":"glaceon",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/471.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sylveon', function(req, res){
  res.json({"name":"sylveon",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/700.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/applin', function(req, res){
  res.json({"name":"applin",
  "types":["grass", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/840.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/flapple', function(req, res){
  res.json({"name":"flapple",
  "types":["grass", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/841.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/841-gi.png"});
})

app.get('/pokemon/appletun', function(req, res){
  res.json({"name":"appletun",
  "types":["grass", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/842.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/842-gi.png"});
})

app.get('/pokemon/espurr', function(req, res){
  res.json({"name":"espurr",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/677.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/meowstic', function(req, res){
  res.json({"name":"meowstic",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/678.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/678-f.png",
  "gmax":null});
})

app.get('/pokemon/swirlix', function(req, res){
  res.json({"name":"swirlix",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/684.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/slurpuff', function(req, res){
  res.json({"name":"slurpuff",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/685.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/spritzee', function(req, res){
  res.json({"name":"spritzee",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/682.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/aromatisse', function(req, res){
  res.json({"name":"aromatisse",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/683.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dewpider', function(req, res){
  res.json({"name":"dewpider",
  "types":["bug", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/751.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/araquanid', function(req, res){
  res.json({"name":"araquanid",
  "types":["bug", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/752.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wynaut', function(req, res){
  res.json({"name":"wynaut",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/360.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wobbuffet', function(req, res){
  res.json({"name":"wobbufett",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/202.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/202-f.png",
  "gmax":null});
})

app.get('/pokemon/farfetchd/galar', function(req, res){
  res.json({"name":"farfetch'd",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/083-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/farfetchd', function(req, res){
  res.json({"name":"fafetch'd",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/083.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sirfetchd', function(req, res){
  res.json({"name":"sirfetch'd",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/865.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/chinchou', function(req, res){
  res.json({"name":"chinchou",
  "types":["water", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/170.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/lanturn', function(req, res){
  res.json({"name":"lanturn",
  "types":["water", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/171.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/croagunk', function(req, res){
  res.json({"name":"croagunk",
  "types":["poison", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/453.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/453-f.png",
  "gmax":null});
})

app.get('/pokemon/toxicroak', function(req, res){
  res.json({"name":"toxicroak",
  "types":["poison", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/454.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/454-f.png",
  "gmax":null});
})

app.get('/pokemon/scraggy', function(req, res){
  res.json({"name":"scraggy",
  "types":["dark", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/559.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/scrafty', function(req, res){
  res.json({"name":"scrafty",
  "types":["dark", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/560.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/stunfisk/galar', function(req, res){
  res.json({"name":"stunfisk",
  "types":["ground", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/618-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/stunfisk', function(req, res){
  res.json({"name":"stunfisk",
  "types":["ground", "electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/618.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/shuckle', function(req, res){
  res.json({"name":"shuckle",
  "types":["bug", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/213.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/barboach', function(req, res){
  res.json({"name":"barboach",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/339.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/whiscach', function(req, res){
  res.json({"name":"whiscash",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/340.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/shellos', function(req, res){
  res.json({"name":"shellos",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/422-e.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/shellos/west', function(req, res){
  res.json({"name":"shellos",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/422.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gastrodon', function(req, res){
  res.json({"name":"gastrodon",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/423-e.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gastrodon/west', function(req, res){
  res.json({"name":"gastrodon",
  "types":["water", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/423.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wimpod', function(req, res){
  res.json({"name":"wimpod",
  "types":["bug", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/767.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/golisopod', function(req, res){
  res.json({"name":"golisopod",
  "types":["bug", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/768.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/binacle', function(req, res){
  res.json({"name":"binacle",
  "types":["rock", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/688.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/barbaracle', function(req, res){
  res.json({"name":"barbaracle",
  "types":["rock", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/689.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/corsola/galar', function(req, res){
  res.json({"name":"corsola",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/222-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/corsola', function(req, res){
  res.json({"name":"corsola",
  "types":["water", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/222.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cursola', function(req, res){
  res.json({"name":"cursola",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/864.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/impidimp', function(req, res){
  res.json({"name":"impidimp",
  "types":["dark", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/859.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/morgrem', function(req, res){
  res.json({"name":"morgrem",
  "types":["dark", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/860.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/grimmsnarl', function(req, res){
  res.json({"name":"grimmsnarl",
  "types":["dark", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/861.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/861-gi.png"});
})

app.get('/pokemon/hatenna', function(req, res){
  res.json({"name":"hatenna",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/856.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hattrem', function(req, res){
  res.json({"name":"hattrem",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/857.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hatterene', function(req, res){
  res.json({"name":"hatterene",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/858.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/858-gi.png"});
})

app.get('/pokemon/salandit', function(req, res){
  res.json({"name":"salandit",
  "types":["poison", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/757.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/salazzle', function(req, res){
  res.json({"name":"salazzle",
  "types":["poison", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/758.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pawniard', function(req, res){
  res.json({"name":"pawniard",
  "types":["dark", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/624.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bisharp', function(req, res){
  res.json({"name":"bisharp",
  "types":["dark", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/625.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/throh', function(req, res){
  res.json({"name":"throh",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/538.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sawk', function(req, res){
  res.json({"name":"sawk",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/539.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/koffing', function(req, res){
  res.json({"name":"koffing",
  "types":["poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/109.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/weezing/galar', function(req, res){
  res.json({"name":"weezing",
  "types":["poison", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/110-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/weezing', function(req, res){
  res.json({"name":"weezing",
  "types":["poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/110.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bonsly', function(req, res){
  res.json({"name":"bonsly",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/438.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sudowoodo', function(req, res){
  res.json({"name":"sudowoodo",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/185.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/185-f.png",
  "gmax":null});
})

app.get('/pokemon/cleffa', function(req, res){
  res.json({"name":"cleffa",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/173.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/clefairy', function(req, res){
  res.json({"name":"clefairy",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/035.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/clefable', function(req, res){
  res.json({"name":"clefable",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/036.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/togepi', function(req, res){
  res.json({"name":"togepi",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/175.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/togetic', function(req, res){
  res.json({"name":"togetic",
  "types":["fairy", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/176.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/togekiss', function(req, res){
  res.json({"name":"togekiss",
  "types":["fairy", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/468.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/munchlax', function(req, res){
  res.json({"name":"munchlax",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/446.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/snorlax', function(req, res){
  res.json({"name":"snorlax",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/143.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/143-gi.png"});
})

app.get('/pokemon/cottonee', function(req, res){
  res.json({"name":"cottonee",
  "types":["grass", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/546.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/whimsicott', function(req, res){
  res.json({"name":"whimsicott",
  "types":["grass", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/547.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rhyhorn', function(req, res){
  res.json({"name":"rhyhorn",
  "types":["ground", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/111.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/111-f.png",
  "gmax":null});
})

app.get('/pokemon/rhydon', function(req, res){
  res.json({"name":"rhydon",
  "types":["ground", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/112.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/112-f.png",
  "gmax":null});
})

app.get('/pokemon/rhyperior', function(req, res){
  res.json({"name":"rhyperior",
  "types":["ground", "rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/464.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/464-f.png",
  "gmax":null});
})

app.get('/pokemon/gothita', function(req, res){
  res.json({"name":"gothita",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/574.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gothorita', function(req, res){
  res.json({"name":"gothorita",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/575.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/gothitelle', function(req, res){
  res.json({"name":"gothitelle",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/576.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/solosis', function(req, res){
  res.json({"name":"solosis",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/577.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/duosion', function(req, res){
  res.json({"name":"duosion",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/578.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/reuniclus', function(req, res){
  res.json({"name":"reuniclus",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/579.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/karrablast', function(req, res){
  res.json({"name":"karrablast",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/588.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/escavalier', function(req, res){
  res.json({"name":"escavalier",
  "types":["bug", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/589.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/shelmet', function(req, res){
  res.json({"name":"shelmet",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/616.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/accelgor', function(req, res){
  res.json({"name":"accelgor",
  "types":["bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/617.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/elgyem', function(req, res){
  res.json({"name":"elgyem",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/605.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/beheeyem', function(req, res){
  res.json({"name":"beheeyem",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/606.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cubchoo', function(req, res){
  res.json({"name":"cubchoo",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/613.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/beartic', function(req, res){
  res.json({"name":"beartic",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/614.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rufflet', function(req, res){
  res.json({"name":"rufflet",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/627.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/braviary', function(req, res){
  res.json({"name":"braviary",
  "types":["normal", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/628.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/vullaby', function(req, res){
  res.json({"name":"vullaby",
  "types":["dark", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/629.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mandibuzz', function(req, res){
  res.json({"name":"mandibuzz",
  "types":["dark", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/630.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/skorupi', function(req, res){
  res.json({"name":"skorupi",
  "types":["poison", "bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/451.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drapion', function(req, res){
  res.json({"name":"drapion",
  "types":["poison", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/452.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/litwick', function(req, res){
  res.json({"name":"litwick",
  "types":["ghost", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/607.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/lampent', function(req, res){
  res.json({"name":"lampent",
  "types":["ghst", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/608.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/chandelure', function(req, res){
  res.json({"name":"chandelure",
  "types":["ghost", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/609.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/inkay', function(req, res){
  res.json({"name":"inkay",
  "types":["dark", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/686.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/malamar', function(req, res){
  res.json({"name":"malamar",
  "types":["dark", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/687.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sneasel', function(req, res){
  res.json({"name":"sneasel",
  "types":["dark", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/215.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/215-f.png",
  "gmax":null});
})

app.get('/pokemon/weavile', function(req, res){
  res.json({"name":"weavile",
  "types":["dark", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/461.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/461-f.png",
  "gmax":null});
})

app.get('/pokemon/sableye', function(req, res){
  res.json({"name":"sableye",
  "types":["dark", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/302.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mawile', function(req, res){
  res.json({"name":"mawile",
  "types":["steel", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/303.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/maractus', function(req, res){
  res.json({"name":"maractus",
  "types":["grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/556.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sigilyph', function(req, res){
  res.json({"name":"sigilyph",
  "types":["psychic", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/561.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/riolu', function(req, res){
  res.json({"name":"riolu",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/447.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/lucario', function(req, res){
  res.json({"name":"lucario",
  "types":["fighting", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/448.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/torkoal', function(req, res){
  res.json({"name":"torkoal",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/324.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mimikyu', function(req, res){
  res.json({"name":"mimikyu",
  "types":["ghost", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/778.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cufant', function(req, res){
  res.json({"name":"cufant",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/878.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/copperajah', function(req, res){
  res.json({"name":"copperajah",
  "types":["steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/879.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/879-gi.png"});
})

app.get('/pokemon/qwilfish', function(req, res){
  res.json({"name":"qwilfish",
  "types":["water", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/211.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/frillish', function(req, res){
  res.json({"name":"frillish",
  "types":["water", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/592.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/592-f.png",
  "gmax":null});
})

app.get('/pokemon/jellicent', function(req, res){
  res.json({"name":"jellicent",
  "types":["water", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/593.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/593-f.png",
  "gmax":null});
})

app.get('/pokemon/mareanie', function(req, res){
  res.json({"name":"mareanie",
  "types":["poison", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/747.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/toxapex', function(req, res){
  res.json({"name":"toxapex",
  "types":["poison", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/748.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cramorant', function(req, res){
  res.json({"name":"cramorant",
  "types":["flying", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/845.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/toxel', function(req, res){
  res.json({"name":"toxel",
  "types":["electric", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/848.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/toxtricity', function(req, res){
  res.json({"name":"toxtricity",
  "types":["electric", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/849.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/849-gi.png"});
})

app.get('/pokemon/toxtricity/low-key', function(req, res){
  res.json({"name":"toxtricity",
  "types":["electric", "poison"],
  "img":"https://www.serebii.net/swordshield/pokemon/849-l.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/849-gi.png"});
})

app.get('/pokemon/silicobra', function(req, res){
  res.json({"name":"silicobra",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/843.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sandaconda', function(req, res){
  res.json({"name":"sandaconda",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/844.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/844-gi.png"});
})

app.get('/pokemon/hippopotas', function(req, res){
  res.json({"name":"hippopotas",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/449.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/449-f.png",
  "gmax":null});
})

app.get('/pokemon/hippowdon', function(req, res){
  res.json({"name":"hippowdon",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/450.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/450-f.png",
  "gmax":null});
})

app.get('/pokemon/durant', function(req, res){
  res.json({"name":"durant",
  "types":["bug", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/632.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/heatmor', function(req, res){
  res.json({"name":"heatmor",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/631.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/helioptile', function(req, res){
  res.json({"name":"helioptile",
  "types":["electric", "normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/694.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/heliolisk', function(req, res){
  res.json({"name":"heliolisk",
  "types":["electric", "normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/695.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hawlucha', function(req, res){
  res.json({"name":"hawlucha",
  "types":["fighting", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/701.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/trapinch', function(req, res){
  res.json({"name":"trapinch",
  "types":["ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/328.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/vibrava', function(req, res){
  res.json({"name":"vibrava",
  "types":["ground", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/329.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/flygon', function(req, res){
  res.json({"name":"flygon",
  "types":["ground", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/330.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/axew', function(req, res){
  res.json({"name":"axew",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/610.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/fraxure', function(req, res){
  res.json({"name":"fraxure",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/611.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/haxorus', function(req, res){
  res.json({"name":"haxorus",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/612.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/yamask/galar', function(req, res){
  res.json({"name":"yamask",
  "types":["ground", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/562-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/yamask', function(req, res){
  res.json({"name":"yamask",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/562.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/runerigus', function(req, res){
  res.json({"name":"runerigus",
  "types":["ground", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/867.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/cofagrigus', function(req, res){
  res.json({"name":"cofagrigus",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/563.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/honedge', function(req, res){
  res.json({"name":"honedge",
  "types":["steel", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/679.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/doublade', function(req, res){
  res.json({"name":"doublade",
  "types":["steel", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/680.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/aegislash', function(req, res){
  res.json({"name":"aegislash",
  "types":["steel", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/681.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ponyta/galar', function(req, res){
  res.json({"name":"ponyta",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/077-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ponyta', function(req, res){
  res.json({"name":"ponyta",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/077.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rapidash/galar', function(req, res){
  res.json({"name":"rapidash",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/078-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rapidash', function(req, res){
  res.json({"name":"rapidash",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/078.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sinistea', function(req, res){
  res.json({"name":"sinistea",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/854.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/polteageist', function(req, res){
  res.json({"name":"polteageist",
  "types":["ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/855.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/indeedee', function(req, res){
  res.json({"name":"indeedee",
  "types":["psychic", "normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/876.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/876-f.png",
  "gmax":null});
})

app.get('/pokemon/phantump', function(req, res){
  res.json({"name":"phantump",
  "types":["ghost", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/708.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/trevenant', function(req, res){
  res.json({"name":"trevenant",
  "types":["ghost", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/709.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/morelull', function(req, res){
  res.json({"name":"morelull",
  "types":["grass", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/755.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/shiinotic', function(req, res){
  res.json({"name":"shiinotic",
  "types":["grass", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/756.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/oranguru', function(req, res){
  res.json({"name":"oranguru",
  "types":["normal", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/765.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/passimian', function(req, res){
  res.json({"name":"passimian",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/766.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/morpeko', function(req, res){
  res.json({"name":"morpeko",
  "types":["electric", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/877.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/falinks', function(req, res){
  res.json({"name":"falinks",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/870.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/turtonator', function(req, res){
  res.json({"name":"turtonator",
  "types":["fire", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/780.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drampa', function(req, res){
  res.json({"name":"drampa",
  "types":["normal", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/776.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/togedemaru', function(req, res){
  res.json({"name":"togedemaru",
  "types":["electric", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/777.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/snom', function(req, res){
  res.json({"name":"snom",
  "types":["ice", "bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/872.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/frosmoth', function(req, res){
  res.json({"name":"frosmoth",
  "types":["ice", "bug"],
  "img":"https://www.serebii.net/swordshield/pokemon/873.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/clobbopus', function(req, res){
  res.json({"name":"clobbopus",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/852.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/grapploct', function(req, res){
  res.json({"name":"grapploct",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/853.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pincurchin', function(req, res){
  res.json({"name":"pincurchin",
  "types":["electric"],
  "img":"https://www.serebii.net/swordshield/pokemon/871.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mantyke', function(req, res){
  res.json({"name":"mantyke",
  "types":["water", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/458.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mantine', function(req, res){
  res.json({"name":"mantine",
  "types":["water", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/226.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wailmer', function(req, res){
  res.json({"name":"wailmer",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/320.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/wailord', function(req, res){
  res.json({"name":"wailord",
  "types":["water"],
  "img":"https://www.serebii.net/swordshield/pokemon/321.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/bergmite', function(req, res){
  res.json({"name":"bergmite",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/712.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/avalugg', function(req, res){
  res.json({"name":"avalugg",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/713.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dhelmise', function(req, res){
  res.json({"name":"dhelmise",
  "types":["ghost", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/781.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/lapras', function(req, res){
  res.json({"name":"lapras",
  "types":["water", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/131.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/131-gi.png"});
})

app.get('/pokemon/lunatone', function(req, res){
  res.json({"name":"lunatone",
  "types":["rock", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/337.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/solrock', function(req, res){
  res.json({"name":"solrock",
  "types":["rock", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/338.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mime-jr', function(req, res){
  res.json({"name":"mime jr.",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/439.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mr-mime/galar', function(req, res){
  res.json({"name":"mr. mime",
  "types":["ice", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/122-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mr-mime', function(req, res){
  res.json({"name":"mr. mime",
  "types":["psychic", "fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/122.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/mr-rime', function(req, res){
  res.json({"name":"mr. rime",
  "types":["ice", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/866.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/darumaka/galar', function(req, res){
  res.json({"name":"darumaka",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/554-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/darumaka', function(req, res){
  res.json({"name":"darumaka",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/554.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/darmanitan/galar', function(req, res){
  res.json({"name":"darmanitan",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/555-g.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/darmanitan/galar/zen', function(req, res){
  res.json({"name":"darmanitan",
  "types":["ice", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/555-gz.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/darmanitan', function(req, res){
  res.json({"name":"darmanitan",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/555.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/darmanitan/zen', function(req, res){
  res.json({"name":"darmanitan",
  "types":["fire", "psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/555-z.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/stonjourner', function(req, res){
  res.json({"name":"stonjourner",
  "types":["rock"],
  "img":"https://www.serebii.net/swordshield/pokemon/874.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/eiscue', function(req, res){
  res.json({"name":"eiscue",
  "types":["ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/875.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/duraludon', function(req, res){
  res.json({"name":"duraludon",
  "types":["steel", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/884.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/884-gi.png"});
})

app.get('/pokemon/rotom', function(req, res){
  res.json({"name":"rotom",
  "types":["electric", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/479.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rotom/heat', function(req, res){
  res.json({"name":"rotom",
  "types":["electric", "fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/479-h.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rotom/wash', function(req, res){
  res.json({"name":"rotom",
  "types":["electric", "water"],
  "img":"https://www.serebii.net/swordshield/pokemon/479-w.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rotom/frost', function(req, res){
  res.json({"name":"rotom",
  "types":["electric", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/479-f.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rotom/fan', function(req, res){
  res.json({"name":"rotom",
  "types":["electric", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/479-s.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/rotom/mow', function(req, res){
  res.json({"name":"rotom",
  "types":["electric", "grass"],
  "img":"https://www.serebii.net/swordshield/pokemon/479-m.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/ditto', function(req, res){
  res.json({"name":"ditto",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/132.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dracozolt', function(req, res){
  res.json({"name":"dracozolt",
  "types":["electric", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/880.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/arctozolt', function(req, res){
  res.json({"name":"arctozolt",
  "types":["electric", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/881.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dracovish', function(req, res){
  res.json({"name":"dracovish",
  "types":["water", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/882.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/arctovish', function(req, res){
  res.json({"name":"arctovish",
  "types":["water", "ice"],
  "img":"https://www.serebii.net/swordshield/pokemon/883.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/charmander', function(req, res){
  res.json({"name":"charmander",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/004.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/charmeleon', function(req, res){
  res.json({"name":"charmeleon",
  "types":["fire"],
  "img":"https://www.serebii.net/swordshield/pokemon/005.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/charizard', function(req, res){
  res.json({"name":"charizard",
  "types":["fire", "flying"],
  "img":"https://www.serebii.net/swordshield/pokemon/006.png",
  "img-fem":"https://www.serebii.net/swordshield/pokemon/006-gi.png",
  "gmax":null});
})

app.get('/pokemon/type-null', function(req, res){
  res.json({"name":"type: null",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/772.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/silvally', function(req, res){
  res.json({"name":"silvally",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/773.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/larvitar', function(req, res){
  res.json({"name":"larvitar",
  "types":["rock", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/246.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/pupitar', function(req, res){
  res.json({"name":"pupitar",
  "types":["rock", "ground"],
  "img":"https://www.serebii.net/swordshield/pokemon/247.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/tyranitar', function(req, res){
  res.json({"name":"tyranitar",
  "types":["rock", "dark"],
  "img":"https://www.serebii.net/swordshield/pokemon/248.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/deino', function(req, res){
  res.json({"name":"deino",
  "types":["dark", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/633.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/zweilous', function(req, res){
  res.json({"name":"zweilous",
  "types":["dark", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/634.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hydreigon', function(req, res){
  res.json({"name":"hydreigon",
  "types":["dark", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/635.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/goomy', function(req, res){
  res.json({"name":"goomy",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/704.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/sliggoo', function(req, res){
  res.json({"name":"sliggoo",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/705.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/goodra', function(req, res){
  res.json({"name":"goodra",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/706.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/jangmo-o', function(req, res){
  res.json({"name":"jangmo-o",
  "types":["dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/782.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/hakamo-o', function(req, res){
  res.json({"name":"hakamo-o",
  "types":["dragon", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/783.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/kommo-o', function(req, res){
  res.json({"name":"kommo-o",
  "types":["dragon", "fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/784.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dreepy', function(req, res){
  res.json({"name":"dreepy",
  "types":["dragon", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/885.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/drakloak', function(req, res){
  res.json({"name":"drakloak",
  "types":["dragon", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/886.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/dragapult', function(req, res){
  res.json({"name":"dragapult",
  "types":["dragon", "ghost"],
  "img":"https://www.serebii.net/swordshield/pokemon/887.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/zacian', function(req, res){
  res.json({"name":"zacian",
  "types":["fairy"],
  "img":"https://www.serebii.net/swordshield/pokemon/888.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/zacian/crowned', function(req, res){
  res.json({"name":"zacian",
  "types":["fairy", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/888-c.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/zamazenta', function(req, res){
  res.json({"name":"zamazenta",
  "types":["fighting"],
  "img":"https://www.serebii.net/swordshield/pokemon/889.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/zamazenta/crowned', function(req, res){
  res.json({"name":"zamazenta",
  "types":["fighting", "steel"],
  "img":"https://www.serebii.net/swordshield/pokemon/889-c.png",
  "img-fem":null,
  "gmax":null});
})

app.get('/pokemon/eternatus', function(req, res){
  res.json({"name":"eternatus",
  "types":["poison", "dragon"],
  "img":"https://www.serebii.net/swordshield/pokemon/890.png",
  "img-fem":null,
  "gmax":"https://www.serebii.net/swordshield/pokemon/890-e.png"});
})

app.get('/pokemon/mew', function(req, res){
  res.json({"name":"mew",
  "types":["psychic"],
  "img":"https://www.serebii.net/swordshield/pokemon/151.png",
  "img-fem":null,
  "gmax":null});
})

app.use(express.static("."));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
