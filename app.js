// Test Data and Solutions
//
// [ "KittenService: CamelCaser", "CamelCaser: " ]
// Should return "CamelCaser, KittenService"
//
// ["KittenService: ",
//  "Leetmeme: Cyberportal",
//  "Cyberportal: Ice",
//  "CamelCaser: KittenService",
//  "Fraudstream: Leetmeme",
//  "Ice: "
// ];
// Should return "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"
//
// [
//   "1: ",
//   "4: 3",
//   "3: 2",
//   "5: 1",
//   "6: 4",
//   "2: "
// ];
// Should return '1, 2, 3, 4, 5, 6'
//
// ["KittenService: ",
// "Leetmeme: Cyberportal",
// "Cyberportal: Ice",
// "CamelCaser: KittenService",
// "Fraudstream: ",
// "Ice: Leetmeme"]
// Should Reject


// I am going to first just Wrap this in a function called depOrderer
var depOrderer = function(array){

  var packages = [];
  // the final list in order
  var result = [];

  for (var i = 0; i < array.length; i ++) {
    //need to slipt the array upon iteration
  var arraySplit = array[i].split(':');

    var dependency = arraySplit[0];

    var value = arraySplit[1].trim();
    console.log(dependency)
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

  return(result);

};
