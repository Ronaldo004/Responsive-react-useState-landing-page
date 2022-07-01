import React,{ useState }  from 'react';
import Navbar from './Navbar'
import Cards from './Cards';
import Car from './Carsapi';
import "./index.css"
import "./media.css"
import "./cards.css"
import "./mediacard.css"

//js





const Mainstore = () => {
let uniquelist =["Home",
 ...new Set(
    Car.map((curelem)=>{
      return curelem.catagory;
    })
  )]
  console.log(uniquelist)
  let[carApi,setCarsapi]=useState(Car);
  let[uniqueL,setUniquel]=useState(uniquelist);  


let filter=(category)=>{
  if(category==="Home"){
    return setCarsapi(Car);
   
  }
  let filterlist=Car.filter((curelem)=>{
    return curelem.catagory===category;


  });
  setCarsapi(filterlist)
  

};



  
 
  return (
  <>
  
  <Navbar filterData={filter} uniqueList={uniqueL} />
  
  <Cards carData={carApi}/>
  </>  
  
  )
}

export default Mainstore