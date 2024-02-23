 class Vehical{ 
       constructor(name,prize){ 
            this.name=name; 
             this.prize=prize;
       }
 }; 
 
  
  class Ven extends Vehical{ 
     constructor(name,prize,seat)
    { super(name,prize);
         this.seat=seat;
     }
  }
  