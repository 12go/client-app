import React from 'react'
import Comps from '../../components'
const InputText = Comps.InputText

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
        <p><InputText {...props}/></p>
      </section>
    )
  },
})
