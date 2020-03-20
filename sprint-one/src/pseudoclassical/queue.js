var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
  };


Queue.prototype.enqueue = function(value) {
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function() {
  // This does some unnecessary work sometimes. Can you spot why?
  var result = this._storage[this._start];
  delete this._storage[this._start];

  this.size() && this._start++;

  return result;
};

Queue.prototype.size = function() {
  return this._end - this._start;
};

/*var Queue = function() {
this.storage = {};
};

Queue.prototype.enqueue = function (value) {
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
}

Queue.prototype.dequeue = function () {
  var smallest = Object.keys(this.storage)[0];

  for (var key in this.storage) {
    if (parseInt(key) < smallest) {
      smallest = parseInt(key);
    }
  }
  var result = this.storage[smallest];
  delete this.storage[smallest];
  return result;
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}*/

