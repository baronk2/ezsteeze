import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Gallery(props) {
  const quote1 = (
  <div>
    <h2>THE MOUNTAINS ARE CALLING</h2>
    <h1>DON'T LET THEM DOWN</h1>
  </div>
  );
  const quote2 = (
    <div>
      <h2>THERE ARE NO SHORTCUTS</h2>
      <h1>TO ANY PLACE WORTH GOING</h1>
    </div>
    );
  const quote3 = (
    <div>
      <h2>THERE IS NO SUCH THING</h2>
      <h1>AS TOO MUCH SNOW</h1>
    </div>
  )

  const [currQuote, setCurrQuote] = useState(quote1);
  const [currClass, setCurrClass] = useState("slider");
  
  
   function handleClick(event) {
     if (currClass === "slider") {
       setCurrClass("slider-2")
       setCurrQuote(quote2);
     } else if (currClass === "slider-2") {
          setCurrClass("slider-3"); 
          setCurrQuote(quote3); 
    } else {
       setCurrClass("slider");
       setCurrQuote(quote1);
     }
   }



  return (
    <div className={currClass}>
      <div>
        <div className="quotes">
          {currQuote}
          <NavLink className="book-now" to="/appointment">BOOK NOW!</NavLink>
        </div>
        <div className="buttons">
          <div onClick={handleClick} className="prev" aria-label="previous image">{"<"}</div>
          <div onClick={handleClick} className="next" aria-label="next image">{">"}</div>
        </div>
      </div>
    </div>
  );
}

// On click of "next" OR "prev", render the other component



/* NOTE: the gallery images are just background images defined in index.css.
       So, the components that render for each image should have different classNames which
       in CSS are associated with different background images.    
*/