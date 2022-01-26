import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'
import Attribution from './Attribution'
import {TodoProvider} from './context/TodoContext'

function App() { 

  return (
    <TodoProvider>
      <div className='App bg-gray dark:bg-very-dark-blue font-josefinSans min-h-screen'>
        <Header />
        <Form />
        <Todos />
        <Attribution />
      </div>
    </TodoProvider>
  );
}

export default App;
