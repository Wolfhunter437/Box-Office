import { useState } from 'react';
import { searchForShows, searchForPeople } from './../Api/tvmaze';
import SearchForm from '../Components/SearchForm';
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

        if (apiData) {
            return apiData[0].show?
            apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>):
            apiData.map((data) => <div key={data.person.id}>{data.person.name}</div>)
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
