import React from 'react';
import { connect } from 'react-redux';
import { closeDialog } from '../store/actions/actions.js';
import utils from '../../utils/utils.js';

const mapStateToProps = (state) => ({
  isOpen: state.app.isOpen
});

const mapDispatchToProps = {
  closeDialog
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component {
  componentDidMount () {
    this.btn.focus();
  }

  closeDialog () {
    this.props.closeDialog();
  }

  onKeyDown (e) {
    if (e.keyCode === utils.KEY_CODES.esc) {
      this.closeDialog();
    }
  }

  render () {
    return <div className='dialog-holder' onKeyDown={this.onKeyDown.bind(this)}>
      <div className="dialog">
        <div>Этот элемент не поврежден</div>
        <button
         ref={(btn) => this.btn = btn}
         onClick={this.closeDialog.bind(this)}>
         Закрыть
        </button>
      </div>
    </div>
  }
}

export default List;