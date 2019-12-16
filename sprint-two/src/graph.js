

// Instantiate a new graph
var Graph = function() {
  // create a graph object - node
  this.graph = {


  };
  // create value-key
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {};
  this.graph[node].value = node;
  this.graph[node].edge = [];
  //this.graph.edge = []
  // console.log(JSON.stringify(this.graph));
  // console.log(this.graph);
  //this.graph


};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graph[node] === node) {
    return true;
  } else {
    return false
  }

};

/*
var graph = {
  {"1": 1, edge: [3]},
  {"2": 2, edge: []},
  {"3": 3, edge: [1]},
  {"4": 4, edge: []},
  {"5": 5, edge: []},
}

fromNode


*/

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.graph[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // for loop iterating over the edge array
  if (this.graph[fromNode].edge.length > 0) {
    return true;
  }
    // compare it to the toNode array and see if there is a match
    // return true

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge.push(toNode);
  console.log(this.graph[fromNode]);
  this.graph[toNode].edge.push(fromNode);
  console.log(this.graph[toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // iterate over the fromNode Array
  // find a match and delete from array
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


