import React from 'react';
const Novels = props => {
  return (
    <div className='search'>
      <h2>Great Novels</h2>
      <input type="text" name="search" onChange={(event) => props.setSearchTerm(event.target.value)}/>
      {props.novelsDataAsProps.map(novel => {
        return (
          <>
            <div>{novel.title}</div>
          </>
        )
      })}
    </div>
  )
}

export default Novels;
