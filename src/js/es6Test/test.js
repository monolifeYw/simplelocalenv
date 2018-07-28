'use strict';

 (function () {


  if(true) {

    let block = 'block';
    for (let i = 0; i < 10; i++) {
      console.log('block');
    }
    // console.log(i) // undefined
    let obj = {
      a: function () {
        console.log(block); // block
      }
    }

    obj.a();

    const PI = 3.14;
    let numObj = {
      test: 'test'
    }
    let arr = [1,2,3,4];
    const referenceConst = numObj;
    let referenceLet = numObj;
    numObj.test = 'abcdefg';
    console.log('referenceConst : ', referenceConst.test);
    console.log('referenceLet : ', referenceLet.test);

    const numArr = arr;
    arr[0] = 9;
    console.log('numArr', numArr);

  }

 })();