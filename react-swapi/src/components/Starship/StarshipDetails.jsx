import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getStarShipId } from "../../services/sw-api";
import './starship.css'


const StarshipDetails = () => {
    const [starShipDetail, setStarShipDetail] = useState({})
    let { starshipId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getStarShipId(starshipId)
            setStarShipDetail(res)
        }
        fetchData()
    }, [starshipId])

    return (
        <>
            {!starShipDetail.name ? 'Loading...' : <div className='detail-main'>
                <div className='starship-detail-card'>
                    <h2> Name: {starShipDetail.name} </h2>
                    <h2> Model: {starShipDetail.model}</h2>
                    <Link to='/' > Return </Link>
                </div>
            </div>}
        </>
    );
}

export default StarshipDetails;