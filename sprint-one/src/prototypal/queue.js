var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  return someInstance;
  };

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function() {
  // This does some unnecessary work sometimes. Can you spot why?
  var result = this._storage[this._start];
  delete this._storage[this._start];

  this.size() && this._start++;

  return result;
};

queueMethods.size = function() {
  return this._end - this._start;
};

/*var Queue = function() {
  var obj = Object.create(queueMethods);
  obj["storage"] = {};
  return obj;

};

var queueMethods = {

  enqueue: function (value) {
    var greatest = Object.keys(this.storage)[0];
      if (Object.keys(this.storage).length > 0) {
        for (var key in this.storage) {
          if (parseInt(key) > greatest) {
            greatest = parseInt(key);
          }
        }
        this.storage[greatest + 1] = value;
      } else {
        this.storage[0] = value;
      }
  },
  dequeue: function () {
    var smallest = Object.keys(this.storage)[0];

    for (var key in this.storage) {
      if (parseInt(key) < smallest) {
        smallest = parseInt(key);
      }
    }
    var result = this.storage[smallest];
    delete this.storage[smallest];
    return result;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};*/



