import ShowCard from "./ShowCard";

export default function ShowGrid({ shows }) {
    return (
        <div>
            {shows.map(data => (<ShowCard key={data.show.id} 
            id={data.show.id} 
            name={data.show.name} 
            image={data.show.image ? data.show.image.medium : "/imgNotFound.png"} 
            summary={data.show.summary} />))}
        </div>
    )
}
