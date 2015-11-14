import React from 'react'

import app from '../'

export const InputText = React.createClass({
  handleInput(event) {
    event.preventDefault()
    app.router.navigate('http://localhost:3000/search?filter[contains]=' + input.value)
  },

  render() {
    const { name, title } = this.props

    return (
      <input placeholder={title} type="text" name={name} class={name} onInput={this.handleInput}/>
    )
  },
})

