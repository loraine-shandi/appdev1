import { useEffect, useState } from 'react'


function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Fetch data when the component first loads
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
        
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
        setError("Failed to fetch users");

      });
  }, []); // empty array → run once on component mount
  console.log(users)


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default UsersFetch
