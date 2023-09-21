import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import "./home.css"
import NavBar from '../components/NavBar';
import Features from '../components/features/Features';

const Home = () => {
  return (
    <div className='home'>
    <NavBar />
    <Features/>
    </div>
  )
}

export default Home