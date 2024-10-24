import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className='sm:mx-8 md:mx-20 lg:mx-40'>
        <Header></Header>
        <div className="">
          <Blogs></Blogs>
        </div>
      </div>
    </>
  )
}

export default App
