import { useParams, Link } from 'react-router-dom';
import { getShowById } from '../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import Cast from '../Components/Shows/Cast';
import { TextCenter } from '../Components/Common/TextCenter';
import { FadeIn } from '../Components/Common/FlexGrid';

export default function Show() {
  const { showId } = useParams();
  // const {showData, showError} = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <TextCenter>We have an error: {showError.message}</TextCenter>
  }

  if (showData) {
    return <FadeIn>
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to='/'>Back</Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons: </h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast: </h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    </FadeIn>
  }

  return (
    <TextCenter>
      Data is loading...
    </TextCenter>
  )
}


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.white};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.mainColors.magenta};
      transition: 0.4s ease-out;
    }
    &:not(hover){
      transition: 0.3s ease-out;
    }
  }
`;

const ShowPageWrapper = styled.div`
  color: ${({ theme }) => theme.mainColors.white};
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;