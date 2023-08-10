"use strict"

var searchBox = document.getElementById("search-txt");
var searchBtn = document.getElementById('search-btn');
var errorlbl = document.getElementById("error-lbl");
var popup = document.getElementById('loading-popup');
var pokemonName = "--";

searchBtn.addEventListener("click",  Request);

//API doesn't contain the latest generation so I created a array which contains this data. If the name is not on it then
//this will do the request.
function Request()
{
  var pkmToSearch = String(searchBox.value.toLowerCase()); // txt from search, need to be lower if not error
  
  //Show loading while fetching data.
  popup.showModal();
  
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = Response;
  xmlHttp.open ("GET", "https://pokeapi.co/api/v2/pokemon/"+pkmToSearch+"/");
  xmlHttp.send();  

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
    popup.close();
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
  
  popup.close();
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
