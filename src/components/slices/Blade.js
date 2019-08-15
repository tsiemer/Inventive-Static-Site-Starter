import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) =>
  <div className="blade container">
    <div className="image">
      <img src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/>
    </div>
    <div className="content-container">
        <h3>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
        <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
        <div>
            { RichText.render(slice.primary.content, linkResolver, htmlSerializer) }
        </div>
    </div>
  </div>
