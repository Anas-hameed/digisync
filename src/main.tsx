import React from "react";
import UserProfile from './utils/userProfile';
import Router from "./Router";

type MyProps = any;
type MyState = {
  initialized: boolean,
  user: any,
};

class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      initialized: false,
      user: null,
    };
  }
  setUserDetails = () => {
    var user = {
      userID: UserProfile.getUserID(),
      email: UserProfile.getEmail(),
      loggedIn: UserProfile.isLoggedIn(),
      firstName: UserProfile.getFirstName(),
      lastName: UserProfile.getLastName(),
    };
    console.log(user);
    return user;
  }
  async componentDidMount() {
    await UserProfile.initialize();
    this.setState({
      initialized: true,
      user: this.setUserDetails(),
    });
    console.log(this.state.user);
  }
  render() {
    if (this.state.initialized) {
      return (
        <Router user={this.state.user} />
      )
    }
    else {
      return <h1>Loading ...</h1>

    }
  }
}

export default App;