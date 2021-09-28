import React, {useState} from 'react';

const CartCounter = () => {
    const [count, setCount] = useState(1);
    function incremetHandler() {
        setCount(count+1);
    }
    function decrementHandler() {
        if(count>1){
            setCount(count-1);
        }
    }
    return (
        <>
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <button className="icon-btn" onClick={() => {decrementHandler()}}>
                    <i class="bi bi-dash"></i>
                </button>
                <strong className='mx-2'>{count}</strong>
                <button className="icon-btn" onClick={() => {incremetHandler()}}>
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        </>
    );
}

export default CartCounter;