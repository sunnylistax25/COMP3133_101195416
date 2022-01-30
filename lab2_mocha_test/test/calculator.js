var calculator = require('../app/calculator');
var assert = require('chai').assert;

describe('add', () =>{
    function makeTest(x,y){
        let expected = x + y;
        let failure = x+(y+1);

        it(`Adding ${x} to ${y} gives ${expected}`, ()=>{
            assert.equal(calculator.add(x,y), expected)
        })

        it(`Adding ${x} to ${y} should give ${failure} `, ()=>{
            assert.equal(calculator.add(x,y), failure)
        })      

    }
    makeTest(5,2)  
})

describe('sub', () =>{
    function makeTest(x,y){
        let expected = x - y;
        let failure = x-0;

        it(`Substracting ${y} from ${x} gives ${expected}`, ()=>{
            assert.equal(calculator.sub(x,y), expected)
        })

        it(`Substracting ${y} from ${x} should give ${failure} `, ()=>{
            assert.equal(calculator.sub(x,y), failure)
        })      

    }
    makeTest(5,2)  
})
describe('mul', () =>{
    function makeTest(x,y){
        let expected = x * y;
        let failure = x*(y+2);

        it(`Multiplying ${x} with ${y} gives ${expected}`, ()=>{
            assert.equal(calculator.mul(x,y), expected)
        })

        it(`Multiplying ${x} with ${y} gives ${failure} `, ()=>{
            assert.equal(calculator.mul(x,y), failure)
        })      

    }
    makeTest(5,2)  
})
describe('div', () =>{
    function makeTest(x,y){
        let expected = x / y;
        let failure = x/5;

        it(`Dividing ${x} with ${y} gives ${expected}`, ()=>{
            assert.equal(calculator.div(x,y), expected)
        })

        it(`Dividing ${x} to ${y} should give ${failure} `, ()=>{
            assert.equal(calculator.div(x,y), failure)
        })      

    }
    makeTest(10,2)  
})