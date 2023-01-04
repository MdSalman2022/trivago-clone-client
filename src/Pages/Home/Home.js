import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBox from '../../components/SearchBox/SearchBox'

function Home() {
    return (
        <div className='mx-auto w-full'>
            <Banner />

            <SearchBox />
        </div>
    )
}

export default Home
