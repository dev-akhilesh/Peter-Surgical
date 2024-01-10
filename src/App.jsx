import { Box } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import { data } from "./data/data"
import { useEffect } from 'react';
import { getData } from './redux/action';
import MobileMenu from './components/MobileMenu';
import Sidebar from "./components/Sidebar"
import MainContent from './components/MainContent';
import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(data));
  }, [dispatch])
  return (
    <Box className="App" display={{ base: "block", xl: "flex" }}>
      <MobileMenu />
      <Sidebar />
      <MainContent />

    </Box>
  );
}

export default App;
