const date = require('datejs');

import React from 'react';

function Viewer(props){
    const {headline, datePublished, articleBody, images, url, video} = props.post;
    return(
      <div id='right-panel' className='height100width100'>
          {headline ?
              <h1 className='viewer-title'> {headline} </h1>
            :
              null
          }
          {datePublished ?
              <h1 className='viewer-date'> {Date.parse(datePublished).toString()} </h1>
            :
              null
          }
          {articleBody ?
              <p className='viewer-body'> {articleBody} </p>
            :
              null
          }
          {video ?
            <div id='video-wrapper'>
              <iframe frameBorder='0' src={video} />
            </div>
          :
            null
          }
          <div id='viewer-image-wrapper'>
            {images.map((imageUrl, index) =>
              <img className='viewer-image' key={index} src={imageUrl} />
            )}
          </div>

          <br/>

          <div id='viewer-url-wrapper'>
            {url ?
              <a href='#' onClick={() => props.openInBrowser(url)}className='viewer-url'>Open in Browser..</a>
             :
              null
            }
          </div>
      </div>
    )
}


export default Viewer
