var orderFactory = require('./orderFactory');
var testData = require('./testData')



var runner = function(){
  console.log(orderFactory(testData.testA));
  console.log(orderFactory(testData.testB));
  console.log(orderFactory(testData.testC));

}
runner();


// console.log(orderFactory(testData.testA));
// console.log(orderFactory(testData.testB));
// console.log(orderFactory(testData.testC));
