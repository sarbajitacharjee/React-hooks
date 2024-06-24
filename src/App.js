/* eslint-disable no-unused-vars */
import React from 'react'
import ReactHook from './components/React-hooks.js'
import { useContext } from 'react'
import { AppContext } from './components/CreateContext.jsx'
import Reducer from './components/Reducer.js'
const App = () => {
  // const user = useContext(AppContext)

  return (
    <>
    <ReactHook />
    <Reducer/>

    {/* <div>
      <h1>
        {user.name}
      </h1>
    </div>    */}
   
    </>
  )
}

export default App
