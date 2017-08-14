var testData = {};

// Test Data and Solutions
//
testData.testA = [ "KittenService: CamelCaser", "CamelCaser: " ]
testData.resultsA = "CamelCaser, KittenService";
// Should return "CamelCaser, KittenService"
  testData.testB = [
    "KittenService: ",
    "Leetmeme: Cyberportal",
    "Cyberportal: Ice",
    "CamelCaser: KittenService",
    "Fraudstream: ",
    "Ice: "
  ];
// Should return "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"

  testData.testC =[
    "1: ",
    "4: 3",
    "3: 2",
    "5: 1",
    "6: 4",
    "2: "
  ];
// Should return '1, 2, 3, 4, 5, 6'


  testData.testD =[
    "KittenService: ",
    "Leetmeme: Cyberportal",
    "Cyberportal: Ice",
    "CamelCaser: KittenService",
    "Fraudstream: ",
    "Ice: Leetmeme"
  ];
// Should Reject


module.exports = testData;
