import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewMeetup extends Component {
  newMeetup(meetupDetails) {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:3000/api/meetups',
        data: meetupDetails
      })
      .then(response => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  onSubmit(e) {
    e.preventDefault()

    const meetupDetails = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }

    this.newMeetup(meetupDetails)
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">
          👈 Back
        </Link>
        <h1>New Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref="name" />
          </div>
          <div className="input-field">
            <label htmlFor="name">City</label>
            <input type="text" name="city" ref="city" />
          </div>
          <div className="input-field">
            <label htmlFor="name">Address</label>
            <input type="text" name="address" ref="address" />
          </div>
          <input type="submit" value="💾 Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default NewMeetup
