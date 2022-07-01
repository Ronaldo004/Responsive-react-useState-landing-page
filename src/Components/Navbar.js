import React ,{useState} from 'react'
// import "./index.css"
// import "./media.css"


const Navbar = ({filterData,uniqueList}) => {
  
  let [burger ,setBurger]=useState(false)
  return (
    <>
    <div className={burger ?"hnav-resp Navbar":"Navbar"}>
        <div className='logo '><img src={"./logo and img/logo.png"}></img></div>
        <div className={burger ? "vclass-resp btn-grp":"btn-grp "}>
          {uniqueList.map((CurrElem)=>{
            return(
              <button className=" btn" onClick={()=>filterData(CurrElem)}>{CurrElem}</button>
            )

          })}
       
        
        
        </div>
        <div className='burger' onClick={()=>setBurger(!burger)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            
            
        </div>
    </div>
   
   
   
    
    </>
  )
}

export default Navbar