import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem
          perferendis quisquam, necessitatibus eum, excepturi dolore animi ullam
          iste alias nesciunt beatae perspiciatis quibusdam id cum, omnis fugit
          quod voluptas repellat laboriosam officia? Vel rem quam suscipit
          cupiditate deserunt vitae veritatis magni, fugit natus inventore esse
          vero mollitia quia aliquam!
        </p>

        <Profile name={"Vivek"} />
      </>
    );
  }
}

export default About;
