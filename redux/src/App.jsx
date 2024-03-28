import "./App.css";
import AddTodo from "./components/todos";
import Todos from "./components/addTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <Todos />
            <AddTodo />
         </div>
      </Provider>
   );
}

export default App;
