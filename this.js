 class Person{ 
      constructor(name,age) { 
         this.name=name; 
          this.age=age;
         
      };
     number(){ 
         console.log(`tumi vlo na ${this.name}`)
     }
 }; 
  const result=new Person('kodom ali',23); 
//    console.log(result);
    result.number();