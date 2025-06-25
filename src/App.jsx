import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { content } from "./data";

function App() {
  const [list, setList] = useState(content);
  const [activeFolderId, setActiveFolderId] = useState("1")
  const changeFolder = (id) => {
    setActiveFolderId(id);
  };

  return <> 
    <Viewer activeFolderId={activeFolderId} list={list} changeFolder={changeFolder} />
    </>;
}

export default App;
