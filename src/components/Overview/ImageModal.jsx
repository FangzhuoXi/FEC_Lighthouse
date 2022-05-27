import React from 'react';
import {CloseButton} from './OverviewStyledCom.jsx';

const ImageModal = ({setExpanded, children, zoomed}) => {

  return (
    <div className='imageModal' onClick={() => {setExpanded(false)}}>
      <div className='imageModal-content' onClick={e => e.stopPropagation()}>
        <div className='imageModal-header'>
          <CloseButton
            style={{display: zoomed ? 'none' : ''}}
            onClick={() => {setExpanded(false)}}
          >❎</CloseButton>
        </div>
        <div className='imageModal-body'>
          {children}
        </div>
        <div className='imageModal-footer'>
        </div>
      </div>
    </div>
  )
}

export default ImageModal;