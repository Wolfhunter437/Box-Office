import { getShowsByIds } from "../Api/tvmaze"
import ShowGrid from "../Components/Shows/ShowGrid";
import { useStarredShows } from "../Lib/StarredShows"
import { useQuery } from "@tanstack/react-query"

export default function Starred() {
  const [starredShowsIds] = useStarredShows()

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () => getShowsByIds(starredShowsIds).then(result => result.map(show => ({show}))),
    refetchOnWindowFocus: false
});

  if (starredShows?.length === 0) {
    return <div>No Shows are Starred</div>
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows}/>
  }

  if (starredShowsError) {
    return <div>Error occured: {starredShowsError.message}</div>
  }
  
  return (
    <div>
      Shows are still loading...
    </div>
  )
}
