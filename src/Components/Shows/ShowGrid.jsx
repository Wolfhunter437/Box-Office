import ShowCard from "./ShowCard";
import { useStarredShows } from "../../Lib/StarredShows";
import { FadeIn, FlexGrid } from "../Common/FlexGrid";
import ImageNotFound from "../../assets/imgNotFound.png"

export default function ShowGrid({ shows }) {
    const [starredShows, dispatchStarred] = useStarredShows()

    console.log(starredShows)

    const onStarMeClick = (showId) => {
        const isStarred = starredShows.includes(showId)

        if (isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId })
        }
        else {
            dispatchStarred({ type: 'STAR', showId })
        }
    }
    return (
        <FadeIn>
            <FlexGrid>
                {shows.map(data => (<ShowCard key={data.show.id}
                    id={data.show.id}
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : ImageNotFound}
                    summary={data.show.summary}
                    onStarMeClick={onStarMeClick}
                    isStarred={starredShows.includes(data.show.id)} />))}
            </FlexGrid>
        </FadeIn>
    )
}
