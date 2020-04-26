"use strict"

var searchBox = document.getElementById("search-txt");
var searchBtn = document.getElementById('search-btn');
var errorlbl = document.getElementById("error-lbl");
var gen8List = [
{name: "Grookey", number: 810,  types: ["Grass"], gen: 8 },
{name: "Thwackey", number: 811,  types: ["Grass"], gen: 8 },
{name: "Rillaboom", number: 812,  types: ["Grass"], gen: 8 },
{name: "Scorbunny", number: 813,  types: ["Fire"], gen: 8 },
{name: "Raboot", number: 814,  types: ["Fire"], gen: 8 },
{name: "Cinderace", number: 815,  types: ["Fire"], gen: 8 },
{name: "Sobble", number: 816,  types: ["Water"], gen: 8 },
{name: "Drizzile", number: 817,  types: ["Water"], gen: 8 },
{name: "Inteleon", number: 818,  types: ["Water"], gen: 8 },
{name: "Skwovet", number: 819,  types: ["Normal"], gen: 8 },
{name: "Greedent", number: 820,  types: ["Normal"], gen: 8 },
{name: "Rookidee", number: 821,  types: ["Flying"], gen: 8 },
{name: "Corvisquire", number: 822,  types: ["Flying"], gen: 8 },
{name: "Corviknight", number: 823,  types: ["Flying", "Steel"], gen: 8 },
{name: "Blipbug", number: 824,  types: ["Bug"], gen: 8 },
{name: "Dottler", number: 825,  types: ["Bug", "Psychic"], gen: 8 },
{name: "Orbeetle", number: 826,  types: ["Bug", "Psychic"], gen: 8 },
{name: "Nickit", number: 827,  types: ["Dark"], gen: 8 },
{name: "Thievul", number: 828,  types: ["Dark"], gen: 8 },
{name: "Gossifleur", number: 829,  types: ["Grass"], gen: 8 },
{name: "Eldegoss", number: 830,  types: ["Grass"], gen: 8 },
{name: "Wooloo", number: 831,  types: ["Normal"], gen: 8 },
{name: "Dubwool", number: 832,  types: ["Normal"], gen: 8 },
{name: "Chewtle", number: 833,  types: ["Water"], gen: 8 },
{name: "Drednaw", number: 834,  types: ["Water", "Rock"], gen: 8 },
{name: "Yamper", number: 835,  types: ["Electric"], gen: 8 },
{name: "Boltund", number: 836,  types: ["Electric"], gen: 8 },
{name: "Rolycoly", number: 837,  types: ["Rock"], gen: 8 },
{name: "Carkol", number: 838,  types: ["Rock", "Fire"], gen: 8 },
{name: "Coalossal", number: 839,  types: ["Rock", "Fire"], gen: 8 },
{name: "Applin", number: 840,  types: ["Grass", "Dragon"], gen: 8 },
{name: "Flapple", number: 841,  types: ["Grass", "Dragon"], gen: 8 },
{name: "Appletun", number: 842,  types: ["Grass", "Dragon"], gen: 8 },
{name: "Silicobra", number: 843,  types: ["Ground"], gen: 8 },
{name: "Sandaconda", number: 844,  types: ["Ground"], gen: 8 },
{name: "Cramorant", number: 845,  types: ["Flying", "Water"], gen: 8 },
{name: "Arrokuda", number: 846,  types: ["Water"], gen: 8 },
{name: "Barraskewda", number: 847,  types: ["Water"], gen: 8 },
{name: "Toxel", number: 848,  types: ["Electric", "Poison"], gen: 8 },
{name: "Toxtricity", number: 849,  types: ["Electric", "Poison"], gen: 8 },
{name: "Sizzlipede", number: 850,  types: ["Fire", "Bug"], gen: 8 },
{name: "Centiskorch", number: 851,  types: ["Fire", "Bug"], gen: 8 },
{name: "Clobbopus", number: 852,  types: ["Fighting"], gen: 8 },
{name: "Grapploct", number: 853,  types: ["Fighting"], gen: 8 },
{name: "Sinistea", number: 854,  types: ["Ghost"], gen: 8 },
{name: "Polteageist", number: 855,  types: ["Ghost"], gen: 8 },
{name: "Hatenna", number: 856,  types: ["Psychic"], gen: 8 },
{name: "Hattrem", number: 857,  types: ["Psychic"], gen: 8 },
{name: "Hatterene", number: 858,  types: ["Psychic", "Fairy"], gen: 8 },
{name: "Impidimp", number: 859,  types: ["Dark", "Fairy"], gen: 8 },
{name: "Morgrem", number: 860,  types: ["Dark", "Fairy"], gen: 8 },
{name: "Grimmsnarl", number: 861,  types: ["Dark", "Fairy"], gen: 8 },
{name: "Obstagoon", number: 862,  types: ["Dark", "Normal"], gen: 8 },
{name: "Perrserker", number: 863,  types: ["Steel"], gen: 8 },
{name: "Cursola", number: 864,  types: ["Ghost"], gen: 8 },
{name: "Sirfetch'd", number: 865,  types: ["Fighting"], gen: 8 },
{name: "Mr.Rime", number: 866,  types: ["Psychic", "Ice"], gen: 8 },
{name: "Runerigus", number: 867,  types: ["Ground", "Ghost"], gen: 8 },
{name: "Milcery", number: 868,  types: ["Fairy"], gen: 8 },
{name: "Alcremie", number: 869,  types: ["Fairy"], gen: 8 },
{name: "Falinks", number: 870,  types: ["Fighting"], gen: 8 },
{name: "Pincurchin", number: 871,  types: ["Electric"], gen: 8 },
{name: "Snom", number: 872,  types: ["Ice", "Bug"], gen: 8 },
{name: "Frosmoth", number: 873,  types: ["Ice", "Bug"], gen: 8 },
{name: "Stonjourner", number: 874,  types: ["Rock"], gen: 8 },
{name: "Eiscue", number: 875,  types: ["Ice"], gen: 8 },
{name: "Indeedee", number: 876,  types: ["Psychic", "Norma"], gen: 8 },
{name: "Morpeko", number: 877,  types: ["Electric", "Dark"], gen: 8 },
{name: "Cufant", number: 878,  types: ["Steel"], gen: 8 },
{name: "Copperajah", number: 879,  types: ["Steel"], gen: 8 },
{name: "Dracozolt", number: 880,  types: ["Electric", "Dragon"], gen: 8 },
{name: "Arctozolt", number: 881,  types: ["Electric", "Ice"], gen: 8 },
{name: "Dracovish", number: 882,  types: ["Water", "Dragon"], gen: 8 },
{name: "Arctovish", number: 883,  types: ["Water", "Ice"], gen: 8 },
{name: "Duraludon", number: 884,  types: ["Steel", "Dragon"], gen: 8 },
{name: "Dreepy", number: 885,  types: ["Dragon", "Ghost"], gen: 8 },
{name: "Drakloak", number: 886,  types: ["Dragon", "Ghost"], gen: 8 },
{name: "Dragapult", number: 887,  types: ["Dragon", "Ghost"], gen: 8 },
{name: "Zacian", number: 888,  types: ["Fairy", "Stee"], gen: 8 },
{name: "Zamazenta", number: 889,  types: ["Fighting", "Steel"], gen: 8 },
{name: "Eternatus", number: 890,  types: ["Poison", "Dragon"], gen: 8 }
];

searchBtn.addEventListener("click",  Request);

//API doesn't contain the latest generation so I created a array which contains this data. If the name is not on it then
//this will do the request.
function Request()
{
  let isGen8 = false;
  let index = 0;
  var pkmToSearch = String(searchBox.value.toLowerCase()); // txt from search, need to be lower if not error
  // console.log("to search: " + pkmToSearch);
  for(let pn = 0; pn != gen8List.length; pn++)
  {
    if(gen8List[pn].name.toLowerCase() == pkmToSearch)
    {
      isGen8 = true;
      index = pn;
      errorlbl.classList.add("hide");
      break;
    }
  }

  //if the pokemon is not on the list then send the request.
  if(isGen8)
  {
    console.log(gen8List[index]);
    PKMDataList(gen8List[index]);
  }
  else
  {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = Response;
    xmlHttp.open ("GET", "https://pokeapi.co/api/v2/pokemon/"+pkmToSearch+"/");
    xmlHttp.send();
  }
}

function Response()
{
  if(this.readyState == 4 && this.status == 200)
  {
    let respObj = JSON.parse(this.responseText);
    errorlbl.classList.add("hide");
    PKMData(respObj);
  }
  else if(this.status == 404)
  {
    errorlbl.classList.remove("hide");
  }
}

//response from api
function PKMData(responseOBJ)
{
  let pkmObj = responseOBJ;
  let pkmType = "";
  let pkmSprite;

  btnCheck.checked = (pkmObj.types.length > 1) ? btnCheck.checked = true : btnCheck.checked = false;

  for(let t = 0; t < pkmObj.types.length; t++)
  {
    pkmType += pkmObj.types[t].type.name;
    GetBtnID(pkmObj.types[t].type.name);
  }
  // console.log(pkmType);
}

//"response" from the list.
function PKMDataList(obj)
{
  let pkmObj = obj;
  let pkmType = "";
  let pkmSprite;

  btnCheck.checked = (pkmObj.types.length > 1) ? btnCheck.checked = true : btnCheck.checked = false;

  for(let t = 0; t < pkmObj.types.length; t++)
  {
    pkmType += pkmObj.types[t];
    GetBtnID(pkmObj.types[t].toLowerCase());
  }
  // console.log(pkmType);
}
