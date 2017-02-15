import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepageFastestDelivery from './homeComponents/homepage_fastestDelivery';
import HomepageHowCarousel from './homeComponents/homepage_howCarousel';
import HomepageReviewSlide from '../../Components/reviewSlide';

export default function HomePage() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageFastestDelivery />
      <HomepageHowCarousel />
      <div className="homepage-reviews">
        <h1 className="homepage-reviews-title">Reviews</h1>
        <div className="homepage-reviews-carousel-parent">
          <div className="homepage-reviews-carousel-container">
            <div className="homepage-reviews-carousel-slides">
              <HomepageReviewSlide
                className={'homepage-reviews-carousel'}
                name={'alpha'}
                review={'Well, NJ2JP wasn’t lying. 5 days to Fukuoka. Way faster than all of my previous online choices. I’m sold.'}
                author={'Matt Shipmen'}
              />
              <HomepageReviewSlide
                className={'homepage-reviews-carousel'}
                name={'beta'}
                review={'Wow! Fruity Bamm-Bamm = Delicious.  4 Day Delivery = Fast. My New Juice Source = NJ2JP.'}
                author={'Gene Smith, Okinawa'}
              />
              <HomepageReviewSlide
                className={'homepage-reviews-carousel'}
                name={'gamma'}
                review={'“NicJuice2Japan (NJ2JP) are killing it with these delivery speeds. Not to mention the juice line is delicious.  Looking forward to them carrying more juices flavors.”'}
                author={'Robert McNair, Sasebo'}
              />
              <HomepageReviewSlide
                className={'homepage-reviews-carousel'}
                name={'delta'}
                review={'I placed my order on Monday, by Thursday morning, I was vaping Nicotine e-juice. Nj2jp is blazing fast!'}
                author={'Justin Arians, Yokosuka'}
              />
            </div>
          </div>
        </div>
        <div className="homepage-reviews-carousel-dots">
          <ul className="homepage-reviews-carousel-dots-list">
            <li>
              <button className="homepage-reviews-carousel-dots-list-each" onClick={() => console.log('alpha')} />
            </li>
            <li>
              <button
                onClick={() => console.log('beta')} className="homepage-reviews-carousel-dots-list-each"
              />
            </li>
            <li>
              <button
                onClick={() => console.log('gamma')} className="homepage-reviews-carousel-dots-list-each"
              />
            </li>
            <li>
              <button
                onClick={() => console.log('delta')} className="homepage-reviews-carousel-dots-list-each"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
