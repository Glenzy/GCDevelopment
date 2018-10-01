import React from 'react';
import PropTypes from 'prop-types';

const EnemyCharacter = (props) => {

  return (
    <div id={props.id} style={props.style} className="Enemy">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
          <g fill="#dbdbdb">
              <circle cx="431.38" cy="287.25" r="19" />
              <circle cx="80.62" cy="287.25" r="19" />
          </g>
          <rect x="183.52" y="61.84" width="144.96" height="118.89" fill="#b3bbc2"
          />
          <path d="M241.921,61.84h28.159c8.227-4.836,13.754-13.774,13.754-24.007C283.833,22.461,271.372,10,256,10	s-27.833,12.461-27.833,27.833C228.167,48.067,233.693,57.004,241.921,61.84z"
          fill="#2da0a4" />
          <g fill="#dbdbdb">
              <rect x="240.5" y="180.74" width="31" height="38.931" />
              <rect x="240.5" y="411.17" width="31" height="40.759" />
          </g>
          <g fill="#098287">
              <circle cx="376.52" cy="219.67" r="26" />
              <circle cx="135.48" cy="219.67" r="26" />
          </g>
          <path d="M350.517,219.667H161.483c0,2.745-0.428,5.39-1.217,7.874l19.178,183.632h153.113l19.178-183.632	C350.946,225.056,350.517,222.412,350.517,219.667z"
          fill="#b3bbc2" />
          <g fill="#858a8f">
              <path d="M203.595,502L203.595,502c-10.309,0-18.667-8.357-18.667-18.667v-31.402h37.333v31.402 C222.261,493.643,213.904,502,203.595,502z"
              />
              <path d="M308.405,502L308.405,502c-10.309,0-18.667-8.357-18.667-18.667v-31.402h37.333v31.402 C327.072,493.643,318.715,502,308.405,502z"
              />
          </g>
          <path d="M288.75,158.749h-65.5c-5.523,0-10-4.477-10-10s4.477-10,10-10h65.5c5.523,0,10,4.477,10,10S294.273,158.749,288.75,158.749	z"
          />
          <path d="M224.875,118.5c-5.523,0-10-4.477-10-10v-11c0-5.523,4.477-10,10-10s10,4.477,10,10v11	C234.875,114.023,230.398,118.5,224.875,118.5z"
          />
          <path d="M287.125,118.5c-5.523,0-10-4.477-10-10v-11c0-5.523,4.477-10,10-10s10,4.477,10,10v11	C297.125,114.023,292.648,118.5,287.125,118.5z"
          />
          <circle cx="256" cy="315.42" r="36" fill="#fdcc99" />
          <path d="M256,361.419c-25.364,0-46-20.636-46-46s20.636-46,46-46s46,20.636,46,46S281.364,361.419,256,361.419z M256,289.419	c-14.336,0-26,11.664-26,26s11.664,26,26,26s26-11.664,26-26S270.336,289.419,256,289.419z"
          />
          <path d="M310.3,259.71c-0.65,0-1.31-0.07-1.95-0.2c-0.64-0.12-1.27-0.32-1.88-0.57c-0.6-0.25-1.18-0.56-1.72-0.92	c-0.55-0.36-1.06-0.78-1.52-1.24s-0.88-0.97-1.25-1.52c-0.36-0.54-0.66-1.12-0.91-1.73c-0.25-0.6-0.45-1.23-0.58-1.87	c-0.13-0.64-0.19-1.3-0.19-1.95s0.06-1.31,0.19-1.95s0.33-1.27,0.58-1.87c0.25-0.61,0.55-1.19,0.91-1.73	c0.37-0.55,0.79-1.06,1.25-1.52s0.97-0.88,1.52-1.24c0.54-0.36,1.12-0.67,1.72-0.92c0.61-0.25,1.24-0.45,1.88-0.57	c1.29-0.26,2.61-0.26,3.9,0c0.64,0.12,1.27,0.32,1.87,0.57c0.61,0.25,1.19,0.56,1.73,0.92c0.55,0.36,1.06,0.78,1.52,1.24	s0.88,0.97,1.24,1.52c0.36,0.54,0.67,1.12,0.92,1.73c0.25,0.6,0.45,1.23,0.57,1.87c0.13,0.64,0.2,1.3,0.2,1.95s-0.07,1.31-0.2,1.95	c-0.12,0.64-0.32,1.27-0.57,1.87c-0.25,0.61-0.56,1.19-0.92,1.73c-0.36,0.55-0.78,1.06-1.24,1.52s-0.97,0.88-1.52,1.24	c-0.54,0.36-1.12,0.67-1.73,0.92c-0.6,0.25-1.23,0.45-1.87,0.57C311.61,259.64,310.95,259.71,310.3,259.71z"
          />
          <path d="M208,389.33c-0.65,0-1.31-0.06-1.95-0.19s-1.27-0.32-1.87-0.57c-0.61-0.25-1.19-0.56-1.73-0.92	c-0.55-0.37-1.06-0.78-1.52-1.25c-0.46-0.46-0.88-0.97-1.24-1.52c-0.36-0.54-0.67-1.12-0.92-1.72c-0.25-0.61-0.45-1.23-0.57-1.87	c-0.13-0.65-0.2-1.3-0.2-1.96c0-0.65,0.07-1.31,0.2-1.95c0.12-0.64,0.32-1.27,0.57-1.87s0.56-1.19,0.92-1.73	c0.36-0.55,0.78-1.06,1.24-1.52s0.97-0.88,1.52-1.24c0.54-0.36,1.12-0.67,1.73-0.92c0.6-0.25,1.23-0.44,1.87-0.57	c3.25-0.66,6.7,0.41,9.02,2.73c0.46,0.46,0.88,0.97,1.24,1.52c0.36,0.54,0.67,1.13,0.92,1.73s0.45,1.23,0.57,1.87	c0.13,0.64,0.2,1.3,0.2,1.95c0,0.66-0.07,1.31-0.2,1.96c-0.12,0.64-0.32,1.26-0.57,1.87c-0.25,0.6-0.56,1.18-0.92,1.72	c-0.36,0.55-0.78,1.06-1.24,1.52C213.21,388.27,210.63,389.33,208,389.33z"
          />
          <path d="M431.381,258.254c-3.147,0-6.175,0.51-9.014,1.441l-16.2-19.643c4-5.8,6.35-12.823,6.35-20.386c0-19.851-16.149-36-36-36	c-16.381,0-30.231,11.001-34.576,26H281.5v-18.931h46.978c5.523,0,10-4.477,10-10V61.84c0-5.523-4.477-10-10-10H291.11	c1.764-4.401,2.724-9.146,2.724-14.007C293.833,16.972,276.861,0,256,0s-37.833,16.972-37.833,37.833	c0,4.862,0.96,9.606,2.724,14.007h-37.368c-5.523,0-10,4.477-10,10v118.895c0,5.523,4.477,10,10,10H230.5v18.931h-60.441	c-4.345-14.999-18.196-26-34.576-26c-19.851,0-36,16.149-36,36c0,7.563,2.35,14.586,6.35,20.386l-16.2,19.643	c-2.839-0.931-5.867-1.441-9.014-1.441c-15.991,0-29,13.009-29,29s13.009,29,29,29c0.822,0,1.635-0.043,2.44-0.11l20.921,46.737	L91.998,379.77c-2.067,2.914-2.423,6.709-0.933,9.956l11.018,24.013c1.683,3.669,5.307,5.833,9.095,5.833	c1.395,0,2.813-0.293,4.164-0.914c5.02-2.303,7.222-8.239,4.919-13.259l-8.61-18.765l8.606-12.13l14.808,1.388l8.61,18.765	c2.303,5.02,8.238,7.222,13.259,4.919c5.02-2.303,7.222-8.239,4.919-13.259l-11.018-24.013c-1.49-3.248-4.599-5.453-8.156-5.787	l-20.494-1.92l-21.001-46.916c5.211-5.246,8.436-12.466,8.436-20.426c0-5.553-1.571-10.744-4.289-15.158l15.959-19.351	c4.358,1.877,9.155,2.921,14.194,2.921c6.229,0,12.092-1.592,17.208-4.387l16.807,160.932c0.532,5.093,4.825,8.961,9.946,8.961	H230.5v20.759h-8.239h-37.333H160.81c-5.523,0-10,4.477-10,10s4.477,10,10,10h14.119v21.402c0,15.807,12.86,28.667,28.667,28.667	s28.667-12.86,28.667-28.667v-21.402h8.239h31h8.239v21.402c0,15.807,12.86,28.667,28.667,28.667s28.667-12.86,28.667-28.667	v-21.402h14.119c5.523,0,10-4.477,10-10s-4.477-10-10-10h-24.119h-37.333H281.5v-20.759h51.057c5.121,0,9.414-3.868,9.946-8.961	L359.31,251.28c5.115,2.796,10.979,4.387,17.208,4.387c5.038,0,9.836-1.044,14.194-2.921l15.959,19.351	c-2.718,4.414-4.289,9.605-4.289,15.158c0,7.96,3.225,15.18,8.436,20.426l-21.001,46.916l-20.494,1.92	c-3.557,0.333-6.666,2.539-8.156,5.787l-11.018,24.013c-2.303,5.02-0.101,10.956,4.919,13.259	c5.018,2.302,10.955,0.101,13.259-4.919l8.61-18.765l14.808-1.388l8.606,12.13l-8.61,18.765c-2.303,5.02-0.101,10.957,4.919,13.259	c1.351,0.62,2.768,0.914,4.164,0.914c3.788,0,7.412-2.164,9.095-5.833l11.018-24.013c1.49-3.247,1.134-7.042-0.933-9.956	l-11.982-16.889l20.921-46.737c0.805,0.068,1.618,0.11,2.44,0.11c15.991,0,29-13.009,29-29S447.372,258.254,431.381,258.254z M238.167,37.833C238.167,28,246.167,20,256,20c9.833,0,17.833,8,17.833,17.833c0,5.475-2.559,10.648-6.807,14.007h-22.054	C240.725,48.481,238.167,43.308,238.167,37.833z M193.522,71.84h48.398h28.159h48.398v98.895H271.5h-31h-46.978V71.84z M250.5,190.735h11v18.931h-11V190.735z M71.619,287.254c0-4.962,4.038-9,9-9c4.962,0,9,4.038,9,9s-4.038,9-9,9	C75.657,296.254,71.619,292.217,71.619,287.254z M135.483,235.667c-8.822,0-16-7.178-16-16s7.178-16,16-16s16,7.178,16,16	c0,0.497-0.03,0.987-0.075,1.473c-0.013,0.146-0.033,0.29-0.05,0.435c-0.042,0.355-0.096,0.706-0.161,1.053	c-0.027,0.142-0.052,0.285-0.083,0.426c-0.093,0.428-0.2,0.85-0.326,1.265c-0.012,0.04-0.021,0.08-0.033,0.12	C148.72,230.937,142.644,235.667,135.483,235.667z M212.261,483.333c0,4.779-3.888,8.667-8.667,8.667s-8.667-3.888-8.667-8.667	v-21.402h17.333L212.261,483.333L212.261,483.333z M317.072,461.931v21.402c0,4.779-3.888,8.667-8.667,8.667	s-8.667-3.888-8.667-8.667v-21.402H317.072z M261.5,441.931h-11v-20.759h11V441.931z M271.5,401.172h-31h-52.046L173.68,259.71	h99.62c5.523,0,10-4.477,10-10s-4.477-10-10-10H171.591l-1.049-10.043H240.5h31h69.958l-14.586,139.667H245c-5.523,0-10,4.477-10,10	s4.477,10,10,10h79.783l-1.236,11.839L271.5,401.172L271.5,401.172z M361.245,224.439c-0.012-0.04-0.021-0.08-0.033-0.12	c-0.126-0.415-0.233-0.837-0.326-1.265c-0.031-0.141-0.056-0.284-0.083-0.426c-0.065-0.347-0.119-0.698-0.161-1.053	c-0.017-0.145-0.037-0.29-0.05-0.435c-0.045-0.486-0.075-0.976-0.075-1.473c0-8.822,7.178-16,16-16s16,7.178,16,16s-7.178,16-16,16	C369.356,235.667,363.28,230.937,361.245,224.439z M431.381,296.254c-4.962,0-9-4.038-9-9s4.038-9,9-9s9,4.038,9,9	S436.343,296.254,431.381,296.254z"
          />
      </svg>
    </div>);
};

EnemyCharacter.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EnemyCharacter;
/*  */
