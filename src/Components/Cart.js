import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../services/fetchfns";
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
        const basketId = localStorage.getItem('basketid-mobile');
        fetch(`http://localhost:8080/api/cart/get-cart-items?basketId=${basketId}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }

    function crossFn(id) {
        const basketId = localStorage.getItem('basketid-mobile');
        const url = `http://localhost:8080/api/cart/remove-from-cart/${id}/${basketId}`;

        deleteData(url)
            .then(async data => {
                console.log(data);
                fetchData();

            });
    }

    function getResult() {
        console.log("getResult");
        console.log(arr);
        const result = arr.map((item) => {
            let sum = item.product.price * item.quantity;

            return (
                <div className="display-class">
                    <div>
                        <img className="cartimg-class" src={item.product.imageUrl} />
                    </div>
                    <div className="name-class" >
                        {item.product.name.substring(0, 20)}...
                    </div>
                    <div className="amount-class">
                        ₹ {item.product.price}
                    </div>
                    <div className="qty-class">
                        {item.quantity}
                    </div>
                    <div className="amount-class">

                        ₹{sum}
                    </div>
                    <div>
                        <img className="cross-class" onClick={() => { crossFn(item.product.id) }} src="https://as1.ftcdn.net/v2/jpg/01/45/20/02/1000_F_145200273_450ViYipr5uU3WIwqzwjsRDHYTMcUH9P.jpg" />
                    </div>


                </div>
            )
        });
        return result
    }

    function total() {
        let grandTotal = 0;

        for (let i = 0; i < arr.length; i++) {
            let sum = arr[i].quantity * arr[i].product.price;
            grandTotal = grandTotal + sum;
        }
        return grandTotal;
    }



    return (
        <div>
            <div className="display-class">
                <div className="headname-class" >
                    Name
                </div>
                <div className="headPrice-class">
                    Price
                </div>
                <div >
                    Qty
                </div>
                <div className="headTotal-class">
                    Total
                </div>
            </div>
            <hr></hr>
            <div >
                {getResult()}
            </div>
            <hr></hr>
            <div className="grand-class">
                Grand Total :₹ {total()}
            </div>

            <div className="checkout-class">
                <button onClick={checkoutFn} >Checkout</button>
            </div>

        </div>
    )
}



