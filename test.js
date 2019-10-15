'use strict';
const chai = require('chai');
chai.should();
let SinglyLinkedList = require('./index');
describe('Singly Linked List', () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedList();
    [1, 2, 3, 4, 5].forEach(el => list.push(el));
  });
  describe('Instantiation', () => {
    it('Should return the instance of Singly Linked List', () => {
      (typeof list).should.be.equals('object');
      (typeof list.length).should.be.equals('number');
    });
    it('Instances and Values', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.get(1).value.should.be.equals(2);
      (list.get(-1) === null).should.be.equals(true);
      (list.get(10) === null).should.be.equals(true);
    });
    it('Push Method', () => {
      list.length.should.be.equals(5);
      (list.get(5) === null).should.be.equals(true);
      list.push(10);
      list.length.should.be.equals(6);
      list.get(5).value.should.be.equals(10);
    });
    it('Pop Method', () => {
      list.length.should.be.equals(5);
      list.get(4).value.should.be.equals(5);
      list.pop();
      list.length.should.be.equals(4);
      (list.get(4) === null).should.be.equals(true);
    });
    it('Shift Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.shift();
      list.length.should.be.equals(4);
      list.get(0).value.should.be.equals(2);
    });
    it('unShift Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.unShift(10);
      list.length.should.be.equals(6);
      list.get(0).value.should.be.equals(10);
    });
    it('Insert Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.insert(0, 10);
      list.length.should.be.equals(6);
      list.get(0).value.should.be.equals(10);
    });
    it('Set Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.set(0, 10);
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(10);
    });
    it('remove Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.remove(0);
      list.length.should.be.equals(4);
      list.get(0).value.should.be.equals(2);
    });
    it('reverse Method', () => {
      list.reverse();
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(5);
      list.get(1).value.should.be.equals(4);
      list.get(2).value.should.be.equals(3);
      list.get(3).value.should.be.equals(2);
      list.get(4).value.should.be.equals(1);
    });
  });
});
