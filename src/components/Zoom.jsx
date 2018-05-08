import React from 'react';
import { connect } from 'react-redux';
import { zoomMinus, zoomPlus } from '../store/actions/actions';

const mapDispatchToProps = {
  zoomPlus,
  zoomMinus
};

@connect(null, mapDispatchToProps)
class Zoom extends React.Component {
  zoomPlus () {
    this.props.zoomPlus();
  }

  zoomMinus () {
    this.props.zoomMinus();
  }
  
  render () {
    return (<div className='zoom-btn'>
      <button onClick={this.zoomPlus.bind(this)}>+</button>
      <button onClick={this.zoomMinus.bind(this)}>&minus;</button>
    </div>)
  }
}

export default Zoom;