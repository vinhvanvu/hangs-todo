import Navbar from '../Components/Navbar/Navbar';
import TodoList from '../Components/TodoList/TodoList';
import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
