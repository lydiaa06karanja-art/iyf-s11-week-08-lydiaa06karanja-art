import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Card from './components/Card';
import Layout from './components/Layout';
import Counter from './Counter';
import Toggle from './Toggle';
import UserForm from './Userform';
import EventExamples from './EventExamples';
import ContactForm from './ContactForm';
import TodoList from './TodoList';
function Greeting({ name }) {
  return <h2>Hello, {name} </h2>
  
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 },
    { id: 3, title: "Third Post", likes: 0 }
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

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

            <Card title="Task 16.1: useState Exercises">
              <Counter />
              <Toggle />
              <UserForm />
            </Card>

            <Card title="Task 16.2: Handling Events">
              <EventExamples />
              <ContactForm />
            </Card>

            <Card title="Task 16.3: State with Arrays & Objects">
              <TodoList />
            </Card>

            {/* NEW LIFTED STATE CARD */}
            <Card title="Task 16.4: Lifting State Up">
              <Stats totalPosts={posts.length} totalLikes={totalLikes} />
              <PostList posts={posts} onLike={handleLike} />
            </Card>

            <Button text="Create New Post" variant="primary" />
            <Button text="Cancel" variant="secondary" />
          </main>
        </div>
      </div>
    </Layout>
  );
}

// Child receives data via props
function Stats({ totalPosts, totalLikes }) {
  return (
    <div className="stats">
      <span>{totalPosts} posts</span>
      <span>{totalLikes} total likes</span>
    </div>
  );
}

// Child receives data and callback
function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
}

function PostCard({ post, onLike }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <button onClick={onLike}>
        ❤️ {post.likes}
      </button>
    </div>
  );
}

export default App;
