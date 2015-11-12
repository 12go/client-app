import React from 'react'

const styles = {
  section: {
    textAlign: 'center',
  },
}

export default React.createClass({
  render() {
    return (
      <section style={styles.section}>
        <p>something here</p>
        <p>another paragraph</p>
      </section>
    )
  },
})
