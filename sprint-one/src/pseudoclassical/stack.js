
var Stack = function() {
  this._storage = {};
  this._size = 0;
  };


Stack.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

Stack.prototype.size = function() {
  return this._size;
};

/*var Stack = function() {
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

Stack.prototype.pop = function() {
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
}*/