import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light style={{backgroundColor:'lightblue'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://www.intelligentvc.co.uk/wp-content/uploads/2015/11/animated-email.gif'
              height='60'
              alt=''
            />
            SHOW-HIDE
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
