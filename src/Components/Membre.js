import React , { Fragment } from "react";

const membre = ({nom,age, children, hideName,handleChange  }) => {
    return (
        <Fragment>
        <h2 style={{
            backgroundColor : age < 20 ? 'yellow' : 'purple' ,
            color : age <20 ? 'black':'white'}}  > {nom.toUpperCase()} : {age} 
         </h2>
          <input value={nom} onChange={handleChange} type='text'/>
           <button onClick={hideName} > X </button>
        {children ? <p> {children}</p> : <Fragment/> }
        </Fragment>
        
    )
} 
export default membre