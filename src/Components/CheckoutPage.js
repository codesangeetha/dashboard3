
import React from "react";
import { useNavigate } from "react-router-dom";
export default function CheckoutPage() {

    let navigate = useNavigate();
    function placeorderFn(){
        navigate(`/placeorder`);
    }

    return (
        <div>

            <div className="display-class">
            <div className="cartimg-class" >
            itel P55 5G | Dimensity 6080
            </div>
            <div>
                1
            </div>
            <div  style={{ marginLeft: 10 }}>
                9999
            </div>
            </div>
            <div>
                Grand Total :
            </div>
            <div className="marginTop-class">
                Address:
            </div>

          <div className="display-class">

          <div>
           <div className="marginTop-class" >
                <input type="text" placeholder="Name"/>
            </div>
            <div className="marginTop-class">
                <input type="text"  placeholder="Country"/>
            </div>
            <div className="marginTop-class">
                <input type="text"  placeholder="Email"/>
            </div>
           </div>
 
           <div >
           <div className="marginTop-class">
                <input type="text"  placeholder="Qty"/>
            </div>
            <div className="marginTop-class">
                <input type="text" placeholder="Pin"/>
            </div>
            <div className="marginTop-class">
                <input type="text" placeholder="Place"/>
            </div>
           </div>
          </div>
      
      <div>
        <button onClick={placeorderFn} className="marginTop-class">Place Order</button>
      </div>


        </div>
    )
}