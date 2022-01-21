import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../actions/contacts';

export class Form extends Component {
  state = {
    name: '',
    mobile: '',
    email: '',
    message: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email, message } = this.state;
    const contact = { name, mobile, email, message };
    this.props.addContact(contact);
    this.setState({
      name: '',
      mobile:'',
      email: '',
      message: '',
    });
  };

  render() {
    const { name, mobile, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              className="form-control"
              type="text"
              name="mobile"
              onChange={this.onChange}
              value={mobile}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addContact })(Form);
