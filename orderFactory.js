//module exported as orderFactory

var orderFactory = {};
// I am going to first just Wrap this in a function called
  orderFactory = function(array){

    var packages = [];
    // the final list in order
    var result = [];

    for (var i = 0; i < array.length; i ++) {
      //need to slipt the array upon iteration
      var arraySplit = array[i].split(':');
      var dependency = arraySplit[0];
      var value = arraySplit[1].trim();
      packages[dependency] = value;
    }

  // Search down packages dependencies
    for(dependency in packages) {
     if (packages.hasOwnProperty(dependency)) {
        seen(dependency);
      }
    }

    function seen(dependency) {
     if (!packages.hasOwnProperty(dependency)) {
       return false;
     }
     if (packages[dependency] !== '') {
        seen(packages[dependency]);
     }
      result.push(dependency);
      // delete unwanted dependency
      delete packages[dependency];
    }

  console.log(result)
    // return(result.join(", "));

  };

module.exports = orderFactory;
