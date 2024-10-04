import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Brand from './pages/brand/Brand'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Blogs from './pages/blogs/Blogs'
import Design from './pages/design/Design'
import Education from './pages/education/Education'
import Testimonials from './pages/testimonials/Testimonials'
import Faq from './pages/faq/Faq'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Brand />
      <Services />
      <Projects />
      <Blogs />
      <Design />
      <Education />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
