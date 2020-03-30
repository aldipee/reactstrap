import React, { Component } from 'react'
import {
  Navbar as NavigationsBar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Input,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'
import Styles from 'styled-components'
import { IoIosNotifications, IoMdHome, IoIosApps } from 'react-icons/io'

const Avatar = Styles('div')`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    background : #ffff;
`
const NavTop = Styles(NavigationsBar)`
    background-color : #f16c69 !important;
`
const NavSecond = Styles(NavigationsBar)`
    background-color : #f0f0f0 !important;
    height : 60px;
    display : flex;
    align-items : center;
    padding : 0px 20px 0px 20px;
    box-shadow : 1px 1px 10px rgba(0,0,0,0.4);
`
const SearchBar = Styles(Input)`    
    border-radius : 18px;
    background-color : rgba(255,255,255,0.3);
    border : none;
    color : #fff;
    &&::placeholder {
        color: #fff;
    }
    &&:focus{
        background-color : rgba(255,255,255,0.3);
        outline : none !important;
    }
`

const BarOneItem = Styles(NavItem)`
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 10px 0px 10px;
`
const Dropdown = Styles(DropdownToggle)`
    color : #fff;
`
const HeaderSecondsItem = Styles(NavItem)`
    display : flex;
    justify-content : center;
    align-items : center;
`

export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavTop color="dark">
          <Container>
            <NavbarBrand>Test</NavbarBrand>
            <NavbarToggler>
              <Collapse isOpen={true}>
                <Nav className="ml-auto">
                  <BarOneItem>
                    <SearchBar type="text" placeholder="Search ..." />
                  </BarOneItem>
                  <BarOneItem>
                    <IoIosNotifications color="#fff" size="30px" />
                  </BarOneItem>
                  <BarOneItem>
                    <Avatar></Avatar>
                  </BarOneItem>
                </Nav>
              </Collapse>
            </NavbarToggler>
          </Container>
        </NavTop>
        <NavSecond>
          <Nav>
            <NavItem>
              <HeaderSecondsItem>
                <IoMdHome />
                Dashboard
              </HeaderSecondsItem>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <Dropdown nav>Management</Dropdown>
              <DropdownMenu right>
                <DropdownItem>Management Users</DropdownItem>
                <DropdownItem>Management Schedules</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <HeaderSecondsItem>
                <IoIosApps />
                Reservations
              </HeaderSecondsItem>
            </NavItem>
          </Nav>
        </NavSecond>
      </>
    )
  }
}
