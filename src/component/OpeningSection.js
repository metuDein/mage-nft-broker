import React from 'react'
import Slider from './Slider'
import Description from './Description '
import { useEffect, useState, useContext } from 'react'
import DataContext from '../context/DataContext'
import AnimateTab from './AnimateTab'

import axios from '../api/axios'



const OpeningSection = () => {
    const {bannerData} = useContext(DataContext);



    return (
        <section className='greet--tab'>
            <Slider bannerData={bannerData} />
            <Description />
        </section>
    )
}

export default OpeningSection