import { useState } from 'react'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'


function App() {
  // const [text, setText] = useState("")

  // const onChange = (event) => {
  //   setText(event.target.value);
  // }

  return (
    <>
      <Navbar />
      <Textform />
    </>
  )
}

export default App