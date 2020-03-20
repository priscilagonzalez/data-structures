var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance._storage = {};
  someInstance._size = 0;

  return someInstance;
  };

var stackMethods = {};


stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

stackMethods.size = function() {
  return this._size;
};

/*var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push: function(value) {

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

  },
  pop: function(value) {
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


  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};*/


