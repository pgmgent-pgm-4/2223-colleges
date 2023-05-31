import { gql } from "@apollo/client";

export const GET_ALL_COMMUNITIES = gql`
query GetAllCommunities {
  communities {
    name
    id
    description
    createdAt
    authUser {
      username
    }
  }
}
`;

export const GET_ALL_POSTS_SMALL = gql`
query GetAllPosts {
  posts {
    id
    title
  }
}
`;

export const GET_ALL_POSTS_SMALL_WITHPAGINATION = gql`
query GetPostsWithPagination($skip: Int = 10, $first: Int = 20) {
  postsConnection(first: $first, skip: $skip) {
    pageInfo {
      pageSize
      hasNextPage
      hasPreviousPage
      endCursor
    }
    aggregate {
      count
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
`;

export const GET_POST_DETAILS = gql`
query GetPostById ($postId: ID!) {
  post(where: {id: $postId}) {
    id
    title
    synopsis
    body {
      html
    }
    thumbnailUrl
    authUser {
      username,
      profile {
        firstName
        lastName
      }
    }
    tags {
      name
    }
    category {
      name
    }
  }
}
`;