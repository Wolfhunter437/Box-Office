import styled from 'styled-components';
import { FadeIn } from '../Common/FlexGrid';

export default function Details({ status, premiered, network }) {
  return (
    <FadeIn>
      <DetailsWrapper>
        <p>Status: {status}</p>
        <p>Premiered: {premiered} {!!network && `on ${network.name}`}</p>
      </DetailsWrapper>
    </FadeIn>
  )
}


const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;