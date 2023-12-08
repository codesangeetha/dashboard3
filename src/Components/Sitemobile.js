import React from "react";
import { useNavigate } from "react-router-dom";
export default function Site() {

    const [arr, setArr] = React.useState([]);
    let navigate = useNavigate();


    React.useEffect(() => {
        fetchData();
        // const intervalId = setInterval(fetchData, 1000);
    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/products/type/mobile")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }

    function gotoProdPage(id) {
        navigate(`/productpage/${id}`);

    }

    function getResult() {
        const result = arr.map((item) => {

            let tick = "";
            if (item.ratingCount > 5000) {
                tick = <img className="tickImg-class" src="https://thumbs.dreamstime.com/b/tick-sign-check-mark-vector-symbol-icon-design-beautiful-illustration-isolated-white-background-92237500.jpg" />
            }

            return (

                <div>
                    <div>
                        {tick}
                    </div>
                    <div className="margin-class">

                        <div onClick={() => { gotoProdPage(item.id); }}>
                            <img className="img-class" src={item.imageUrl} />
                        </div>
                        <div className="name-class">
                            {item.name.substring(0, 24)}...
                        </div>
                        <div className="brand-class">
                            {item.brand}
                        </div>
                        <div className="price-class">
                            ₹ {item.price}
                        </div>
                        <div className="oldprice-class">
                            ₹{item.oldPrice}
                        </div>
                        <div className="rating-class">
                            {item.rating}/5
                        </div>
                        <div className="ratingcount-class">
                            ({item.ratingCount})
                        </div>
                        <div>
                            {item.budgetPhone}
                        </div>

                    </div>
                </div>
            )
        });
        return result
    }


    function toCartpage() {
        navigate(`/cart`)
    }
    function toCheckoutpage() {
        navigate(`/checkoutpage`)
    }



    return (
        <div>
            <div className="display-class">
                {getResult()}
            </div>

            <div onClick={toCartpage}>
                Cart
            </div>
            <div onClick={toCheckoutpage}>
                Checkout
            </div>
        </div>
    )
}