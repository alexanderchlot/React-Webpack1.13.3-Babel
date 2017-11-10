import React from 'react'
import text from './titles.json'

export const name = (
  <h1 id="title"
          className="header"
          style={{backgroundColor: 'DarkBlue', color: 'WhiteSmoke'}}>
          {text.name}
  </h1>
)

export const lastname = (
  <h1 id="title"
          className="header"
          style={{backgroundColor: "yellow", color: "white"}}>
          {text.lastname}
  </h1>
)
