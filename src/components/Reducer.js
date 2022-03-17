import React, { useReducer } from 'react';

const reducer = (state, action) => {
  console.log({ ...state, [action.type]: action.payload});

  // * Set the previous state and overwrite [action.type] (type could be 'name' or 'email')
  // * with action.payload (payload is the new input value) 

  return {
    ...state,
    // Name      : Value
    [action.type]: action.payload
  };
}

const initialState = {
  name: '',
  email: ''
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // * Dispatch pass the new data to the Reducer hook
    dispatch({
      type: name,
      payload: value
    });
  }

    return (
      <div>
        {JSON.stringify(state)}
        <div>
            <label>
                <span>Name:</span>
                <br />
                <input
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
                <span>Email:</span>
                <br />
                <input
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </label>
        </div>
      </div>
    )

}

export default Reducer;