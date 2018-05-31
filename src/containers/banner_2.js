import React from 'react'
import { withSiteData } from 'react-static'

class Banner2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="sec-banner ash-banner">
        <div className="sec-banner-b">

        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <Banner2 />
));
