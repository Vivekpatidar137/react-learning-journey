import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy name",
        following: 0,
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vivekpatidar137");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { count } = this.state;
    const { name, following } = this.state.userInfo;
    return (
      <div>
        <h2 style={{ backgroundColor: "yellow" }}>Profile Page</h2>
        <h3>Name: {name}</h3>
        <h3>Following: {following}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
        <h3>{count}</h3>
      </div>
    );
  }
}

export default Profile;
