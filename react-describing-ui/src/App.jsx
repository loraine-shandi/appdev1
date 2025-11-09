import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gallery from './components/Gallery';
import TodoList from './components/ToDoList';
import Profile from './components/Profile';
import PackingList from './components/PackingList';
import List from './components/List';
import Impure from './components/Impure';
import Pure from './components/Pure';
import RootComponent from './components/RootComponent';
// import './App.css'

// function Profile() {
//   return (
//     <>
//         <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     </>
//   );
// }


export default function App() {
   return (
    <>
      <section>
        <h1>Amazing scientists</h1>
        <p>This is my first React component.</p>
        <Profile/>
        <Profile/>
        <Profile/>
      </section>

      <Gallery/>
      <TodoList/>
      <Profile/>
      <PackingList/>
      <List/>

      <Impure/>
      <Pure/>


      <RootComponent/>
    </>
  );

}
