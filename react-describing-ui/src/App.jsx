import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <>
        <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    </>
  );
}


export default function Gallery() {
   return (
    <section>
      <h1>Amazing scientists</h1>
      <p>This is my first React component.</p>
      <App/>
      <App/>
      <App/>
    </section>
  );

}
