export default function Localstorage2(){

    const basketId = localStorage.getItem('basketid');

    return(
        <div>
          Localstorage2 - {basketId}
        </div>
    )
}