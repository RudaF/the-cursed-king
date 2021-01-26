class Kingdom {
  constructor() {
    this.churchHTMLNode = document.getElementById("church");
    this.populationHTMLNode = document.getElementById("population");
    this.armyHTMLNode = document.getElementById("army");
    this.economyHTMLNode = document.getElementById("economy");
    this.church = 50;
    this.population = 50;
    this.army = 50;
    this.economy = 50;
  }

  updateKingdom() {
    // Based on a decision the player makes
    // update the kindom status
  }

  printCurrentStatus() {
    this.churchHTMLNode.innerText = `Church: ${this.church}`;
    this.populationHTMLNode.innerText = `Population: ${this.population}`;
    this.armyHTMLNode.innerText = `Army: ${this.army}`;
    this.economyHTMLNode.innerText = `Economy: ${this.economy}`;
  }
}
