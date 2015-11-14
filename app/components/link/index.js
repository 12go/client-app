import React from 'react'

import app from '../../app.js'

export default React.createClass({
  handleClick(event) {
    const { external } = this.props

    if (external) return

    event.preventDefault()
    app.router.navigate(event.target.pathname)
  },

  render() {
    const { path, title } = this.props

    return (
      <a href={path} onClick={this.handleClick}>{title}</a>
    )
  },
})
