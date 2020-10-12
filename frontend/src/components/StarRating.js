// import React from 'react';

// export default function Rating(props) {
//   return !props.value ? (
//     <div></div>
//   ) : (
//     <div className="rating">
//       <span>
//         <i
//           className={
//             props.value >= 1
//               ? 'fa fa-star'
//               : props.value >= 0.5
//               ? 'fa fa-star-half-o'
//               : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 2
//               ? 'fa fa-star'
//               : props.value >= 1.5
//               ? 'fa fa-star-half-o'
//               : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 3
//               ? 'fa fa-star'
//               : props.value >= 2.5
//               ? 'fa fa-star-half-o'
//               : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 4
//               ? 'fa fa-star'
//               : props.value >= 3.5
//               ? 'fa fa-star-half-o'
//               : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>
//         <i
//           className={
//             props.value >= 5
//               ? 'fa fa-star'
//               : props.value >= 4.5
//               ? 'fa fa-star-half-o'
//               : 'fa fa-star-o'
//           }
//         ></i>
//       </span>
//       <span>{props.text ? props.text : ''}</span>
//     </div>
//   );
// }

import React, { Component } from "react";
// import "./css/starRating.css";

class StarRating extends Component {
  state = {
    selectedStars: this.props.value,
    totalStars: 5
  };

  firstMethod = () => {
    const { selectedStars, totalStars } = this.state;
    return [...Array(totalStars)].map((el, i) =>
      i < selectedStars ? (
        <i key={i} className="fa fa-star text-danger" />
      ) : (
        <i key={i} className="fa fa-star-o text-danger" />
      )
    );
  };

  secondMethod = () => {
    // implement the code for full, empty and half stars here.
    const { selectedStars, totalStars } = this.state;
    return [...Array(totalStars)].map((el, i) =>
      // check if current star should be half
      i < selectedStars && i + 1 > selectedStars ? (
        <i key={i} className="fa fa-star-half-o text-danger"  />
      ) : // check if current star should be full
      i < selectedStars ? (
        <i key={i} className="fa fa-star text-danger" />
      ) : (
        // else, current star should be empty
        <i key={i} className="fa fa-star-o text-danger" />
      )
    );
  };

  render() {
    const { selectedStars } = this.state;
    return (
      <React.Fragment>
        {Number.isInteger(selectedStars)
          ? this.firstMethod()
          : this.secondMethod()}
      </React.Fragment>
    );
  }
}

export default StarRating;
