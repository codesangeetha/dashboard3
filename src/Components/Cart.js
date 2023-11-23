import React from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {

    let navigate = useNavigate();

    function checkoutFn() {
        navigate(`/checkoutpage`)

    }

    const [arr, setArr] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        const basketId = localStorage.getItem('basketid');
        fetch(`http://localhost:8080/api/cart/get-cart-items?basketId=${basketId}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }


    function getResult() {
        const result = arr.map((item) => {

            return (
                <div className="display-class">
                    <div>
                        <img className="cartimg-class" src={item.mobile.imageUrl} />
                    </div>
                    <div className="name-class" >
                        {item.mobile.name.substring(0, 20)}...
                    </div>
                    <div className="amount-class">
                        ₹ {item.mobile.price}
                    </div>
                    <div className="qty-class">
                        {item.quantity}
                    </div>
                    <div className="amount-class">
                        {item.mobile.price}
                    </div>


                </div>
            )
        });
        return result
    }

    function total() {
        let grandTotal = 0;

        for (let i = 0; i < arr.length; i++) {
            let sum = arr[i].quantity * arr[i].mobile.price;
            grandTotal = grandTotal + sum;
        }
        return grandTotal;
    }



    return (
        <div>
            <div >
                {getResult()}
            </div>
            <hr></hr>
            <div>
                Grand Total : {total()}
            </div>

            <button onClick={checkoutFn} className="marginTop-class">Checkout</button>

        </div>
    )
}



