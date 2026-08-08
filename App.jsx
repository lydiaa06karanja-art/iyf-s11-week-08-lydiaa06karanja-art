import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function PostList() {
  const posts = [
    { id: 1, title: "First Post", excerpt: "Learn the basics of React props", author: "John Doe", date: "August 7,2026" },
    { id: 2, title: "Second Post", excerpt: "Understanding .map() and keys", author: "Jane Smith", date: "August 7,2026" },
    { id: 3, title: "Third Post", excerpt: "Building reusable components", author: "Bob Lee", date: "August 7, 2026" },
  ];

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="app">
      <Header />
      
      <div className="main-layout">
        <Sidebar />
        
  <main>
  <h2>Welcome to CommunityHub</h2>
  
  {/* Passing Props */}
  <h3>Exercise 1: Greetings</h3>
  <Greeting name="Alice" />
  <Greeting name="Bob" />
  <Greeting name="Charlie" />

  {/* Button with props */}
  <Button text="Create New Post" variant="primary" />
  <Button text="Cancel" variant="secondary" />

  {/* Dynamic PostCards with .map() */}
  <h3>Exercise 3: Blog Posts</h3>
  <PostList />
</main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
