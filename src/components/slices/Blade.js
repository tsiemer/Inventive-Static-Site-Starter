import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

export default ({ slice }) =>
  <div className="blade" style={{backgroundColor: slice.primary.blade_background_color}}>

    {slice.primary.image_side == "right" 
    ? 
    <>
      <div className="content_container">
          <h3>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
          <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
           <p>
              { RichText.render(slice.primary.content, linkResolver, htmlSerializer) }
          </p>
          <a className="cta_button" style={{backgroundColor: slice.primary.cta_button_color}} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>
      </div>
      
      <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> 
    </>
    : 
    <>
         <img style={{ maxWidth: 500 + 'px'}} className="feature_image" src={`${slice.primary.featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/>

         <div className="content_container">
            <h3>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
            <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
              <p>
                { RichText.render(slice.primary.content, linkResolver, htmlSerializer) }
            </p>
            <a className="cta_button" style={{backgroundColor: slice.primary.cta_button_color}} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>
        </div> 
    </>
    }
    
  </div>
