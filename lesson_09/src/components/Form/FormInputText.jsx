import React, {useContext, memo} from 'react'

import FormContext from '../../contexts/FormContext'
import InputsContext from '../../contexts/InputsContext';

export default memo(function FormInputText() {
  const {text, setText} = useContext(FormContext);
  const {inputColor} = useContext(InputsContext);

  const handleChange = e => setText(e.target.value);

  return <input type="text" defaultValue={text} onChange={handleChange} style={{color: inputColor}} />
});