// const numbers=[2,3,5,6,7]; 
//   const daobuled=[]; 
//     for(const num of numbers){ 
//           const daoble=num*2; 
//             daobuled.push(daoble);
//     };
//      console.log(daobuled); 
 

const numbers=[2,3,5,6,7]; 
  function add(num){ 
       return num*2;
  }; 
   const result=numbers.map(add); 
    // console.log(result); 
     
       const add2=n=>n*2; 
         const  value=numbers.map(add2); 
          console.log(value);
        //    console.log(numbers.map(n=>n*n));

         const student=['antor','shanto','rudro','prokrity' ]; 
           const  studentResult=student.map(frids=>frids.length);
            // console.log(studentResult); 
                //    console.log(student.map(n=>n[0].length));