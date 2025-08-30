import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import GoodBy from './GoodBy';
import Age from './Age';
import Counter from './Counter';
import NameForm from './NameForm';

function App() {
  return (
    <div className='App'>
        <HelloWorld/>
        <GoodBy/>
        <Age name="Ali" age = {6}/>
        <Counter/><br></br>
        <NameForm/>

        
        
     
    </div>
  );
}

export default App;
