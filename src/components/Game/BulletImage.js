import React from 'react';
export default function BulletImage(props) {
  let classList;
  if(props.cssClassName){
    classList = `floatingBulletImage ${props.cssClassName}`;
  } else {
    classList="floatingBulletImage";
  }

  return (
  <div className={classList} style={props.style} >
    <svg data-name="floatingBulletImage" id="floatingBulletImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
    <defs>
      <radialGradient id="floatingBulletImageGradient" cx="2.5" cy="2.5" r="2.5" gradientUnits="userSpaceOnUse">
        <stop offset="0.35" stopColor="#fff" stopOpacity="0.8"/>
        <stop offset="0.6" stopColor="#fff" stopOpacity="0.79"/>
        <stop offset="0.69" stopColor="#fdfdfd" stopOpacity="0.77"/>
        <stop offset="0.76" stopColor="#fafafa" stopOpacity="0.72"/>
        <stop offset="0.81" stopColor="#f6f6f6" stopOpacity="0.65"/>
        <stop offset="0.86" stopColor="#f0f0f0" stopOpacity="0.57"/>
        <stop offset="0.9" stopColor="#e9e9e9" stopOpacity="0.46"/>
        <stop offset="0.93" stopColor="#e1e1e1" stopOpacity="0.33"/>
        <stop offset="0.97" stopColor="#d8d8d8" stopOpacity="0.19"/>
        <stop offset="1" stopColor="#cecece" stopOpacity="0.02"/>
        <stop offset="1" stopColor="#ccc" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <circle className="BulletImage" cx="2.5" cy="2.5" r="2.5"/>
  </svg>
</div>);
}
