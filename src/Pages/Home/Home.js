import React from 'react'
import Article from '../../components/Article/Article'
import Banner from '../../components/Banner/Banner'
import Destination from '../../components/Destination/Destination'
import Recent from '../../components/Recent/Recent'
import SearchBox from '../../components/SearchBox/SearchBox'

function Home() {
    return (
        <div className='mx-auto w-full'>
            <Banner />
            <SearchBox />
            <Recent />
            <Destination />
            <Article />
        </div>
    )
}

export default Home
