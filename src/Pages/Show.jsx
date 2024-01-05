import { useParams, Link } from 'react-router-dom';
import { getShowById } from '../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import Cast from '../Components/Shows/Cast';

export default function Show() {
  const { showId } = useParams();
  // const {showData, showError} = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>
  }

  if (showData) {
    return <div>
      <Link to='/'>Back</Link>

      <ShowMainData
        image={showData.image}
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />
      </div>
      <div>
        <h2>Seasons: </h2>
        <Seasons seasons={showData._embedded.seasons} />
      </div>
      <div>
        <h2>Cast: </h2>
        <Cast cast={showData._embedded.cast} />
      </div>
    </div>
  }

  return (
    <div>
      Data is loading...
    </div>
  )
}
