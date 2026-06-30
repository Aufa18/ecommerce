import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
        <Container>
            <FooterTop />
            <div>
                <div>
                    <Logo />
                    <p>
                        Discover curated furniture collections at Ecommerce, blending style and comfort to elevate your living spaces.
                    </p>
                    <SocialMedia />
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
