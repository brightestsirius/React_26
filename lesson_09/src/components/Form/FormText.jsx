import React, {useContext, memo} from 'react'

import FormContext from './../../contexts/FormContext'

export default memo(function FormText() {
  console.log(`in FormText`);
  const {text, color} = useContext(FormContext);

  return <h2 style={{color}}>{text}</h2>
})
