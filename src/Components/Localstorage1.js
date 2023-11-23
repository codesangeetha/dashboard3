import { useNavigate } from "react-router-dom";

export default function Localstorage1(){
    
    let navigate = useNavigate();

    function gotoFn(){
        navigate(`/localstorage2`);
    }

    let  rand = Math.floor(Math.random()*999)+101;
function saveFn(){
    localStorage.setItem("basketid", rand);
    console.log('saved');
}

    return(
        <div>
            <div>
                <button onClick={saveFn}>Save</button> <button onClick={gotoFn}>Go to next page</button>
            </div>
        </div>
    )
}