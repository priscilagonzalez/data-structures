var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {

    // smallest = 0
    // storage[smallest + 1]
    // "1": a;lkdfj;aldkfa
    // "2": al;jfaldk;sj


    // duck

    // "3": a;lksdjfa;lsdkjf smallest (beginning)
    // "4": "whatever"
    // "5": heladlkjfa;
    // "6": a;dlsfjkal;kdfja


    // 0: "hello"


    // first smallest integer
    // last - largest interger
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //FIFO First in, first out

    // define smallest variable
    var greatest = Object.keys(storage)[0];
    // define greatest variable
    //var greatest = 0;
   // if obj is empty
   if (Object.keys(storage).length > 0) {
   //if obj is not empty
     //iterate over the obj
     for (var key in storage) {
       if (parseInt(key) > greatest) {
         greatest = parseInt(key);
       }
      }
      storage[greatest + 1] = value;
    } else {
      storage[greatest] = value;
   }

  };

  someInstance.dequeue = function() {
    // var keys = Object.keys(storage);
    // var min = keys[0];
    // for (var i = 0; i < keys.length; i++) {
    //   if (keys[i] < min) {
    //     min = keys[i];

    //  }
    // }
    // var result = storage[min];
    // delete storage[min];
    // return result;
//////////////////////////////////////////////////////
    var smallest = Object.keys(storage)[0];

    for (var key in storage) {
      if (parseInt(key) < smallest) {
        smallest = parseInt(key);
      }
    }
    var result = storage[smallest];
    delete storage[smallest];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
