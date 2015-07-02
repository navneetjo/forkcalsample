var cal=require('../src/cal');
var assert=require('assert');
var chai=require('chai');
/* var sumRes=cal.sum(2,4);
var subRes=cal.sub(7,4);
console.log(sumRes);
console.log(subRes); */
describe('Calculator',function(){
	describe('AddFunction',function(){
		it('It should add two numbers',function(){
		assert.equal('10',cal.sum(8,2));
		});
		it('It should give error',function(){
		assert.equal('11',cal.sum(8,2));
		});
	});
	describe('SubFunction',function(){
		it('It should subtract two numbers',function(){
		assert.equal('6',cal.sub(8,2));
		});
		it('It should give error',function(){
		assert.equal('11',cal.sub(8,2));
		});
	});
});