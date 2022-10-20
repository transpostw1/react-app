import React from 'react'
import {Helmet} from "react-helmet"

import BgGlassmorphism from 'components/BgGlassmorphism/BgGlassmorphism'
import SectionHero from './SectionHero'
import rightImage from "../../images/transpost images/heros/trade-finance/Trade-Finance_Illustration.png"


const PageTradeFinance = () => {
  return (
    <div>
    <Helmet>
      <title>Trade Finance</title>
    </Helmet>
  {/* BG GLASS */}
    <BgGlassmorphism />
    <div className="container py-16 lg:py-28 ">
    {/* <div className="container py-16 lg:py-28 "> */}
    {/* TODO: EDIT HEADING */}
<SectionHero  heading="Trade Finance made easy" btnText="Get Started" rightImg={rightImage} subHeading="Take advantage of the eligibility assessment feature to get export and import finance within 24 hours."/>

    </div>
    </div>
  )
}

export default PageTradeFinance