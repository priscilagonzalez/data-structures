var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

    var greatest = Object.keys(storage)[0];
    // define greatest variable
    //var greatest = 0;
   // if obj is empty
   if (Object.keys(storage).length > 0) {
   //if obj is not empty
     //iterate over the obj
     for (var key in storage) {
       if (parseInt(key) >= greatest) {
        greatest = parseInt(key);
       }
      }
      storage[greatest + 1] = value;
    } else {
      storage[0] = value;
   }
   console.log(storage);
  };

  someInstance.pop = function() {
    var greatest = Object.keys(storage)[0];

    for (var key in storage) {
      if (parseInt(key) > greatest) {
        greatest = parseInt(key);
      }
    }
    var result = storage[greatest];
    delete storage[greatest];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

