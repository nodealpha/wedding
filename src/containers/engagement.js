import React from 'react'
import { withSiteData } from 'react-static'

import EngagementImage from '../images/engagement.jpg'

class Engagement extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="sec-engagement">
        <div className="sec-engagement-b">
          <div className="sec-engagement-split">
            <div className="sec-engagement-split-b">
              <div className="sec-engagement-split-i">
                <div className="sec-engagement-split-cntx">
                  <div className="sec-engagement-split-h">Engagement</div>
                  <div className="sec-engagement-split-time">6:00pm to 8:00pm</div>
                  <div className="sec-engagement-split-addr-h">Paradise Party Hall</div>
                  <div className="sec-engagement-split-addr-p">No 145, AA Block, 1st Floor, 3rd Avenue, (Near Anna Nagar Vasantha Bhavan), Anna Nagar, Chennai - 600040</div>
                  <div className="sec-engagement-split-addr-btn">
                    <button type="button" onClick={() => {
                      window.open('https://goo.gl/maps/HLTvTq1fkQJ2');
                    }}>Direct me</button>
                  </div>
                </div>
              </div>
              <div className="sec-engagement-split-i">
                <div className="sec-engagement-split-med"><img src={EngagementImage} alt="Engagement background" /></div>
              </div>
            </div>
            <div className="sec-engagement-invite">Expecting your presence!</div>
          </div>
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <Engagement />
));
