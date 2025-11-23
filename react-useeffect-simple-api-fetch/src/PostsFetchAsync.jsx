import { useEffect, useState } from 'react'


function PostFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
 // empty array → run once on component mount
  console.log(posts)


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            
            <h3>Title: {post.title}</h3> - Body: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default PostFetchAsync
