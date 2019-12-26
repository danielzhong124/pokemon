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

app.get('/pokemon/zigzagoon', function(req, res){
  res.json({"name":"zigzagoon",
  "types":["normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/263.png",
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

app.get('/pokemon/zigzagoon/galar', function(req, res){
  res.json({"name":"zigzagoon",
  "types":["dark", "normal"],
  "img":"https://www.serebii.net/swordshield/pokemon/263-g.png",
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
  "img-fem":null,
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

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
