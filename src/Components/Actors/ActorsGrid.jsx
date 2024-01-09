import ActorCard from "./ActorCard";
import { FadeIn, FlexGrid } from "../Common/FlexGrid";
import ImgNotFound from "../../assets/imgNotFound.png"

export default function ActorsGrid({ person }) {
    return (
        <FadeIn>
            <FlexGrid>
                {person.map(data => (<ActorCard key={data.person.id}
                    name={data.person.name}
                    image={data.person.image ? data.person.image.medium : ImgNotFound}
                    country={data.person.country ? data.person.country.name : null}
                    gender={data.person.gender}
                    birthday={data.person.birthday}
                    deathday={data.person.deathday}
                />))}
            </FlexGrid>
        </FadeIn>
    )
}
