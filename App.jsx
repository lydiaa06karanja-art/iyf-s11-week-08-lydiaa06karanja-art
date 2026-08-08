import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Card from './components/Card';
import Layout from './components/Layout';
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
    <Layout> 
      <div className="app">
        <div className="main-layout">
          <Sidebar />
          <main>
            <h2>Welcome to CommunityHub</h2>
            <Card title="Exercise 1: Greetings">
              <Greeting name="Alice" />
              <Greeting name="Bob" />
              <Greeting name="Charlie" />
            </Card>

            <Button text="Create New Post" variant="primary" />
            <Button text="Cancel" variant="secondary" />
            <Card title="Exercise 3: Blog Posts">
              <PostList />
            </Card>
            
          </main>
        </div>
      </div>
    </Layout> 
  );
}
  );
}

export default App;
