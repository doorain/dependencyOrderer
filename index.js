var orderFactory = require('./orderFactory');
var testData = require('./testData')



var runOrderFactor = function(){
  console.log(orderFactory(testData.testA));
  console.log(orderFactory(testData.testB));
  console.log(orderFactory(testData.testC));
  console.log(orderFactory(testData.testD));

}
runOrderFactor();
