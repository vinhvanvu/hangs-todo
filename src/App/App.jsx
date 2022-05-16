import Navbar from '../Components/Navbar/Navbar';
import TodoList from '../Components/TodoList/TodoList';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className='Navbar-TodoList-container'>
        <Navbar />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
