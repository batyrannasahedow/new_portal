import { useState, useRef, ChangeEvent, useEffect } from 'react';
import './App.css'
import HotTopics from './pages/HotTopics'
import LatestNews from './pages/LatestNews'
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios"
import { Root } from './Types/types';

function App(): JSX.Element {
  const [input, setInput] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [term, setTerm] = useState<string>("");
  const [headlines, setHeadlines] = useState<Root | null>(null)

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const getSearch = async (value: string) =>{
     await axios.get(`${apiUrl}everything?q=${value.trim()}&apiKey=${apiKey}`)
    .then(response => {
      setHeadlines(response.data)
    })
  }
  useEffect(()=>{
    getSearch("tr")
  },[])
  const getheadlines = async (city: string) =>{
    await axios.get(`${apiUrl}top-headlines?country=${city}&category=sports&apiKey=${apiKey}`)
   .then(response => {
    console.log(response.data)
   })
 }
  
  const onInputChange =(e: ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value.trim()
    setTerm(value)
    if(value === "") return
    getSearch(value)
}
const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
  if (e.key === 'Enter') {
    if (inputRef.current) {
      inputRef.current.blur();
      getheadlines(inputRef.current.value)
    }
    getSearch(term);
  }
 }

  return (
   <div>
    <nav className='nav'>
      <div>
      <p className='news'>News</p>
      <p className='portal'>Portal</p>
      </div>
      <div>
        {
        input? <input ref={inputRef} className='input-search' type="text" placeholder='Search news' value={term} onChange={onInputChange} onKeyDown={handleKeyPress}/>  :  <IoSearchOutline className='search-icon' onClick={()=> setInput(true)}/> 
        }
      <RxHamburgerMenu className='burger-icon' />
      </div>
    </nav>
    <HotTopics headlines={headlines} />
    <LatestNews headlines={headlines} />
    <div className='footer'>
    Copyright 2021 News Portal
    </div>
   </div>
  )
}

export default App
