import assign from 'lodash.assign'

import React from 'react'
import ReactDOM from 'react-dom'

import Layout from '../../layout'
import Home from '../../pages/home'

const wrapPage = (Page, opts = {}) => {
  return (
    <Layout {...opts}>
      <Page/>
    </Layout>
  )
}

const pages = {
  home() {
    ReactDOM.render(
      wrapPage(Home, { title: 'Welcome to Ayayo.' }),
      document.querySelector('[role="app"]')
    )
  },
}

export default assign({}, pages)
