import { useState } from 'react'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import About from './Components/About'


function App() {
  // const [text, setText] = useState("")

  // const onChange = (event) => {
  //   setText(event.target.value);
  // }

  return (
    <>
      <Navbar />
      {/* <Textform /> */}
      <About />
    </>
  )
}

export default App