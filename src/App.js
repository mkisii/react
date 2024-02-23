import logo from './logo.svg';
import './App.css';
import AppProduct from './components/Product';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';

function App() {
  return (
    <div className="items-center flex-col mt-20 flex bg-gray-300">
      <header className="">
        <h2 className="text-3xl font-bold m-4">Simple Product Filter</h2>
      </header>
      {/* <AppProduct/>
      // UseState Hooks
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/> */}
      {/* useEffect Hooks */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      <MouseContainer/>
    </div>
  );
}

export default App;
