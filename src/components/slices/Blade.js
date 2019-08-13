import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) =>
  <div className="blade">
    <div className="image">
      <img src={`${slice.primary.image}`}/>
    </div>
    <div className="content-container">
        <h3>{ slice.primary.subtitle }</h3>
        <h2> { slice.primary.title } </h2>
        <div>
            { RichText.render(slice.primary.text, linkResolver, htmlSerializer) }
        </div>
    </div>
  </div>
