import assign from 'lodash.assign'

import React from 'react'
import ReactDOM from 'react-dom'

import Layout from '../../layout'
import Home from '../../pages/home'
import Search from '../../pages/search'

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
      wrapPage(Home, { title: 'Welcome to client app.' }),
      document.querySelector('[role="app"]')
    )
  },

  search() {
  },
}

export default assign({}, pages)
