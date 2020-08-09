import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const CommentForm = () => {

  // gives access to redux state
  const comment = useSelector(state => state.comment)

  // gives direct ccess to the dispatch function
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "ADD_COMMENT" })
  }

  return (
    <>
      <h3>Leave a comment</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={comment} onChange={(e) => dispatch({ type: "UPDATE_COMMENT", payload: e.target.value })} />
        <button>submit</button>
      </form>
    </>
  )
}

export default CommentForm;
