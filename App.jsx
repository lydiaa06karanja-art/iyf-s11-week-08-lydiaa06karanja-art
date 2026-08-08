import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

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
