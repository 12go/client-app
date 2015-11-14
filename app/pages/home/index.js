import React from 'react'
import { InputText } from '../../components'

const styles = {
  section: {
    textAlign: 'center',
  },
}

const props = {
  name: 'searchInput',
  title: 'Search here...',
}

export default React.createClass({
  render() {
    return (
      <section style={styles.section}>
        <p><InputText {...props} /></p>
      </section>
    )
  },
})
