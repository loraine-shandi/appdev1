import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Lin Lanying"
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>Adding styles</h1>
      <Profile />
    </div>
  );
}
