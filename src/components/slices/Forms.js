import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';


export default class Forms extends React.Component {
  
  render (){
    return (
      <>
        {/* {this.props.formType === "Co-Worker Widget" ? (<iframe style="overflow-y:auto; overflow-x:hidden; border-radius:6px; -webkit-border-radius:6px; -moz-border-radius:6px; border:3px solid #00d191; background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -webkit-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -moz-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -o-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, -ms-linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%);background: url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat, linear-gradient(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%); padding: 0 0 21px 0px;" src="https://www.coworker.com/widget-review/4/11399" id="widget01" width="300" height="414" frameborder="0"></iframe>)  : new Error(" Unknown Form Type ")} */}
      </>
    )
  }
}