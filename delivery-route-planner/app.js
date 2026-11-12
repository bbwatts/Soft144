class graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addLocation(location) {
    if (this.adjacencyList.has(location)) {
      return false;
    }
    this.adjacencyList.set(location, []);
    return true;
  }

  addroad(locationA, locationB) {
    // Check if both locations exist in the graph
    if (
      !this.adjacencyList.has(locationA) ||
      !this.adjacencyList.has(locationB)
    ) {
      return false;
    }

    console.log(this.adjacencyList.get(locationA));
    //avoid duplicate roads
    if (this.adjacencyList.get(locationA).includes(locationB)) {
      this.adjacencyList.get(locationA).push(locationB);
    }
    if (!this.adjacencyList.get(locationB).includes(locationA)) {
      this.adjacencyList.get(locationB).push(locationA);
    }
    return true;
  }
}

const deliveryGraph = new graph();
deliveryGraph.addLocation("Warehouse");
deliveryGraph.addLocation("Downtown");
deliveryGraph.addLocation("Airport");
deliveryGraph.addroad("Warehouse", "Downtown");
deliveryGraph.addroad("Warehouse", "Airport");

console.log(deliveryGraph);
