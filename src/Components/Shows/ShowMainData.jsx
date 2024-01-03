export default function ShowMainData({ image, name, rating, summary, genres }) {
    return (
        <div>
            <img src={image ? image.original : '/imgNotFound.png'} alt="" />
            <div>
                <h1>{name}</h1>
                <div>{rating.average || 'N/A'}</div>
                <div dangerouslySetInnerHTML={{ __html: summary }}></div>
                <div>Genres:
                    {genres.map(genres => (
                        <span key={genres}> {genres}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
