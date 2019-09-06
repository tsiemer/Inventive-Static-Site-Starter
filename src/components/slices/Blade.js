import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
let PrismicDOM = require('prismic-dom');


export default ({ slice }) =>
<>
  <div className={"skew-c " + slice.primary.blade_background_color}></div>
    <div className={"blade " + slice.primary.blade_background_color}>

    {slice.primary.image_side === "right" 
      ? 
      <>
        <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
            <h3 className={ "subtitle " + slice.primary.cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
            <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
            <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
            <a className={"cta_button " + slice.primary.cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>
        </div>
        
        { slice.primary.code !== null ? slice.primary.code[0].text : <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> }
      </>
      : 
      <>
        { slice.primary.code !== null ? <p> { slice.primary.code[0].text } </p> : <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> }

        <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
            <h3 className={"subtitle " + slice.primary.cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
            <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
            <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
            <a className={"cta_button " + slice.primary.cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>
        </div> 
      </>
    }
  </div>
  <div className={"skew-cc " + slice.primary.blade_background_color}></div>
</>