import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    apps: state.data
})

@connect(mapStateToProps)
export default class Canvas extends React.Component {
    render () {
        console.log(this.props);
        return <svg></svg>;
    }
}