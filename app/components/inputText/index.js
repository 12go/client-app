import React from 'react'

import app from '../../app.js'

const styles = {
  input: {
    width: '200px',
  },
}

export default React.createClass({
  handleKeyUp(event) {
    event.preventDefault()
    app.router.navigate('http://localhost:3000/search?filter[contains]=' + input.value)
  },

  render() {
    const { name, title } = this.props

    return (
      <input style={styles.input} placeholder={title} type="text" name={name} className={name} onkeyup={this.handleKeyUp}/>
    )
  },
})

