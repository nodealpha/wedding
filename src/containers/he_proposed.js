import React from 'react'
import { withSiteData } from 'react-static'

class HeProposed extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="sec-he-proposed">
        <div className="sec-he-proposed-b">
          <h1 className="he-proposed-h">He Proposed</h1>
          <p className="he-proposed-p">On a fine night, Shankar sent a message showing his interest on me. I was so awestruck, confused and surprised at the same time.</p>
          <p className="he-proposed-p">It took a month to process, he asked me to marry him. Fear blocked me, but love on him made me say yes!</p>
          <p className="he-proposed-qt">“Yes! Yes of course! Yes!”</p>
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <HeProposed />
));
