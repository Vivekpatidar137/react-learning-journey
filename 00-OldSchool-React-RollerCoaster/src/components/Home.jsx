import React from "react";

class Home extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(
        "It will be called even we shift our pages for example about to home or contact till we will UnMount it"
      );
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(
      "component will unMount here which will clear setInterval in this example if we go on different page"
    );
  }

  render() {
    return (
      <>
        <h1>You are on Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi
          ratione omnis possimus. Molestiae architecto at possimus commodi
          impedit, nisi fuga perspiciatis repellat maxime sunt officia ut iusto
          quia nesciunt saepe odio optio rerum esse tempore iste aperiam
          inventore. Et exercitationem earum, reiciendis temporibus architecto
          optio natus beatae ducimus magnam nihil, odio illo quod magni
          voluptatem blanditiis! Amet molestias quaerat reprehenderit,
          laboriosam commodi maiores voluptates!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          eius facere iure assumenda laborum temporibus blanditiis consequatur
          quae expedita molestiae dolorem quia quisquam, eaque rem optio ea
          commodi dolore deleniti labore alias dolor! Numquam distinctio
          molestiae earum voluptas expedita error voluptate reprehenderit
          repellat cupiditate! Sit reprehenderit corrupti minus perferendis
          accusamus sunt quo molestiae impedit nostrum voluptatibus animi
          explicabo odit repellat nesciunt reiciendis optio distinctio illum
          dignissimos, facilis ea laborum magni labore laudantium blanditiis.
          Ducimus ut in facere esse, aperiam sint ratione provident at pariatur
          officiis ad totam natus aliquam, voluptatem ipsam laudantium amet
          molestias repellat blanditiis libero labore necessitatibus commodi.
        </p>
      </>
    );
  }
}

export default Home;
