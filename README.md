# Todo List App (REACT)

## App Description

- Presentational components
- Custom Hooks for business logic
- Recoil applied (state management library)

## App Preview
<img src="app_preview.PNG" >  

## Recoil  
### Recoil ?  
- State management library
- Developed by facebook

### Install  
```npm install recoil```  

## Example  
### To connect recoil  
Normally, setup in 'index.js'  
```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";  // <----------------- import recoil  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RecoilRoot>  // <----------------- recoil setup
    <App />
  </RecoilRoot> 
  // </React.StrictMode>
);

```
### To create a file for managing global states  
Normally, 'src/store/index.js'  
```
import { atom } from "recoil";  // <----------------- atom  

export const textState = atom({
  key: "textState",  // <----------------- unique key for the state    
  default: "",  // <----------------- inital(default) value for the key     
});

```
### To use global states  
In each components, you may read and write the global states.  
The following example is in 'src/App.js'  
```
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { textState } from "./store";  // <----------------- to get global state

function App() {
  const [inputValue, setInputValue] = useRecoilState(textState);  // <----------------- to set getter/setter at a time  

  // To set recoil getter/setter separately....
  // const setText = useSetRecoilState(textState); //setter
  // const getText = useRecoilValue(textState); //getter

  return (
    <div className="App">
      <h2>Recoil ?</h2>
      <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />  // <----------------- to set value
      </div>
      <div>Result : {inputValue}</div>  // <----------------- to get value
    </div>
  );
}

export default App;

```


