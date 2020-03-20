class Queue {
  constructor() {

    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue(value) {
    this._storage[this._end++] = value;
  }

  dequeue() {
    var result = this._storage[this._start];
    delete this._storage[this._start];

    this.size() && this._start++;

    return result;
  }

  size() {
    return this._end - this._start;
  }
  }

/*class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
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
  };
  dequeue() {
    var smallest = Object.keys(this.storage)[0];

    for (var key in this.storage) {
      if (parseInt(key) < smallest) {
        smallest = parseInt(key);
      }
    }
    var result = this.storage[smallest];
    delete this.storage[smallest];
    return result;
  };
  size() {
    return Object.keys(this.storage).length;
  };

}*/
