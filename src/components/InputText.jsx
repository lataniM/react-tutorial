import React from 'react'

const InputText = ({addMessage, handleChange, inputValue}) => {
  return (
      <form onSubmit={addMessage}>
        <label>
          Message:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default InputText;
