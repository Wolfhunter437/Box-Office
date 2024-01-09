import { useState } from 'react';
import { useSearchStr } from '../Lib/SearchStr';
import styled from 'styled-components';

export default function SearchForm({ onSearch }) {

  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value)
  }

  const onRadioChange = ev => {
    setSearchOption(ev.target.value)
  }

  const onSubmit = (ev) => {
    ev.preventDefault();

    onSearch(searchStr, searchOption);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <SearchInput type="text" value={searchStr} onChange={onSearchInputChange} placeholder='Search' />
        <RadiosWrapper>
          <StyledRadio>
            Shows
            <input type="radio" name='search-option' value={'shows'} checked={searchOption === 'shows'} onChange={onRadioChange} />
            <span />
          </StyledRadio>
          <StyledRadio>
            Actors
            <input type="radio" name='search-option' value={'actors'} checked={searchOption === 'actors'} onChange={onRadioChange} />
            <span />
          </StyledRadio>
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type='submit'>Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  )
}


const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.magenta};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
  color: ${({ theme }) => theme.mainColors.white};
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.magenta};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.magenta};
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.magenta};
  }
`;