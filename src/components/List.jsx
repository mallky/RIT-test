import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../store/actions/actions.js';

const mapStateToProps = (state) => ({
  items: state.data.items
});
const mapDispatchToProps = {
  removeItem
}

@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component {
  removeItem (item) {
    this.props.removeItem(item);
  }

  renderItems () {
    return this.props.items.map((item, i) => {
      return <li key={`${item}-${i}`}>
        {item}
        <button onClick={this.removeItem.bind(this, item)}>X</button>
      </li>
    });
  }

  render () {
    return <ul>
      {this.renderItems()}
    </ul>
  }
}

export default List;