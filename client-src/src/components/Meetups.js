import React, { Component } from 'react'
import axios from 'axios'
import Meetup from './Meetup'

class Meetups extends Component {
  constructor() {
    super()
    this.state = {
      meetups: []
    }
  }

  componentWillMount() {
    this.getMeetups()
  }

  getMeetups() {
    axios
      .get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({ meetups: response.data }, () => {
          console.log(this.state)
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const meetup = this.state.meetups.map(meetup => {
      return <Meetup item={meetup} key={meetup.id} />
    })
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">{meetup}</ul>
      </div>
    )
  }
}

export default Meetups
