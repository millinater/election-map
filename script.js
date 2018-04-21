var makePolitician = function(ownName, partyColor)
{
  var politician = {};
  politician.name = ownName;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.announce = function()
  {
    console.log("Candidate is " + this.name);
  };

  politician.announce();

    politician.tallyUpTotalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};

  return politician;
};

var harry = makePolitician("Harry Potter", [132, 17, 11]);
  console.log(harry.partyColor);


var ron = makePolitician("Ron Weasley",[245, 141, 136]);
  console.log(ron.partyColor);

harry.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

harry.electionResults [9] = 1;
harry.electionResults [4] = 17;
harry.electionResults [43] = 11;

var setStateResults = function(state){
      theStates[state].winner = null;
      if (harry.electionResults[state] > ron.electionResults[state]){

        theStates[state].winner = harry;

      } else if (harry.electionResults[state] < ron.electionResults[state]){
        theStates[state].winner = ron;
      }

  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];

  var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

candidate1Name.innerText = harry.name;
candidate2Name.innerText = ron.name;

candidate1Results.innerText = harry.electionResults[state];
candidate2Results.innerText = ron.electionResults[state];

if (theStates[state].winner === null){
  winnersName.innerText = "DRAW";
} else {
  winnersName.innerText = theStates[state].winner.name;
}

  var stateWinner = theStates[state].winner;
    if (stateWinner !== null){
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11, 32, 57];
    }
};

ron.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

ron.electionResults [9] = 28;
ron.electionResults [4] = 38;
ron.electionResults [43] = 27;

harry.tallyUpTotalVotes();
ron.tallyUpTotalVotes();

var updateHarryArray = harry.electionResults [43];
console.log("Harry=" + updateHarryArray);

var updateRonArray = ron.electionResults [43];
console.log("Ron=" + updateRonArray);

console.log("Harry Potter's Total votes= " + harry.totalVotes);
console.log("Ron Weasley's Total votes= " + ron.totalVotes);

var winner = this.totalVotes;
if (harry.totalVotes > ron.totalVotes)
{
  winner = harry.name;
  console.log("Harry Potter wins!");
} else if (harry.totalVotes < ron.totalVotes)
{
  winner = ron.name;
  console.log("Ron Weasley wins!");
} else if (harry.totalVotes === ron.totalVotes)
{
  winner = "DRAW";
  console.log("Harry Potter and Ron Weasley tie!");
}

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = harry.name;
row.children[1].innerText = harry.totalVotes;
row.children[2].innerText = ron.name;
row.children[3].innerText = ron.totalVotes;
row.children[5].innerText = winner;
