import React from 'react'
import { withSiteData } from 'react-static'

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer>
        <div className="footer-b">
          <div className="footer-desc">Thank you</div>
        </div>
      </footer>
    )
  }
}

export default withSiteData(() => (
  <Footer />
));
