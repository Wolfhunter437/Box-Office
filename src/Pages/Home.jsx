import { useState } from 'react';
import { searchForShows, searchForPeople } from './../Api/tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorsGrid from '../Components/Actors/ActorsGrid';
export default function Home() {

    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);
    

    const onSearch = async (searchStr, searchOption) => {

        try {
            setApiDataError(null);

            if(searchOption==='shows'){
                const result = await searchForShows(searchStr);
                setApiData(result);
            }
            else if(searchOption==='actors'){
                const result = await searchForPeople(searchStr);
                setApiData(result);
            }
        }
        catch (error) {
            setApiDataError(error);
        }

        console.log(apiData)
    }

    const renderApiData = () => {
        if (apiDataError) {
            return <div>Error occured:{apiDataError.message}</div>
        }
        if(apiData?.length === 0){
            return <div>No results found</div>
        }
        if (apiData) {
            return apiData[0].show ? (<ShowGrid shows={apiData} />) : (<ActorsGrid person={apiData} />)
        }
        return null;
    }

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            <div>{renderApiData()}</div>
        </div>
    )
}
