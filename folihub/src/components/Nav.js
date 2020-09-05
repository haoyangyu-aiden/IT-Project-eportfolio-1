import React, { Component } from "react";
import Welcome from "react-welcome-page";
import {colorPlan, NavContainer, NavIcon, NavLogo, NavName, UserIcon} from "./Style";
import Avatar from '@material-ui/core/Avatar';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // the loading animation
      loggedIn: false
    };
  }
  // there should have an api to check whether this visitor is logged in hence change the loggedIn state

  render() {
    if (this.state.loading) {
      // the loading animation
      return (
        <Welcome
          loopDuration={1000}
          data={[
            {
              backgroundColor: colorPlan.Light,
              textColor: colorPlan.Dark,
              text: "Loading...",
              image: require("../img/folihub_dark.png")
            }
          ]}
        />
      );
    } else {
      return (
        <NavContainer>
          <NavIcon>
            <a href="/"><NavLogo /></a>
            <NavName>Folihub</NavName>
          </NavIcon>
          <div></div>
          <div></div>
          <div></div>
          <UserIcon>
            <Avatar>D</Avatar>
          </UserIcon>
        </NavContainer>
      );
    }
  }
}

export default Nav;
