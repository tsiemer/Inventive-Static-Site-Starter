import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
let PrismicDOM = require('prismic-dom');


export default ({ slice }) =>
<>
  <div className={"skew-c " + slice.primary.blade_background_color}></div>
    <div className={"blade " + slice.primary.blade_background_color}>
        
        <div className="bubble one"> <img src={slice.primary.bubble_one.url}/> </div>
        <div className="bubble two"> <img src={slice.primary.bubble_two.url}/> </div>
        <div className="bubble three"> <img src={slice.primary.bubble_three.url}/> </div>
        <div className="bubble four"> <img src={slice.primary.bubble_four.url}/> </div>
        <div className="bubble five"> <img src={slice.primary.bubble_five.url}/> </div>
        <div className="bubble six"> <img src={slice.primary.bubble_six.url}/> </div>
        <div className="bubble seven"> <img src={slice.primary.bubble_seven.url}/> </div>
        <div className="bubble eight"> <img src={slice.primary.bubble_eight.url}/> </div>
        <div className="bubble nine"> <img src={slice.primary.bubble_nine.url}/> </div>
        <div className="bubble ten"> <img src={slice.primary.bubble_ten.url}/> </div>
        <div className="bubble eleven"> <img src={slice.primary.bubble_eleven.url}/> </div>
        <div className="bubble twelve"> <img src={slice.primary.bubble_twelve.url}/> </div>
        <div className="bubble thirteen"> <img src={slice.primary.bubble_thirteen.url}/> </div>

        <div className="content-container">
            <h1>{ RichText.asText(slice.primary.title) }</h1>
            <p> { RichText.asText(slice.primary.content) } </p>
        </div>
    
    </div>
  <div className={"skew-cc " + slice.primary.blade_background_color}></div>
</>