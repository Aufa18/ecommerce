import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteIcon from './FavoriteIcon'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Header = async () => {
    const user = await currentUser();
    console.log(user, "user");

  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between text-lightColor">
        {/* Logo */}
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>

        {/* NavButton */}
        <HeaderMenu />

        {/* NavAdmin */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteIcon />
          <ClerkLoaded>
            <Show when="signed-out">
              {!user && <SignIn />}
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header
