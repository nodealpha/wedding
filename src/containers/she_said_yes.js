import React from 'react'
import { withSiteData } from 'react-static'

class SheSaidYes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="sec-banner ash-shan-banner">
        <div className="sec-banner-b">
          <h1 className="sec-banner-desc">She Said Yes!</h1>
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <SheSaidYes />
));
