/* eslint-disable no-unused-vars */
import React from 'react'
import ReactHook from './components/React-hooks.js'
import { useContext } from 'react'
import { AppContext } from './components/CreateContext.js'
import Reducer from './components/Reducer.js'
import UseRefHook from './components/UseRefHook'


const App = () => {
  // const user = useContext(AppContext)

  return (
    <>
    <ReactHook />
    <Reducer/>
    <UseRefHook/>

    {/* <div>
      <h1>
        {user.name}
      </h1>
    </div>    */}
   
    </>
  )
}

export default App
