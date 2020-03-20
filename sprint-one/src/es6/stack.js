class Stack {
  constructor() {

    this._storage = {};
    this._size = 0;
  }

  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    this._size && this._size--;
    var result = this._storage[this._size];

    delete this._storage[this._size];

    return result;
  }

  size() {
    return this._size;
  }
  }

/*class Stack {
  constructor() {
    this.storage = {};
  }

  push (value) {
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

  pop () {
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

  size() {
    return Object.keys(this.storage).length;
  }

}*/