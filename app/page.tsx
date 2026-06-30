import Category from '@/components/Category'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ShopByBrands from '@/components/ShopByBrand'
import TrendingProducts from '@/components/TrendingProducts'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <Container>
        <HomeBanner />
        <Category />
        <TrendingProducts />
        <ShopByBrands />
    </Container>
  )
}

export default Home
