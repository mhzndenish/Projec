import React from 'react';
import "../css/AdLayout.css";
import CollegeGrid from './CollegeGrid';

export default function AdLayout() {
  return (
    <div className="ad-layout">
      {/* Center Column */}
      <div className="college-mid-column">
        <div className="college">
          <CollegeGrid />
        </div>
      </div>

      {/* Right Column Ads */}
      <div className="ad-right-column">
        <div className="ad-banner">Ad Display Banners</div>
        <div className="ad-banner">Ad Display Banners</div>
        <div className="ad-banner">Ad Display Banners</div>
        <div className="ad-banner">Ad Display Banners</div>
      </div>
    </div>
  );
}