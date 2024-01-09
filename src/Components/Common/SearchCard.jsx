import styled from 'styled-components';

export const SearchImgWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 40px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.mainColors.white};
  &:hover {
    border: 2px solid ${({ theme }) => theme.mainColors.magenta};
    transition: 0.4s ease-out;
  }
  &:not(hover){
    transition: 0.3s ease-out;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;
  h1 {
    margin: 10px 0;
    font-size: 21px;
    color: ${({ theme }) => theme.mainColors.white};
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.mainColors.white};
  }
`;