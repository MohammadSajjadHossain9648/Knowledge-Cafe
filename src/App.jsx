import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className='sm:mx-8 md:mx-16 lg:mx-28'>
        <Header></Header>
        <div className="grid grid-cols-custom gap-4">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
