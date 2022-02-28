import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Content />
      <Content />
      <Content />
      <Content2 />
      <Content />
    </div>
  );
}


function Content(){

  return(
    <div>
      <p>Hello from Content component</p>
    </div>
  )
}
function Content2(){

  return(
    <div>
      <p>Hello from Content2 component</p>
    </div>
  )
}
export default App;
