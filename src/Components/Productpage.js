import React from "react"

export default function Productpage() {

    const [obj, setObj] = React.useState({});

    React.useEffect(() => {
        fetchData();

    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/mobiles/654a0262a3a8ec1cdcd52038")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setObj(data);
            });
    }

    return (
        <div>
            
              <img src={obj.imageUrl}/>
            
        </div>
    )
}