/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import UseLayoutEffect from './UseLayoutEffect';

const initialState = 0 ;

const reducer = (state,action) => {

    if(action.type === "INCREMENT")
        return state + 1;
    if(action.type === "DECREMENT")
        {
            if(state === 0)
                return state;
            else
                return state - 1;            
        
        }
    if(action.type === "RESET")
        return 0;

}

export default function Reducer (){

    const [user ,dispatch] = useReducer(reducer,initialState)

    return (
        <>
        <div className='w-full h-96 flex flex-col justify-center items-center bg-amber-500'>
        <h1 className='text-5xl text-white mb-4 '>        REDUCER USED VALUE :-        {user}</h1>

            <div>
            <button className='p-4 bg-black text-white' onClick={() => dispatch({type:'INCREMENT'})}>INCREMENT</button>
            <button className='p-4 bg-black text-white' onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button>
            <button className='p-4 bg-black text-white' onClick={() => dispatch({type:'RESET'})}>RESET</button>
            </div>
        </div>

        <UseLayoutEffect/>
        </>
    )

} 