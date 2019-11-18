export class Game {
  constructor(city1, city2, city3, city4, city5, city6, city7, city8, city9, city10) {
    this.playerCity = city2;
    this.cities = [city1, city2, city3, city4, city5, city6, city7, city8, city9, city10];
    this.cityCards = [];
    this.flightOptions = [];
    this.eventCards = ["jetCard", "adrenelineCard"]
    this.eventCard = "";
    this.isGreenCured = false;
    this.isRedCured = false;
    this.actionsLeft = 2;
    this.greenResearchPoints = 0;
    this.redReasearchPoints = 0;

  }
}

export class Portland {
  constructor (){
    this.name = "Portland"
    this.cubes = 0;
    this.color = "Red";
    this.driveOption = [Denver, SanFransico];
  }
}
export class SanFransico {
  constructor (){
    this.name = "San Fransico"
    this.cubes = 0;
    this.color = "Red";
    this.driveOption = [Portland, La]
  }
}
export class La {
  constructor (){
    this.name = "Los Angeles"
    this.cubes = 0;
    this.color = "Red";
    this.driveOption = [SanFransico, Dallas]
  }
}
export class Dallas {
  constructor (){
    this.name = "Dallas"
    this.cubes = 0;
    this.color = "Red";
    this.driveOption = [Denver, La, Atlanta]
  }
}
export class Denver {
  constructor (){
    this.name = "Denver"
    this.cubes = 0;
    this.color = "Red";
    this.driveOption = [Chicago, Dallas, Portland]
  }
}
export class Chicago {
  constructor (){
    this.name = "Chicago"
    this.cubes = 0;
    this.color = "Green";
    this.driveOption = [Denver, Boston, Ny]
  }
}
export class Ny {
  constructor (){
    this.name = "New York"
    this.cubes = 0;
    this.color = "Green";
    this.driveOption = [Chicago, Boston]
  }
}
export class Boston {
  constructor (){
    this.name = "Boston"
    this.cubes = 0;
    this.color = "Green";
    this.driveOption = [Chicago, Ny, Atlanta]
  }
}
export class Miami {
  constructor (){
    this.name = "Miami"
    this.cubes = 0;
    this.color = "Green";
    this.driveOption = [Atlanta, Dallas]
  }
}
export class Atlanta {
  constructor (){
    this.name = "Atlanta"
    this.cubes = 0;
    this.color = "Green";
    this.driveOption = [Dallas, Miami, Boston];
    this.isResearch = true


  }
}



Game.prototype.useEventCard = function () {
  if (this.eventCard === "jetCard"){
    this.flightOptions = [Portland, SanFransico, La, Dallas, Denver, Chicago, Ny, Boston, Miami, Atlanta];
    this.eventCard = ""
  }else if (this.eventCard === "adrenelineCard"){
    this.actionsLeft ++;
    this.eventCard = ""
  }
};


Game.prototype.move = function (clickedCity) {
// Clicked city is determined in the front end drop down
  this.playerCity = clickedCity;
  this.actionsLeft --;
};

Game.prototype.pass = function () {
  this.actionsLeft = 0
};

Game.prototype.pickDiseaseCity = function() {
  let i =  Math.floor(Math.random() * 10);
  this.cities[i].cubes = 4
}

Game.prototype.removeCube = function() {
  if (this.playerCity.cubes > 0) {
    if ((this.playerCity.color === "Red") && (this.isRedCured === true)){
      this.playerCity.cubes = 0;

    }
    else if ((this.playerCity.color === "Green") && (this.isGreenCured === true)) {
      this.playerCity.cubes = 0


    } else {
      this.playerCity.cubes --;


    }
    this.actionsLeft --;
  }
}

Game.prototype.startGame = function (game){
  game.pickDiseaseCity();
  game.pickDiseaseCity();
  game.pickDiseaseCity();
  game.pickDiseaseCity();
  let randomCity1 =  Math.floor(Math.random() * 10);
  let randomCity2 =  Math.floor(Math.random() * 10);
  let randomEventCard =  Math.floor(Math.random() * 2);
  this.eventCard = eventCards[randomEventCard];
  this.cityCards = [this.cities[randomCity1], this.cities[randomCity2]];
  this.flightOptions = [this.cities[randomCity1], this.cities[randomCity2]];
}
