class Lecture{ 
    constructor(name,subjects){ 
         this.name=name; 
          this.subjects=subjects; 
        
    } 
}; 
 const topanSir=new Lecture('topan','physics'); 
  console.log(topanSir);
    const aktarSir=new Lecture('aktarsir','physics'); 
     console.log(aktarSir);
      const kobirSir=new Lecture('humayunKabir','chemistry'); 
       console.log(kobirSir);


        class Teacher{ 
             constructor(name,schoolName){ 
                 this.name=name; 
                  this.schoolName=schoolName;
             }
        }; 
         const biology=new Teacher('anowarSir','Thakurgaon govt college');
          console.log(biology);