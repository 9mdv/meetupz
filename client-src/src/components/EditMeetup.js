import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EditMeetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      city: '',
      address: ''
    }
  }

  componentWillMount() {
    this.getDetails()
  }

  getDetails() {
    let meetupId = this.props.match.params.id
    axios
      .get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          city: response.data.city,
          address: response.data.address
        })
      })
      .catch(err => console.log(err))
  }

  editMeetup(meetupDetails) {
    axios
      .request({
        method: 'put',
        url: `http://localhost:3000/api/meetups/${this.state.id}`,
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

    this.editMeetup(meetupDetails)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">
          👈 Back
        </Link>
        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="name">City</label>
            <input
              type="text"
              name="city"
              ref="city"
              value={this.state.city}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              name="address"
              ref="address"
              value={this.state.address}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <input type="submit" value="💾 Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditMeetup
