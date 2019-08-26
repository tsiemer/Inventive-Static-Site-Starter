import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) =>
  // <div className="post-quote container" style={{width: '100px', height: '500px', backgroundImage: `${slice.primary.portrait_author}`}}>
  <div>
    <blockquote>
      { RichText.asText(slice.primary.quote) }
    </blockquote>
    {/* <span>- {slice.primary.name_of_the_author}</span> */}
  </div>
