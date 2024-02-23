 const  products=[
 { id:1, name:'dell',prize:450000},
 { id:2, name:'hp',prize:480000},
 { id:3, name:'mac',prize:450000},
 { id:4, name:'lenovo',prize:550000}
 ]; 
//    map type 
//   const result=products.map(n=>n.name); 
  const result=products.map(n=>n.prize); 
//    console.log(result);
 
//  forEach 
//   products.forEach(n=>console.log(n.id));
//   products.forEach(n=>console.log(n.prize)); 
 
//   filter 
 
   const value=products.filter(p=>p.prize> 500000); 
    // console.log(value);

    //  find    

    const result2=products.find(p=>p.prize< 460000);
    //  console.log(result2); 

    //   reduce 
     
     const total=products.reduce((a,c)=>a+c.prize,0); 
      console.log(total);
