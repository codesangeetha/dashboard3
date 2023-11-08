import React from "react";
export default function Site() {

    const [arr, setArr] = React.useState([]);

    React.useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1000);
    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/mobiles")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }

    function getResult() {
        const result = arr.map((item) => {
            return (
                <div className="margin-class">
                    <div>
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
            )
        });
        return result
    }

    return (
        <div className="display-class">
            {getResult()}
        </div>
    )
}