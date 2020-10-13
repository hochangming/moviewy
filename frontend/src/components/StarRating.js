import React, { Component } from "react"; 

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
