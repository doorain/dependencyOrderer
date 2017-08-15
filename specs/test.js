describe('Order Factory', function() {

  it('is an function', function() {
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

  describe('should error out', function() {
    it('on Infinite Loop', function () {
      expect(function () {
        var orderFactory = orderFactory(['a:b', 'b:a']);
				orderFactory.install();
      }).toThrow('Don\'t get stuck in a Cycle');
    });
  });

});
