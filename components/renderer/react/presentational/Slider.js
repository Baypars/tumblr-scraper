"use strict";

import React from "react";

class Slider extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    const {props} = this;
    return (
      <div className='input-row'>
        <div className='vertical-center-contents'>
          <p className="typename">
            {props.name.capitalizeEach()}
          </p>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={props.onChange} 
              checked={props.isChecked}
              name={props.name}
            />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    );
  }
}

export default Slider;
