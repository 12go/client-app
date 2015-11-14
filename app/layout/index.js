import React from 'react'

const styles = {
  layout: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  header: {
    fontSize: '24px',
    padding: '10px',
    textAlign: 'center',
  },
}

export default React.createClass({
  getDefaultProps() {
    return {
      title: '',
    }
  },

  componentWillMount() {
    document.title = this.props.title
  },

  render() {
    const { title, children } = this.props

    return (
      <section style={styles.layout}>
        <header style={styles.header}>
          <h1>{title}</h1>
        </header>
        <section role="main">
          {children}
        </section>
      </section>
    )
  },
})
