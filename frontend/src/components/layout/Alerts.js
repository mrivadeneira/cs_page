import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.mobile) alert.error(`Mobile: ${error.msg.mobile.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
    }
    
    if (message !== prevProps.state) {
      if (message.deleteContact) alert.success(message.deleteContact)
      if (message.addContact) alert.success(message.addContact)
    }
  }

    render() {
      return <Fragment />;
    }
  }

  const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
  })

export default connect(mapStateToProps)(withAlert()(Alerts));
