/* eslint-disable no-unused-vars */
import React from 'react';
import ReactHook from './components/React-hooks.js';
import Reducer from './components/Reducer.js';
import UseRefHook from './components/UseRefHook';
import Callback from './components/Callback.js';
import Memo from './components/Memo.js';
import FilterMemo from './components/Filtermemo.js';
import MyHook from './components/MyHook.js';
import { MyProvider } from './components/CreateContext.js';

const App = () => {
  return (
    <>
    <MyProvider> {/* Use AppProvider to wrap components that need access to context */}
    
    <ReactHook />
      <MyHook />
      <Reducer />
      <UseRefHook />
      <Callback />
      <Memo />
      <FilterMemo />

    </MyProvider>
      </>
  );
}

export default App;
