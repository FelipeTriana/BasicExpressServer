var chai = require('chai');
var assert = chai.assert;
var funct = require('../functionForTest');

//Mocha nos permite la ejecucion de pruebas 
//Chai es una libreria que permite la validacion de el resultado que obtenemos vs el resultado esperado

describe('Testing assert function: ', function() { //describe nos permite agrupar un conjunto de pruebas con algo en comun
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() { // el it es la prueba que valida algo especifico
       result = funct.addTest(1,1);  //Le enviamos parametros a la funcion
       assert.equal(result, 2); //Se le pasa el resultado y el valor esperado
    });
  });
})