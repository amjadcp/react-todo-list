import Todo from "./component/Todo";

const App =()=> {
  return (
   <section className="vh-100" style={{backgroundColor: "#e2d5de"}}>
       <h6 className="mb-3">Awesome Todo List</h6>
       <Todo/>
   </section>
    
  );
}

export default App;
