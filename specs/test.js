describe('Order Factory', function() {

  it('is an object', function() {
    expect(typeof orderFactory).toBe('function');
  });

describe('errors when', function() {
    it('given a string', function() {
      expect(function() { new orderFactory('a'); }).toThrow();
    });

    it('array contains numbers', function() {
      expect(function() { new orderFactory([1,2]); }).toThrow();
    });

    it('array contains object', function() {
      expect(function() { new orderFactory([{a:'b'},{a:'b'}]); }).toThrow();
    });
  });

  describe('should throw error', function() {
    it('from infinite loop', function () {
      expect(function () {
        var orderFactory = orderFactory(['a:b', 'b:a']);
				orderFactory.install();
      }).toThrow('cicular reference');
    });
  });

  describe('examples', function() {
    it('expects the first to function', function(){
      var input = ["KittenService: CamelCaser","CamelCaser: "
      ];
      expect(new orderFactory(input)).toEqual('CamelCaser, KittenService');
    });

    it('expects the second to function', function() {
      var input = [
        "KittenService: ",
        "Leetmeme: Cyberportal",
        "Cyberportal: Ice",
        "CamelCaser: KittenService",
        "Fraudstream: Leetmeme",
        "Ice: "
      ];
      expect(new orderFactory(input)).toMatch('KittenService, Ice, Cyberportal, Letmeme, CamelCaser, Fraudstream');
    });
  });
});
