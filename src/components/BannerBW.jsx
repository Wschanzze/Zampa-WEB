import React from 'react';

const BannerBW = () => {
  return (
    <section className="banner-bw">
      <img 
        src="/assets/images/bw_cowboy_banner_1780357487563.png" 
        alt="Working cowboy" 
        className="banner-bg" 
      />
      <div className="banner-content">
        <h3 className="banner-text left-text">SUPPORTING RANCHERS<br />SINCE 1989</h3>
        <h3 className="banner-text right-text">APPAREL AND SUPPLIES<br />BUILT TO LAST</h3>
      </div>
    </section>
  );
};

export default BannerBW;
