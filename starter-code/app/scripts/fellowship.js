console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {

  var middleEarth = document.createElement('section');
  middleEarth.setAttribute("id","middle-Earth");
  for (var i = 0; i < lands.length; i++){
    var article = document.createElement('article');
    middleEarth.appendChild(article);
    var h1 = document.createElement('h1');
    h1.textContent = lands[i];
    //sets the id
    h1.setAttribute("id", lands[i]);
    article.appendChild(h1);
    body.appendChild(middleEarth);
  }    
  console.log(middleEarth);

  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}
  makeMiddleEarth();

// Part 2

function makeHobbits() {

  var makeHobbits = document.createElement("ul");
  makeHobbits.setAttribute("id","makehobbits");
  for (var i = 0; i < hobbits.length; i++){
    var article = document.createElement("li");
    makehobbits.appendChild(article);
    article.textContent = hobbits[i];
    article.appendChild(h1);
    document.querySelector(articles);
    body.appendChild(makehobbits);

  }

    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

}

console.log(hobbits);

// Part 3


  function keepItSecretKeepItSafe() {

    var keepItSecretKeepItSafe = document.createElement("ul");
    keepItSecretKeepItSafe.setAttribute("id","keepItSecretKeepItSafe");
    for (var i = 0; i < safe.length; i++) {
      var article = document.createElement("li");
      keepItSecretKeepItSafe.appendChild(article);
      article.textContent = safe[i];
      article.appendChild (h1);
      document.querySelector(articles);
      body.appendChild(keepItSecretKeepItSafe);
  }
}
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo



// Part 4


function makeBuddies() {
  // create an aside tag
  var buddiesContainer = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  buddiesContainer.setAttribute("id","buddiesContainer");
  // attach an unordered list of the 'buddies' in the aside
  var buddylist = document.createElement("ul");

  //var buddies = document.createElement("li");
  //
  for (var i = 0; i < buddies.length; i++){
    //
    //console.log(buddies[i]);
    var aside = document.createElement("li");
      aside.textContent = buddies[i];
      aside.setAttribute("id", buddies[i]);
      buddylist.appendChild(aside);

  }

  buddiesContainer.appendChild(buddylist);
  // insert your aside as a child element of rivendell
   var Rivendell = document.getElementById("Rivendell");
   //console.log(Rivendell);

   Rivendell.appendChild(buddiesContainer);

  }
    makeBuddies();

// Part 5


function beautifulStranger() {

  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementById("Strider");
  strider.textContent = "Aragorn";
}

   beautifulStranger();
   

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}