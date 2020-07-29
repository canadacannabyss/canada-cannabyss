import _ from 'lodash';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import {
  AuthorName,
  AuthorPicture,
  CommentsTitle,
  CommentsWrapper,
  Content,
  LinkToProfile,
  LoadingComments,
  NoCommentsP,
  PostedOn,
  UserInfoWrapper,
  Wrapper,
} from '../../../styles/Pages/Product/Comments';
import DateFormatter from '../../../utils/DateFormatter';
import AddComment from './AddComment';

let count = 0;

const mapStateToProps = (state) => {
  const { product, user } = state;
  const comments = product.comments;
  return {
    comments,
    user,
  };
};

const Comments = (props) => {
  const { productId, comments, user } = props;
  const formatter = new DateFormatter();

  return (
    <>
      <CommentsWrapper>
        {comments.fetched && <CommentsTitle>Comments:</CommentsTitle>}
        {!_.isEmpty(user.data) && (
          <AddComment user={user.data} product={productId} />
        )}
        {comments.fetched && _.isEmpty(comments.data) && (
          <NoCommentsP>No comments yet</NoCommentsP>
        )}
        {comments.loading ? (
          <LoadingComments>Loading...</LoadingComments>
        ) : comments.fetched === true ? (
          comments.data.map((comment) => (
            <Wrapper key={comment._id}>
              <UserInfoWrapper>
                <ul>
                  <li className='img-li'>
                    <Link
                      href='/user/[username]'
                      as={`/user/${comment.user.username}`}
                    >
                      <LinkToProfile>
                        <AuthorPicture src={comment.user.profileImage.url} />
                      </LinkToProfile>
                    </Link>
                  </li>
                  <li className='user-info'>
                    <Link
                      href='/user/[username]'
                      as={`/user/${comment.user.username}`}
                    >
                      <LinkToProfile>
                        <AuthorName>{comment.user.name}</AuthorName>
                      </LinkToProfile>
                    </Link>
                    <PostedOn>
                      {formatter.formatDateFullDate(comment.publishedOn)}
                    </PostedOn>
                  </li>
                </ul>
              </UserInfoWrapper>
              <Content>{comment.content}</Content>
            </Wrapper>
          ))
        ) : (
          <h2>Error</h2>
        )}
      </CommentsWrapper>
    </>
  );
};

export default connect(mapStateToProps)(Comments);
