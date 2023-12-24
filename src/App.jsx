import { useState } from 'react'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import Alert from './Components/Alert'
import About from './Components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter(
//   [
//     {
//       Path: "/", element: <Textform />,
//       children: [
//         { Path: "/", element: <Textform /> },
//         { Path: "/home", element: <About /> }
//       ]
//     }
//   ]
// )


function App() {

  const [alert, setAlert] = useState('')
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')

  const showAlert = (msg) => {
    setAlert({
      msg: msg
    })
    setTimeout(() => {
      setAlert('')
    }, 1500);
  }


  const enableDark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#192230'
      setText('Enable Light Mode')
      showAlert('Dark Mode has been enabled')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'White'
      setText('Enable Dark Mode')
      showAlert('Light Mode has been enabled')
    }
  }


  return (
    <>
    <BrowserRouter>
      <Navbar mode={mode} enableDark={enableDark} text={text} />
      {/* <RouterProvider router={router} /> */}
      <div>
        
         <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform mode={mode} />} />
          </Routes> 
        {/* <Alert alert={alert} /> */}
      </div>
      </BrowserRouter>
    </>
  )
}

export default App