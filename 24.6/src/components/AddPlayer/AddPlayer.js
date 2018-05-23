import React from 'react';

const AddPlayer = (props) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    props.onPlayerAdd(input.value);
    input.value = '';
  }
  return (
    <form className="add-player" onSubmit={onSubmit}>
      <input type="text" className="add-player__text" ref={(node) => input = node} />
      <input type="submit" className="add-player__submit" value="Add"/>
    </form>
  );
};

export default AddPlayer;
