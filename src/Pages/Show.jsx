import { useParams} from 'react-router-dom';

export default function Show() {

    const {showId} = useParams();

  return (
    <div>
      Show Page for show {showId}
    </div>
  )
}
