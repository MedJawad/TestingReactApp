import React from "react";
import {
  PostContainer,
  PostHeader,
  PostTitle,
  PostContent,
  PostInfos,
  PostUsername,
  PostTimestamp,
} from "./Post.styles";
const Post = ({ title, description }) => {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <PostInfos>
          <PostUsername>Posted By: Jawad, </PostUsername>
          <PostTimestamp>5 min ago</PostTimestamp>
        </PostInfos>
      </PostHeader>
      <PostContent>{description}</PostContent>
    </PostContainer>
  );
};

export default Post;
