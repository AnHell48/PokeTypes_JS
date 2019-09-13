
// "use strict"
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

var types = ["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
var noEffect, superEffective,  notVeryEffective, strongAgainst;
var btnSec1 = document.getElementById("btn-Section1");
var btnSec2 = document.getElementById("btn-Section2");
var dualTypes = [];
var dualtypesCheked ;

function CreateButtonRows()
{
  // go trough the array and create each button using it's name as ID.
	for(var bt = 0; bt < types.length; bt++)
	{
		var btn = CreateButton(bt,types);

    //create two rows of buttons
		// if(bt <= 8)
		// {
		// 	btnSec1.appendChild(btn);
		// }
		// else
		// {
		// 	btnSec2.appendChild(btn);
		// }
    btnSec1.appendChild(btn);
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
  // get the index of the value from the button pressed,
  //EX: water selected then the index on the array is 2
	var typeID = types.indexOf(btnID);
  dualtypesCheked = document.getElementById("dual-type-Chck").checked;

  // document.querySelector("."+btnID+"Btn").setAttribute("style","color:black;");

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
      // verify if both elements are not the same
      if(dualTypes[0] != dualTypes[1])
      {
        // dual types
        ShowResult(dualTypes);
        dualTypes.length = 0;
      }
      else
      {
        dualTypes.pop(1);
      }
    }
  }
}


function ShowResult(typeSelected)
{
  var typeselect = 0;
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

	for(var t = 0; t <= types.length -1;t++)
	{
    if(dualtypesCheked)
    {
      typeSelect = typeChart[typeSelected[0]][t] * typeChart[typeSelected[1]][t];
    }
    else
    {
      typeSelect = typeChart[typeSelected[0]][t];
    }

    //check which are strong against selected
    if(typeSelect == 2 || typeSelect == 4 )
    {
      // super effective attacking
      strongAgainst.push(types[t]);
    }

    if(dualtypesCheked)
    {
      typeSelect = typeChart[t][typeSelected[0]] * typeChart[t][typeSelected[1]];
    }
    else
    {
      typeSelect =typeChart[t][typeSelected[0]];
    }

		//weak against selected
		if(typeSelect == 0)
		{
			// no effect;
      noEffect.push(types[t]);
		}
		else if(typeSelect == 2 || typeSelect == 4 )
		{
			// super effective (weak against)
      superEffective.push(types[t]);
		}
		else if (typeSelect != 1) // 5 or 25 or 10 are not very effective
		{
			// not very
      notVeryEffective.push(types[t]);
    }
	}

  // get the color of each type to create the background color.
  var temp_btn = document.querySelector("."+types[typeSelected[0]]+"Btn");
  var typeColor = window.getComputedStyle(temp_btn);
  typeColor = typeColor.getPropertyValue("background-color");
  var typeColor2 ;

  if(dualtypesCheked)
  {
    var temp_btn2 = document.querySelector("."+types[typeSelected[1]]+"Btn");
    typeColor2 = window.getComputedStyle(temp_btn2);
    typeColor2 = typeColor2.getPropertyValue("background-color");
  }
  else {
    //if there's no dual type then give both variables the same color.
    typeColor2 = typeColor;
  }

  document.querySelector("#results").setAttribute("style","visibility:visible;")
  selectedType.innerHTML = "";
  var tempText = (dualtypesCheked) ? types[typeSelected[0]] +" / "+types[typeSelected[1]] : types[typeSelected[0]];
  var typeToSearch = document.createTextNode(tempText);

  selectedType.appendChild(typeToSearch) ;
  selectedType.setAttribute("style","background:linear-gradient(90deg, "+typeColor+" 0%, "+typeColor2+" 100%);");

  ResultBoxes(strongAgainst,strongResult);
  ResultBoxes(superEffective,weakResult);
  ResultBoxes(notVeryEffective,notVeryResult);
  if( noEffect.length != 0)
  {
    document.querySelector("#no-effect-box").setAttribute("style","display:inherit;");
    ResultBoxes(noEffect,noEffectResult);
  }
  else
  {
      document.querySelector("#no-effect-box").setAttribute("style","display:none;");
  }
}

function ResultBoxes(typeArray, resultID)
{
  for(var n = 0; n < typeArray.length; n++)
  {
    resultID.appendChild(CreateButton(n,typeArray));
  }
}


CreateButtonRows();
