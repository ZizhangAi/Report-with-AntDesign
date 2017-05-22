/**
 * Created by zizhangai on 5/7/17.
 */
import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { header: '' };
  };
  setData = (newHeader) => {
    this.setState((prev) => ({ header: newHeader }));
  };
  render() {
    return (
      <div>
        {this.state.header}
      </div>
    );
  };
}

export default Header;

