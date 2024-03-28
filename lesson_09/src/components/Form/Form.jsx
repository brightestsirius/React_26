import React, {useState, memo} from 'react'
import './style.sass'

import FormText from './FormText'
import FormInputText from './FormInputText'
import FormInputColor from './FormInputColor'

import FormContext from './../../contexts/FormContext'
import InputsContext from './../../contexts/InputsContext'

export default memo(function Form() {
    const [text, setText] = useState(`Default text`);
    const [color, setColor] = useState(`#ff0000`);
    const [inputColor, setInputColor] = useState(`#000000`);

  return (
    <FormContext.Provider value={ {text, setText, color, setColor} }>
        <FormText />

        <InputsContext.Provider value={{inputColor, setInputColor}}>
            <FormInputText />
            <FormInputColor />
        </InputsContext.Provider>
    </FormContext.Provider>
  )
})