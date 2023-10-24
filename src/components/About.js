import React from 'react'

export default function About(props) {
  return (
<div className='container my-3' style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'#042743' : 'white' }}>
  <h1>About Us</h1>
      <div className="accordion my-3" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header"> 
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'#212529' : 'white' }} >
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'grey' : 'white' }}>
        <strong>TextUtils</strong> will give you a way to analyze your text quickly and efficiently. Be it a count, character count or  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'#212529' : 'white' }}>
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'grey' : 'white' }}>
        <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count and word statistics for a given text.<strong>TextUtils</strong> reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'#212529' : 'white' }}>
       <strong>Browser Compatable</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style= {{color: props.mode === 'dark'? 'white' : '#042743'}}>
      <div className="accordion-body"  style= {{color: props.mode === 'dark'? 'white' : '#042743' , backgroundColor: props.mode=== 'dark'?'grey' : 'white' }}>
        <strong>This</strong> word counter software works in any web browser such as <code>Chrome, Firefox, Internet Explorer, Safari, Opera.</code> It suits to count characters in <strong>facebook, blog, books, excel document, pdf document, essays, etc</strong>
      </div>
    </div>
  </div>
 </div>
 </div>
  )
}
