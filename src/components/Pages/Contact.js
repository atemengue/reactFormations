/** @format */

import React, { Component } from 'react';
import Header from '../Common/Header';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }
  render() {
    return (
      <div>
        <Header title='Contact' />
        <section className='page-section' id='contact'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Contact Us</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <form id='contactForm' name='sentMessage' novalidate='novalidate'>
              <div className='row align-items-stretch mb-5'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Your Name *'
                      required='required'
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      data-validation-required-message='Please enter your name.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      placeholder='Your Email *'
                      required='required'
                      required='required'
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      data-validation-required-message='Please enter your email address.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group mb-md-0'>
                    <input
                      className='form-control'
                      id='phone'
                      type='tel'
                      placeholder='Your Phone *'
                      required='required'
                      required='required'
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                      data-validation-required-message='Please enter your phone number.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group form-group-textarea mb-md-0'>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Your Message *'
                      required='required'
                      required='required'
                      value={this.state.message}
                      onChange={(e) =>
                        this.setState({ message: e.target.value })
                      }
                      data-validation-required-message='Please enter a message.'
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <div id='success'></div>
                <button
                  className='btn btn-primary btn-xl text-uppercase'
                  id='sendMessageButton'
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
