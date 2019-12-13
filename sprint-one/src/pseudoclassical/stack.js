var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};





Stack.prototype.push = function(value) {

  var greatest = Object.keys(this.storage)[0];

  if (Object.keys(this.storage).length > 0) {
    for (var key in this.storage)  {
      if (parseInt(key) >= greatest) {
        greatest = parseInt(key);
     }
    }
    this.storage[greatest + 1] = value;
  } else {
    this.storage[0] = value;
  }

}

Stack.prototype.pop = function(value) {
  var greatest = Object.keys(this.storage)[0];
  if (Object.keys(this.storage).length > 0) {
    for (var key in this.storage) {
      if (parseInt(key) > greatest) {
        greatest = parseInt(key);
      }
    }
    var result = this.storage[greatest];
    delete this.storage[greatest];
    return result;
  }


}

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}