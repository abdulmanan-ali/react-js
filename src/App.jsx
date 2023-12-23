import { useState } from 'react'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import Alert from './Components/Alert'
import About from './Components/About'


function App() {

  const [alert, setAlert] = useState("null")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')

  const showAlert = (msg) => {
    setAlert({
      msg: msg
    })
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
      <Navbar mode={mode} enableDark={enableDark} text={text} />
      <Alert alert={alert} />
      <Textform mode={mode} />
      {/* <About /> */}
    </>
  )
}

export default App