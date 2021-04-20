import React, { Component } from 'react';
import { Formio, FormBuilder } from 'formiojs';
import StarRatingComponent from 'react-star-rating-component';
var $ = window.$;

class FormBuilder1 extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

var BaseComponent = Formio.Components.components.base;

/**
 * Create a new CheckMatrixComponent "class" using ES5 class inheritance notation.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
function CheckMatrixComponent(component, options, data) {
  BaseComponent.prototype.constructor.call(this, component, options, data);
}

// Perform typical ES5 inheritance
CheckMatrixComponent.prototype = Object.create(BaseComponent.prototype);
CheckMatrixComponent.prototype.constructor = CheckMatrixComponent;

/**
 * Define what the default JSON schema for this component is. We will derive from the BaseComponent
 * schema and provide our overrides to that.
 * @return {*}
 */
CheckMatrixComponent.schema = function() {
  return BaseComponent.schema({
    type: 'checkmatrix',

  });
};

/**
 * Register this component to the Form Builder by providing the "builderInfo" object.
 *
 * @type {{title: string, group: string, icon: string, weight: number, documentation: string, schema: *}}
 */
CheckMatrixComponent.builderInfo = {
  title: 'Check Matrix',
  group: 'basic',
  icon: 'fa fa-table',
  weight: 70,
  documentation: 'http://help.form.io/userguide/#table',
  schema: CheckMatrixComponent.schema()
};

/**
 *  Tell the renderer how to build this component using DOM manipulation.
 */
const setItems = (value) => {
  $('.rating-value').val(value);
  // console.log('value',$('.rating-value'));

  var $star_rating = $('.star-rating .fa');
  return $star_rating.each(function() {
    if (parseInt(value) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
}
CheckMatrixComponent.prototype.build = function() {
  this.element = this.ce('form', {
    class: 'rating'
  });
  // this.input = this.ce('input',{
  //   type:"hidden",
  //    class:"rating-value",
  //     value:"0"
  // })
  // this.element.appendChild(this.addInput(this.input));
  // for(let i=1; i <= 5; i++){
  //   this.label = this.ce('label',{

  //   })
  //   for (let j = 1; j <= i; j++) {
  //       this.span = this.ce('span', {
  //               class:"icon",
  //               text : "★",
  //       });
  //       this.element.appendChild(this.span)
  //     }
  // }
  for (let j = 1; j <= 5; j++) {
   var varThis = this;
    this.span = this.ce('span', {
            class:"fa fa-star-o",
            "data-rating": j,
            onClick: function(event){
              // varThis.input.value = j;
             setItems(j);
            }
    });
  this.element.appendChild(this.span);
}




};

/**
 * Provide the input element information. Because we are using checkboxes, the change event needs to be
 * 'click' instead of the default 'change' from the BaseComponent.
 *
 * @return {{type, component, changeEvent, attr}}
 */
CheckMatrixComponent.prototype.elementInfo = function() {
  const info = BaseComponent.prototype.elementInfo.call(this);
  info.changeEvent = 'change';
  return info;
};

/**
 * Tell the renderer how to "get" a value from this component.
 *
 * @return {Array}
 */
CheckMatrixComponent.prototype.getValue = function() {
  // var value = this.input.value;
  // return value;
  return '';
};

/**
 * Tell the renderer how to "set" the value of this component.
 *
 * @param value
 * @return {boolean}
 */
CheckMatrixComponent.prototype.setValue = function(value) {
  if (!value) {
    return;
  }

    // this.input.value = value;

  console.log('value', value);
  // for (var rowIndex in this.checks) {
  //   var row = this.checks[rowIndex];
  //   if (!value[rowIndex]) {
  //     break;
  //   }
  //   for (var colIndex in row) {
  //     var col = row[colIndex];
  //     if (!value[rowIndex][colIndex]) {
  //       return false;
  //     }
  //     let checked = value[rowIndex][colIndex] ? 1 : 0;
  //     col.value = checked;
  //     col.checked = checked;
  //   }
  // }
};

// Use the table component edit form.
CheckMatrixComponent.editForm = Formio.Components.components.table.editForm;

// Register the component to the Formio.Components registry.
Formio.Components.addComponent('checkmatrix', CheckMatrixComponent);

      // Formio.createForm(document.getElementById('formio'), {
      //   components: [
      //     {
      //       type: 'textfield',
      //       label: 'Title',
      //       placeholder: 'Enter the title.',
      //       validate: {
      //         required: true
      //       },
      //       key: 'title',
      //       input: true,
      //       inputType: 'text'
      //     },
      //     {
      //       type: 'textarea',
      //       label: 'Content',
      //       wysiwyg: true,
      //       validate: {
      //         required: true
      //       },
      //       key: 'content',
      //       input: true,
      //       inputType: 'text'
      //     },
      //     {
      //       type: 'button',
      //       action: 'submit',
      //       label: 'Submit',
      //       theme: 'primary',
      //       key: 'submit',
      //       disableOnInvalid: true
      //     }
      //   ]
      // }).then(function(form) {
      //   form.on('submit', function(submission) {
      //     console.log(submission);
      //   });
      // });
      this.builder = new FormBuilder(document.getElementById('formio'), {components:[
      ]},{ builder: {
        basic: false,
        advanced: false,
    data: false,
    customBasic: {
      title: 'Basic Components',
      default: true,
      weight: 0,
      components: {
        textfield: true,
        number: true,
        textarea: true,
        file: true,
        signature: true,
        email: true,
        url: true,
        checkbox: true,
        radio: true,
        content: true,
        button: true,
        image: true,
        datetime: true,
        day :true,
        select: true,
        checkmatrix: true,
        // starratings: {
        //   title: 'Star Ratings',
        //   key: 'starrating',
        //   icon: 'fa fa-star',
        //   schema: {
        //     label: 'Star Rating',
        //     type: StarRatingComponent,
        //     key: 'starrating',
        //     input: true
        //   }
        // }
      }
    }
    }
  });
      this.builder.render();
    }
    preview = () => {
      const { components } = this.builder.form;
      console.log('component', components);
      Formio.createForm(document.getElementById('form'), {components}).then(function(form) {
        form.on('submit', function(submission) {
          console.log(submission);
          // Formio.createForm(document.getElementById('form1'), {components},{readOnly: true,
          //   viewAsHtml: true});
        });
      });
    }
      render (){

        // let formio = new Formio('https://examples.form.io/example');
        // formio.loadForm((form) => {
        //   console.log(form);
        //   formio.saveSubmission({data: {
        //     firstName: 'Joe',
        //     lastName: 'Smith',
        //     email: 'joe@example.com'
        //   }}).then((submission) => {
        //     console.log(submission);
        //   });
        // });

        return (
          //  formio
          <div>
            {/* <div class="star-rating">
              <span class="fa fa-star-o" data-rating="1"></span>
              <span class="fa fa-star-o" data-rating="2"></span>
              <span class="fa fa-star-o" data-rating="3"></span>
              <span class="fa fa-star-o" data-rating="4"></span>
              <span class="fa fa-star-o" data-rating="5"></span>
              <input type="hidden" name="whatever1" class="rating-value" value="2.56" />
            </div> */}

            <div id='formio'></div>
            <button onClick={()=>this.preview()}>preview</button>
            <div id='form'></div>
            <div id='form1'></div>
          </div>

           );
      }
}




export default FormBuilder1;