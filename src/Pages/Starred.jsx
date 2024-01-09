import { getShowsByIds } from "../Api/tvmaze"
import ShowGrid from "../Components/Shows/ShowGrid";
import { useStarredShows } from "../Lib/StarredShows"
import { useQuery } from "@tanstack/react-query"
import {TextCenter} from '../Components/Common/TextCenter'

export default function Starred() {
  const [starredShowsIds] = useStarredShows()

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () => getShowsByIds(starredShowsIds).then(result => result.map(show => ({show}))),
    refetchOnWindowFocus: false
});

  if (starredShows?.length === 0) {
    return <TextCenter>No Shows are Starred</TextCenter>
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows}/>
  }

  if (starredShowsError) {
    return <TextCenter>Error occured: {starredShowsError.message}</TextCenter>
  }
  
  return (
    <TextCenter>
      Shows are still loading...
    </TextCenter>
  )
}
