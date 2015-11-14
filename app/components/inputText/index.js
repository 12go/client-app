import React from 'react'

import app from '../../app.js'

export default React.createClass({
  handleKeyUp(event) {
    event.preventDefault()
    app.router.navigate('http://localhost:3000/search?filter[contains]=' + input.value)
  },

  render() {
    const { name, title } = this.props

    return (
      <input placeholder={title} type="text" name={name} className={name} onkeyup={this.handleKeyUp}/>
    )
  },
})

