'use strict';
const chai = require('chai');
chai.should();
let SinglyLinkedList = require('./index');
describe('Javascript Sortings', () => {
  describe('Quick Sort', () => {
    it('returns the sorted array', () => {
      let str = quickSort([5, 4, 3, 2, 1]).toString();
      str.should.be.equals('1,2,3,4,5');
    });
    it('Throws error if no input array is provided', () => {
      try {
        quickSort();
      } catch (err) {
        (typeof err).should.be.equals('object');
        (typeof err.message).should.be.equals('string');
        err.message.should.be.equals('Array input is required');
      }
    });
  });
});
