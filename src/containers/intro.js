import React from 'react'
import { withSiteData } from 'react-static'

class Intro extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="sec-intro">
        <div className="sec-intro-b">
          <div className="intro-logo"></div>
          <h1 className="intro-names">Ash &amp; Shankar</h1>
          <h3 className="intro-desc">Are getting engaged</h3>
          <h3 className="intro-date">June 3, 2018</h3>
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <Intro />
));
