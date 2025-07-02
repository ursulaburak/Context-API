import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { content } from "./data";
import Viewer from "./components/viewer/Viewer";

function App() {
  const [list, setList] = useState(content);
  const [activeFolderId, setActiveFolderId] = useState("1");
  const [backFolderId, setBackFolderId] = useState(null)
  const changeFolder = (id) => {
    setActiveFolderId(id);
    setParentFolderId(activeFolderId);
  };

  return <>
  <Viewer 
    backFolderId={}
    activeFolderId={activeFolderId} 
    list={list} 
    changeFolder={changeFolder}


export default App
