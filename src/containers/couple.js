import React from 'react'
import { withSiteData } from 'react-static'

class Couple extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="sec-couple">
        <div className="sec-couple-b">
          <h1 className="couple-h">Happy Couples</h1>
          <h4 className="couple-h2">With her it’s different</h4>
          <div className="couple-med">
            <div className="couple-med-b">
              <div className="couple-med-i ash"></div>
              <div className="couple-med-i shan"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <Couple />
));
