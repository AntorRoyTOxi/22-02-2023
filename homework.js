const array = [1, 3, 5, 7, 9];
console.log(array.map((n) => n + 1));

const numbers = [33, 50, 79, 78, 90, 101, 30];
console.log(numbers.filter((n) => n % 10 === 0));
console.log(numbers.find((n) => n % 10 === 0));

 
//  practice problem 2 
 const instructor=[ 
     { name:'Nodi',age:28,position:'senior'},
     { name:'Akil',age:26,position:'junior'},
     { name:'Shobuj',age:30,position:'senior'}
 ]; 
  console.log(instructor.filter(n=>n.position ==='senior'));

    const people=[
          { name:'Meena',age:20},
          { name:'Rina',age:15},
          { name:'Suchorita',age:22}
    ]; 
     const result=people.reduce((p,a)=>p+a.age,0)
     console.log(`The output will be ${result}`);
