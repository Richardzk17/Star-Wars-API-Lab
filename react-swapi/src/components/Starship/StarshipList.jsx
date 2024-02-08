import './starship.css'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllStarShips } from '../../services/sw-api'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarShips()
      setStarshipList(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <div className="starship-list">
      <h1>Starship List</h1>
        {starshipList.map((starship, idx) => (
          <li className='ship' key={idx}>
            <Link to={`/starship/${starship.url.substring(32, starship.url.length - 1)}`}>{starship.name}</Link>
          </li>
        ))}
    </div>
  )
}

export default StarshipList
