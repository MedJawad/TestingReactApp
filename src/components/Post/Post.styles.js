import styled from "styled-components";

export const PostContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: #747c7c;
  border-radius: 20px;
  padding: 10px;
  color: white;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid white;
`;

export const PostTitle = styled.h2``;
export const PostInfos = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PostUsername = styled.h4``;
export const PostTimestamp = styled.h4``;
export const PostContent = styled.p`
  padding: 10px;
`;
