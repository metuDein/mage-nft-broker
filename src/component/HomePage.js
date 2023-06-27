import React from 'react'
import CheckApi from './CheckApi'
import OpeningSection from './OpeningSection'
import HelpTab from './HelpTab'
import QuickTut from './QuickTut'
import Trending from './Trending'

const HomePage = ({bannerData}) => {
  return (
    <>
    <OpeningSection bannerData={bannerData}/>
    <h1 className='title'> Trending</h1>
    <Trending />
    <h1 className='title'>Collections</h1>
    <CheckApi bannerData={bannerData}/>
    <h1 className='title'> Features </h1>
    <HelpTab />
    <h1 className='title'> Quick Intro</h1>
    <QuickTut />
    </>
  )
}

export default HomePage