import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { reset,calc } from './Redux/reduxSlice'

function Calculator() {
    const[num,setNum] = useState('')
    const dispatch = useDispatch()

    const res = useSelector((state=>state.calculateReducer.calculate))
    console.log(res);
    
  return (
    <>
    <div className='p-5 rounded-4 border shadow border-danger border-2 p-5 '>
    <h2 className='text-danger text-center'>Calculator</h2>
        <div className='container'>
            <input placeholder='Enter a expression' value={num} type="text" onChange={(e)=>{setNum(e.target.value)}} className='my-3 form-control mx-2 border-dark border-2'/>
        </div>

            <div className='d-grid'>
            <button className='btn btn-danger' onClick={()=>{dispatch(calc(num))}}>Calculate</button>
            <button className='btn btn-success my-3' onClick={()=>{
                setNum('')
                dispatch(reset())
                }}>Reset</button>
            </div>
            <h5 className='my-3 text-center'>Result:{res}</h5>
        </div>
    </>
  )
}

export default Calculator