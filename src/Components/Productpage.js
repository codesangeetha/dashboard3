import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { postData } from "../services/fetchfns";

export default function Productpage() {

    const [obj, setObj] = React.useState({});
    const { id } = useParams();
    let navigate = useNavigate();

    React.useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch(`http://localhost:8080/api/mobiles/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setObj(data);
            });
    }


    function cartFn() {
        const url = "http://localhost:8080/api/cart/add-to-cart";
        let basketId = localStorage.getItem('basketid');
        if(basketId === null){
            basketId = Math.floor(Math.random() * 999) + 101;
            localStorage.setItem("basketid", basketId);
        } 
        
        console.log('basketId', basketId);
        const postObj = {
            "mobileId": id,
            "quantity": 1,
            "basketId": basketId
        };

        postData(url, postObj)
            .then(async data => {
                navigate(`/cart`);
            });
    }

    return (

        <div className="display-class">
            <div>
                <img className="img2-class" src={obj.imageUrl} />
            </div>
            <div className="margin2-class">

                <div className="prodName-class">
                    {obj.name}
                </div>
                <div className="blueFont-class ">
                    {obj.brand}
                </div>
                <div className="blueFont-class ">
                    ₹{obj.price}
                </div>
                <div className="oldprice-class">
                    ₹{obj.oldPrice}
                </div>
                <div className="rating-class">
                    {obj.rating}/5
                </div>
                <div className="ratingcount-class">
                    ({obj.ratingCount})
                </div>
                <div className="button-class">
                    <button className="buy-class">Buy</button>
                    <button onClick={cartFn} className="cart-class">Add to cart</button>
                </div>
            </div>

        </div>
    )
}