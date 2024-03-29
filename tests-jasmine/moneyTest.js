import {formatCurrency} from '../scripts/utils/money.js';

if(formatCurrency(2095)==='20.95'){

  console.log('passed')
}else{
  console.log('failed');
}

if(formatCurrency(0)==='0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

describe('test suite :formatCurrency',()=>{
 it('convents cents into dollars',()=>{
  expect(formatCurrency(2095)).toEqual('20.95');
 });

})