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
          <Button text="Create New Post" />
          
          <PostCard />
          <PostCard />
          <PostCard />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
