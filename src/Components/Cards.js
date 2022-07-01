import React from 'react'

const Cards = ({carData}) => {
   
    return (
        <>
        
            <div className='Main'>
              
                
                {carData.map((currElem)=>{
                    let {id,Name,Prize,Cardes,image}=currElem;
                    return(
                        <div className='cardMain'>
                            <div className='cardNo'><h2>{id}</h2></div>
                            <section className='carHead'><h1>{Name}</h1></section>
                            <section className='carDes'><p>{Cardes}</p></section>
                            <div className='Image'><img src={image}></img></div>
                            <div className='carPrize'><h3>Prize:{Prize}croreRs </h3></div>
                            <div className='Button'><button>Race now</button></div>
                        </div>)

                })}
                
                

            </div>
        </>
    )
}

export default Cards