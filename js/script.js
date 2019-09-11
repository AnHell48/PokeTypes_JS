
"use stric"
var typeChart =[
                /*Normal*/  [1,1,1,1,1,1,1,1,1,1,1,1,5,0,1,1,5,1],
                /*Fire*/    [1,5,5,1,2,2,1,1,1,1,1,2,5,1,5,1,2,1],
                /*Water*/   [1,2,5,1,5,1,1,1,2,1,1,1,2,1,5,1,1,1],
                /*Elect*/   [1,1,2,5,5,1,1,1,0,2,1,1,1,1,5,1,1,1],
                /*Grass*/   [1,5,2,1,5,1,1,5,2,5,1,5,2,1,5,1,5,1],
                /*Ice*/     [1,5,5,1,2,5,1,1,2,2,1,1,1,1,2,1,5,1],
                /*Fighting*/[2,1,1,1,1,2,1,5,1,5,5,5,2,0,1,2,2,5],
                /*Poison*/  [1,1,1,1,2,1,1,5,5,1,1,1,5,5,1,1,0,2],
                /*Ground*/  [1,2,1,2,5,1,1,2,1,0,1,5,2,1,1,1,2,1],
                /*Flying*/  [1,1,1,5,2,1,2,1,1,1,1,2,5,1,1,1,5,1],
                /*Psychic*/ [1,1,1,1,1,1,2,2,1,1,5,1,1,1,1,0,5,1],
                /*Bug*/     [1,5,1,1,2,1,5,5,1,5,2,1,1,5,1,2,5,5],
                /*Rock*/    [1,2,1,1,1,2,5,1,5,2,1,2,1,1,1,1,5,1],
                /*Ghost*/   [0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,5,1,1],
                /*Dragon*/  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,5,0],
                /*Dark*/    [1,1,1,1,1,1,5,1,1,1,2,1,1,2,1,5,1,5],
                /*Steel*/   [1,5,5,5,1,2,1,1,1,1,1,1,2,1,1,1,5,2],
                /*Fairy*/   [1,5,1,1,1,1,2,5,1,1,1,1,1,1,2,2,5,1]
            ];

var typesCount = 18;
var types = ["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
var noEffect, superEffective,  notVeryEffective, strongAgainst;
var btnSec1 = document.getElementById("btn-Section1");
var btnSec2 = document.getElementById("btn-Section2");
var dualTypes = [];
var dualtypesCheked;

function CreateButtonRows()
{
  // go trough the array and create each button using it's name as ID.
	for(var bt = 0; bt < typesCount; bt++)
	{
		var btn = CreateButton(bt,types);

    //create two rows of buttons
		if(bt <= 8)
		{
			btnSec1.appendChild(btn);
		}
		else
		{
			btnSec2.appendChild(btn);
		}
	}
}

//create and return a new button with type ID;
function CreateButton(number,arr)
{
  var newBtn = document.createElement('button');

  newBtn.classList.add("btns");
  newBtn.classList.add(arr[number]+"Btn");
  newBtn.setAttribute("OnClick",'GetBtnID("'+arr[number]+'")');
  newBtn.appendChild(document.createTextNode(arr[number]));

  return newBtn;
}

//When a button is pressed it will get the ID, verify if "dual type" is checked
//and call single or dual function to get the data.
function GetBtnID(btnID)
{
    /* ------------------------> TODO: <---------------------------------------
    X  get btn id
    X  get it's index
    X  check if dual is chekched
      send type to single or dual function
  */
  // get the index of the value from the button pressed,
  //EX: water selected then the index on the array is 2
	var typeID = types.indexOf(btnID);
  dualtypesCheked = document.getElementById("dual-type-Chck").checked;

// if the checkbox is not checked then we can continue
//else if marked it means we need to wait till there's 2 types.
  if(!dualtypesCheked)
  {
    dualTypes.push(typeID);
    // single type
    ShowResult(dualTypes);
    dualTypes.length = 0;
  }
  else
  {
    dualTypes.push(typeID);
    if(dualTypes.length == 2)
    {
      // dual types
      ShowResult(dualTypes());
      dualTypes.length = 0;
    }
  }

}


function ShowResult(typeSelected)
{
  var resultArea = document.getElementById("results");
  var selectedType = document.getElementById("type-Result");
  var strongResult = document.getElementById("strong");
  var weakResult = document.getElementById("weak");
  var noEffectResult = document.getElementById("no-Effect");
  var notVeryResult = document.getElementById("not-Very");
  noEffect = [];
  superEffective = [];
  strongAgainst = [];
  notVeryEffective = [];
  weakResult.innerHTML = strongResult.innerHTML = noEffectResult.innerHTML= notVeryResult.innerHTML= "";

/* ----------------------------------> TODO <---------------------------------
check if types on array; more than 2? then is dual no then single

*/
	for(var t = 0; t <= types.length -1;t++)
	{
    //check which are strong against selected
    if(typeChart[typeSelected][t] == 2 || typeChart[typeSelected][t] == 4 )
    {
      // super effective attacking
      strongAgainst.push(types[t]);
    }

		//weak against selected
		if(typeChart[t][typeSelected] == 0)
		{
			// no effect;
      noEffect.push(types[t]);
		}
		else if(typeChart[t][typeSelected] == 2 || typeChart[t][typeSelected] == 4 )
		{
			// super effective (weak against)
      superEffective.push(types[t]);
		}
		else // 5 or 25 or 10 are not very effective
		{
			// not very
      notVeryEffective.push(types[t]);
    }
	}

  console.log("good against: "+strongAgainst);
  console.log("weak against: "+superEffective);
  console.log("dont bother "+notVeryEffective);
  console.log("no effect: "+noEffect);

  	/* ------------------------> TODO: <---------------------------------------
  	  clear the current result and append new one when selected a second time
      delete and add new id attribute when another is selected
	*/

  selectedType.innerHTML = types[typeSelected];
  selectedType.className += types[typeSelected]+"Btn";

  for(var n = 0; n < strongAgainst.length; n++)
  {
    strongResult.appendChild(CreateButton(n,strongAgainst));
  }

  for(var n = 0; n < superEffective.length; n++)
  {
    weakResult.appendChild(CreateButton(n,superEffective));
  }

  for(var n = 0; n < noEffect.length; n++)
  {
    noEffectResult.appendChild(CreateButton(n,noEffect));
  }

  for(var n = 0; n < notVeryEffective.length; n++)
  {
    notVeryResult.appendChild(CreateButton(n,notVeryEffective));
  }
}

function DualTypes(type1, type2)
{
  console.log(type1 +""+ type2);
}


CreateButtonRows();
