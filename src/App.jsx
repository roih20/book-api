import Home from '@pages/Home.jsx'
import { Routes, Route } from 'react-router'
import SingleBook from '@pages/SingleBook.jsx'
import Bookmarks from '@pages/Bookmarks.jsx'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="book/:id" element={<SingleBook />} />
      <Route path="bookmarks" element={<Bookmarks />} />
    </Routes>
  )
}

export default App
