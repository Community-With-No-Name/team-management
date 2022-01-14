import React from "react";

const Container = ({children}) => {
    return (
         <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center mt-10 items-center overflow-y-scroll">
          {children}
        </div>
     );
}
 
export default Container;