import React, {useEffect, useState} from 'react';
import {StyleImg} from './OverviewStyledCom.jsx';
import {FaCheckCircle} from 'react-icons/fa';

const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {
  return (
  <div className='StyleSelector'>
  {
    currentStyle !== undefined
    ? <h4>{`STYLE > ${currentStyle.name}`}</h4>
    : <></>
  }

  {styles.map((style, i) => {
    return <div key={style.style_id} className='styleSelectorImg'>
      {i % 4 === 0 && i !== 0
      ? <br/>
      : ' '}
      <StyleImg
        src={style.photos[0].thumbnail_url}
        name={i}
        onClick={e => {setCurrentStyle(styles[e.target.name])}}
        style={{opacity: style === currentStyle ? '0.5' : '1'}}
      />
      <FaCheckCircle
        style={{display: style === currentStyle ? '' : 'none'}}
        className='checkMark'
      />
    </div>
  })}
  </div>

  )
}

export default StyleSelector;