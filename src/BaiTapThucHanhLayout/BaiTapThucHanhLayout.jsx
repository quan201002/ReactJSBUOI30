import React, { Component } from 'react'
import Banner from './Banner'
import Header from './Header'
import Items from './Items'
import Footer from './Footer'
import './Styling.css'
export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Items/>
        <Footer/>
      </div>
    )
  }
}
