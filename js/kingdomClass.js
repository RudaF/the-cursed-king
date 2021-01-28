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

  updateKingdom(effect) {
    this.church = Math.min(Math.max(this.church + effect[0], 0), 100);
    this.population = Math.min(Math.max(this.population + effect[1], 0), 100);
    this.army = Math.min(Math.max(this.army + effect[2], 0), 100);
    this.economy = Math.min(Math.max(this.economy + effect[3], 0), 100);
  }

  printCurrentStatus() {
    this.churchHTMLNode.innerText = `Church: ${this.church}`;
    this.populationHTMLNode.innerText = `Population: ${this.population}`;
    this.armyHTMLNode.innerText = `Army: ${this.army}`;
    this.economyHTMLNode.innerText = `Economy: ${this.economy}`;
  }

  isKingdomOver() {
    const status = [this.church, this.population, this.army, this.economy];
    return [status.indexOf(0), status.indexOf(100)];
  }
}
