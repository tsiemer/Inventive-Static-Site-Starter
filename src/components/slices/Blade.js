import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) =>
  <div className="blade">
    <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/>
    <div className="content_container">
        <h3>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
        <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
        <p>
            { RichText.render(slice.primary.content, linkResolver, htmlSerializer) }
        </p>
        {/* <a>{ RichText.render(slice.primary.button_text, linkResolver, htmlSerializer) }</a>   */}
    </div>
  </div>
