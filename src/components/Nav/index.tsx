import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
} from 'bloomer';
import * as React from 'react';
import styled from 'styled-components';

import { connect } from '../../fluent';

const StyledNavbarItem = styled(NavbarItem)`
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  border-bottom: ${props => props.isActive ? '2px solid silver' : ''};
`;

export default connect().with(({ state, signals }) => ({
  locale: state.locale,
  page: state.page,
  localeChanged: signals.localeChanged,
  navbarMenuActive: state.navbarMenuActive,
  navburgerClicked: signals.navburgerClicked,
})).toClass(
  props =>
    class App extends React.PureComponent<typeof props> {
      render () {
        const {
          locale,
          page,
          localeChanged,
          navbarMenuActive,
          navburgerClicked,
        } = this.props;

        return (
          <Navbar className="is-transparent">
            <NavbarBrand>
              <NavbarItem>APP</NavbarItem>
              <NavbarBurger
                isActive={navbarMenuActive}
                onClick={() => navburgerClicked()}
              />
            </NavbarBrand>
            <NavbarMenu isActive={navbarMenuActive}>
              <NavbarStart>
                <StyledNavbarItem href="/search" isActive={page === 'search'}>
                  Search
                </StyledNavbarItem>
                <StyledNavbarItem href="/read" isActive={page === 'read'}>
                  Read
                </StyledNavbarItem>
                <StyledNavbarItem href="/help" isActive={page === 'help'}>
                  Help
                </StyledNavbarItem>
                <StyledNavbarItem href="/history" isActive={page === 'history'}>
                  History
                </StyledNavbarItem>
              </NavbarStart>
              <NavbarEnd>
                <StyledNavbarItem href="/config" isActive={page === 'config'}>
                  Config
                </StyledNavbarItem>
                <NavbarItem hasDropdown={true} isHoverable={true}>
                  <NavbarLink>{locale}</NavbarLink>
                  <NavbarDropdown>
                    <NavbarItem onClick={() => localeChanged({ locale: 'en' })}>
                      English
                    </NavbarItem>
                    <NavbarItem onClick={() => localeChanged({ locale: 'pl' })}>
                      Polski
                    </NavbarItem>
                  </NavbarDropdown>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Navbar>
        );
      }
    },
);
