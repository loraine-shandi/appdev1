import { useState } from 'react'
import './App.css'
import UsersFetch from './UsersFetch'
import PostFetchAsync from './PostsFetchAsync'
import TodosFetchAxios from './TodosFetchAxios'

function App() {
  

  return (
    <>
      {/* <UsersFetch/> */}
      {/* <PostFetchAsync/> */}
      <TodosFetchAxios/>
    </>
  )
}

export default App
