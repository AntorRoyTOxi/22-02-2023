 const data=[{ name:'antor kumar roy',village:'khangaon',age:23}]; 
//   console.log(data[0].name); 
 
 const products={ 
      count:5000, 
       data:[
         
        {id:1,prize:500000,model:'lenovo' },
        {id:2,prize:150000,model:'apple' }
       ]
 }; 
//   console.log(products.data[1].model); 
 const adress={ 
        city:'bangladesh', 
        name:'antor kumar roy',
         street:{ 
             thikana:{
                 first:'nani bari', 
                  second:'dadubari', 
                   third:'nijer bari'
             }  
         }
 }; 
 const adress2={ 
        city:'bangladesh', 
        name:'antor kumar roy',
         street:{ 
             thikana:{
                 first:'nani bari', 
                  second:'dadubari', 
                   third:'nijer bari'
             }  
         }
 }; 
   console.log(adress.street.thikana?.third)
   console.log(adress2.street.thikan?.thid)