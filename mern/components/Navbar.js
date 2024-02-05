import React from 'react'
import {link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <link className="navbar-brand" to="/">Navbar</link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" to="/">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="/">Features</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="/">Pricing</link>
        </li>
        <li className="nav-item">
          <link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
