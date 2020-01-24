const assert = require('chai').assert;
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;

describe('App', function() {
    it('returns hello', function() {
        assert.equal(sayHello(), 'hello');
    })

    it('should return type string', function() {
        let result = sayHello();

        assert.typeOf(result, 'string');
    })
     
    it('should return 10', function () {
        let result = addNumbers(5, 5);

        assert.equal(result, 10)
    })

})