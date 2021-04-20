import React, { Component } from 'react';
// import $ from "jquery";
// import jQuery from "jquery";
//  window.jQuery = jQuery;
// require('./contentbuilder.js');
import axios from 'axios';

var $ =window.$ ;
var jQuery = window.jQuery;
export default class ContentBuilder1 extends Component {

  componentDidMount() {
    // $(document).ready(function () {

      $("#contentarea").contentbuilder({
          snippetFile: 'contentbuilder/assets/minimalist-basic/snippets.html',
          snippetOpen: true,
          toolbar: "left",
          iconselect: 'contentbuilder/assets/ionicons/selecticon.html',
      });

  // });
  // this.view();
  }
  storeImage = async (element) => {
    var hiquality = true;
    //Check all images
    element.find('img').not('#divCb img').each(function () {
        if (jQuery(this).attr('src').indexOf('base64') != -1) {
            let  image = jQuery(this).attr('src');
            image = image.replace(/^data:image\/(png|jpeg);base64,/, "");
            try {
              hiquality = element.data('contentbuilder').settings.hiquality;
          } catch (e) { };
            let filename = '';
            if (jQuery(this).data('filename') != undefined) {
                filename = jQuery(this).data('filename'); //get filename data from the imagemebed plugin
            }
            var type='';
            if (hiquality) {
                type='png';
            } else {
                var extension = filename.substr((filename.lastIndexOf('.') + 1));
                extension = extension.toLowerCase();
                if (extension == 'jpg' || extension == 'jpeg') {
                    type='jpg';

                  } else {
                    type='png';
                }
            }
            const param = {
              type,
              image
            }
            try {
              const response =  axios.post('http://192.168.0.7:1337/api/v1/storeimage',param);

              console.log('response', response);
              // jQuery(this).attr('src', response.url);
          } catch (error) {
              console.log(error);
          }
            //Submit form
        }
    });

  }
  view() {
    /* This is how to get the HTML (for saving into a database) */
    var sHTML = $('#contentarea').data('contentbuilder').html();
  //   console.log('shtml', sHTML);
  //   // $("#contentarea").saveimages();
  //   $("#contentarea").saveimages();
  // var image = $("#contentarea").data('saveimages').save();
  //   console.log('image', image);
  // $("html").fadeOut(1000);


    this.storeImage($('#contentarea'));

}
    render() {
      return (
        <div>

        <div id="contentarea" className="is-container container">

        </div>
        <button onClick={()=> this.view()}>save</button>
        </div>
      );
    }
  }