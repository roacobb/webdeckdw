import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-star"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Polaris</h1>
        <p>
          Following our North Star{' '}
          <a href="https://www.britannica.com/place/Polaris-star">to light the way</a> forward and beyond.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Principles
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Teams
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Recruitment
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('transparency')
            }}
          >
            Transparency
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('questions')
            }}
          >
            Questions
          </button>
        </li>
      </ul>      
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
