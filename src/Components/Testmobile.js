
import React from "react";
export default function Testmobile() {
    
    let name = "itel P55 5G | Dimensity 6080 | 12GB* RAM+128GB ROM with Memory Fusion| 50MP AI Dual Rear Camera| 5000mAh Battery | 2 Years Warranty | Galaxy Blue ";

    let firstTenChars = name.substring(0, 30);
    return (
       <div>
        
         <div className="test-class">
        {firstTenChars}...
        </div>
       </div>
    )
}


/* 

import React from "react";
export default function Productpage() {

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
                <div>
                    <div>
                        <img className="img-class" src={item.imageUrl} />
                    </div>
                    <div className="prodName-class">
                        {item.name}
                    </div>
                    <div className="blueFont-class">
                        Visit the {item.brand} Store
                    </div>

                    <div className="rateFlex-class">
                        <div className="rating2-class">
                            {item.rating}
                        </div>
                        <div className="blueFont-class">
                            {item.ratingCount}
                        </div>
                    </div>

                    <div className="blueFont-class">
                        ratings
                    </div>

                    <div className="bar-class">
                        <div className="bar2-class">
                            |
                        </div>
                        <div className="blueFont-class">
                            919 answered questions
                        </div>
                    </div>

                    <div className=" choiceFlex-class">
                        <div className="amazone-class">
                            Amazon's
                        </div>
                        <div className="choice-class">
                            Choice
                        </div>
                    </div>

                    <div className="forDisplay-class">
                    <div className="for-class">
                        for
                    </div>
                    <div className="blueGram-class">
                        "{item.brand}"
                    </div>
                    </div>

                    <div className="bought-class">
                        3k+ bought in past month
                    </div>
                    <div className="hr-class">
                        <hr></hr>
                    </div>
                    <div>
                        -20%   ₹ {item.price}
                    </div>
                    <div>
                        M.R.P.: ₹{item.oldPrice}
                    </div>

                </div>
            )
        });
        return result
    }

    return (
        <div>
            {getResult()}
        </div>
    )
} */