import React from 'react'
import { withSiteData } from 'react-static'
//
import Intro from './intro';
import Couple from './couple';
import Banner2 from './banner_2';
import HeProposed from './he_proposed';
import SheSaidYes from './she_said_yes';
import Engagement from './engagement';
import Footer from './footer';

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main className="container">
        <Intro />
        <Couple />
        <Banner2 />
        <HeProposed />
        <SheSaidYes />
        <Engagement />
        <Footer />
      </main>
    )
  }
}

export default withSiteData(() => (
  <Home />
));
