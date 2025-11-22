import './App.css'

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}






// export default function App() {
//   return (
//     <>
//       <Avatar />
//     </>
//   )
// }

// function Avatar() {
//   const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const description = 'Gregorio Y. Zara';

//   return (
//     <img
//       className="avatar"
//       src={avatar}
//       alt={description}
//     />
//   );
// }


