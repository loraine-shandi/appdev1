import './App.css'

export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}





// 1

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


//2

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }



