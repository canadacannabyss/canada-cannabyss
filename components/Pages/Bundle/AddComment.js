import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCommentBundle } from '../../../store/actions/bundle/bundle';
import {
  Form,
  SendButton,
  TextArea,
} from '../../../styles/Pages/Product/AddCommet';

const AddComment = (props) => {
  const comments = useSelector((state) => state.post.comments);
  const [comment, setComment] = useState('');
  const { user, bundle } = props;
  const dispatch = useDispatch();

  const handleSendComment = async (e) => {
    e.preventDefault();
    dispatch(postCommentBundle(user._id, bundle, comment));
    setComment('');
  };

  const handleTextArea = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSendComment}>
        <TextArea
          placeholder="Comment..."
          onChange={handleTextArea}
          id="comment-textarea"
          value={comment}
        />
        <SendButton>Send</SendButton>
      </Form>
    </>
  );
};

export default AddComment;
