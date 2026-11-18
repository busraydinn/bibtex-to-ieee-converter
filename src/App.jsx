import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Converter from "./Converter"
function App() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <div className="min-h-screen bg-green-500">
          <Converter/>
        </div>
        <Footer/>
    </div>
  )
}

export default App