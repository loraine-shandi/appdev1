import React from 'react'
import Profile from './Profile'

function Gallery() {
  return (
    <div>
      <h1>Amazing Scientist</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px'}}>
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    </div>
  )
}

export default Gallery