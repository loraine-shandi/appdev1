import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AdminPanel() {
  return <h2>Welcome to the Admin Panel</h2>;
}

function LoginForm() {
  return <h2>Please log in to continue</h2>;
}

export default function App() {
  const isLoggedIn = false; 
  let content;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {content}
    </div>
  );
}
