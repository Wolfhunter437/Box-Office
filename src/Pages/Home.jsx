import { useState } from 'react';
import { searchForShows, searchForPeople } from './../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorsGrid from '../Components/Actors/ActorsGrid';
import { TextCenter } from '../Components/Common/TextCenter';

export default function Home() {
    const [filter, setFilter] = useState(null)

    const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () => filter.searchOption === 'shows' ? searchForShows(filter.q) : searchForPeople(filter.q),
        enabled: !!filter,
        refetchOnWindowFocus: false
    })

    const onSearch = async (q, searchOption) => {
        setFilter({ q, searchOption })
    }

    const renderApiData = () => {
        if (apiDataError) {
            return <TextCenter>Error occured:{apiDataError.message}</TextCenter>
        }
        if (apiData?.length === 0) {
            return <TextCenter>No results found</TextCenter>
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
