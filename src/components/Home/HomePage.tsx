import React, { Component } from 'react'
import Header from '../header/header'
import Search from '../search/search'

export default class Home extends Component {
  render() {
    return (
      <>
      <div>

      <Header></Header>
      <div>Home content</div>
      <div><Search/></div>
      </div>
      </>
    )
  }
}
