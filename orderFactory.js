//module exported as orderFactory

 var orderFactory = function(array){
    var packages = {};
    // the final list in order
    var result = [];
    for (var i = 0; i < array.length; i ++) {
      //need to slipt the array upon iteration
      var splitArray = array[i].split(':');
      var dep = splitArray[0].trim();
      var value = splitArray[1].trim();
      packages[dep] = value;
    }
  // Search down packages dependencies
    for(var dependency in packages) {
     if(packages.hasOwnProperty(dependency)) {
         try {
           //give seenList empty array
           seenList(dependency,[]);
         }
        catch (err) {
          return err;
        }
      }
    }

    function seenList(dependency,depth) {
     if(!packages.hasOwnProperty(dependency)) {
       return;
     }
     if (depth.indexOf(packages[dependency]) >= 0) {
      throw "Don\'t get stuck in a Cycle";
     }
     if (packages[dependency] !== '') {
      depth.push(dependency);
      seenList(packages[dependency],depth);
     }
     result.push(dependency);
      // delete unwanted dependency
      delete packages[dependency];
    }

  // console.log(result.join(", "))
    return(result.join(", "));
  };

module.exports = orderFactory;
