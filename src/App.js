import "./App.css";
import List from "./components/List";
import { useReducer , useState , useEffect } from "react";
const Products = [
  { id: 1, count: 0 , item : 0 },
  { id: 2, count: 0 , item : 0 },
  { id: 3, count: 0 , item : 0 },
  { id: 4, count: 0 , item : 0 },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    case "DEC":
      return state.map((item) => {
        if(item.count === 0 ) return item
         if (item.id === action.id) {
          return { ...item, count: item.count -1 };
        }
        return item;
      });

      case "DEL" : 
       return state.filter((todo) => {
        if (todo.id !== action.palyLoard.id) {
          return { ...todo };
        }
      });

      case "refetch" : return [...state , ...action.arr]

      case "setZero" :  return  state.map(item => {
         return {...item , count : 0}
      })
      
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, Products);
  const [count , setCount] = useState(0)
  useEffect(()=>{
    let cnt = 0 ;
    state.forEach((item) => {
      if(item.count != 0) cnt += 1
    })
    setCount(cnt)
  },[state])
  return (
    <div className="container">
      <div className="counter-container">
        <div className="Top_nav">
          <h1>{count}</h1>
          <p className="heading">Items</p>
        </div>
        <div className="nav_button">
          <button onClick={()=>{
            dispatch({type : "setZero"})
          }}
          className = "reset"
          > set all zero </button>
          <button 
          className="refetch"
          onClick={()=>{
            if(state.length === 0 ){
              dispatch({type : "refetch" , arr : Products})
            }
          }}
           >Re-fetch</button>
        </div>
        <div className="poduct List">
          {state.map((elm) => {
            return <List key={elm.id} obj={elm} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
