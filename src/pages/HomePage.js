import React from 'react'
import Navbar from '../features/nav/Navbar'
import { Counter } from '../features/counter/Counter'
import Hero from '../features/hero-section/Hero'
import Trust from '../features/trust-section/Trust'
import Review from '../features/review-section/Review'
import CorePrincipleSection from '../features/core-principle-section/CorePrincipleSection'
import RxBlueprint from '../features/rx-section/RxBlueprint'
import Product from '../features/product-list/Product'
import GrowthTransition from '../features/growth-transition/GrowthTransition'
import ShoppingFeature from '../features/shopping-feature/ShoppingFeature'
import BeforeAfter from '../features/before-after/BeforeAfter'
import Media from '../features/media/Media'
import WhyTrust from '../features/why-trust/WhyTrust'



function HomePage() {
  return (

    <Navbar>
        <Hero/>
        <Trust/>
        <Review/>
        <CorePrincipleSection/>
        <RxBlueprint/>
        <Product/>
        <ShoppingFeature/>
        <GrowthTransition/>
        <BeforeAfter/>
        <Media/>
        <WhyTrust/>
    </Navbar>
  )
}

export default HomePage