import ActorCard from "./ActorCard";

export default function ActorsGrid({ person }) {
    return (
        <div>
            {person.map(data => (<ActorCard key={data.person.id} 
            name={data.person.name} 
            image={data.person.image ? data.person.image.medium : "/imgNotFound.png"} 
            country={data.person.country ? data.person.country.name : null}
            gender={data.person.gender} 
            birthday={data.person.birthday}
            deathday={data.person.deathday} 
             />))}
        </div>
    )
}
