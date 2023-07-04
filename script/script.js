"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function () {
    const postIdInput = document.getElementById("postIdInput");
    const postId = Number(postIdInput.value);
    if (isNaN(postId) || postId < 1 || postId > 100) {
      alert("Enter a valid ID value between 1 and 100");
      return;
    }
    clearPostAndComments();
    fetchPostById(postId)
      .then(function (post) {
        displayPost(post);
      })
      .catch(function (error) {
        alert("An error occurred while loading data: " + error);
      });
  });

  const getCommentsButton = document.getElementById("getCommentsButton");
  getCommentsButton.addEventListener("click", function () {
    const postIdInput = document.getElementById("postIdInput");
    const postId = Number(postIdInput.value);
    if (isNaN(postId) || postId < 1 || postId > 100) {
      alert("Enter a valid ID value between 1 and 100");
      return;
    }
    clearComments();
    fetchCommentsByPostId(postId)
      .then(function (comments) {
        displayComments(comments);
      })
      .catch(function (error) {
        alert("An error occurred while loading comments: " + error);
      });
  });

  function fetchPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      function (response) {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }
    );
  }

  function fetchCommentsByPostId(postId) {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    ).then(function (response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  function displayPost(post) {
    const postContainer = document.getElementById("postContainer");
    const postElement = document.createElement("div");
    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;
    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postElement.appendChild(postTitle);
    postElement.appendChild(postBody);
    postContainer.appendChild(postElement);
  }

  function displayComments(comments) {
    const commentsContainer = document.getElementById("commentsContainer");
    const commentsTitle = document.createElement("h3");
    commentsTitle.textContent = "Comments:";
    commentsContainer.appendChild(commentsTitle);
    comments.forEach(function (comment) {
      const commentElement = document.createElement("div");
      const commentText = document.createElement("p");
      const commentStrong = document.createElement("strong");
      commentStrong.textContent = comment.name;
      const commentTextNode = document.createTextNode(`: ${comment.body}`);
      commentText.appendChild(commentStrong);
      commentText.appendChild(commentTextNode);
      commentElement.appendChild(commentText);
      commentsContainer.appendChild(commentElement);
    });
  }

  function clearPostAndComments() {
    const postContainer = document.getElementById("postContainer");
    const commentsContainer = document.getElementById("commentsContainer");
    while (postContainer.firstChild) {
      postContainer.firstChild.remove();
    }
    while (commentsContainer.firstChild) {
      commentsContainer.firstChild.remove();
    }
  }

  function clearComments() {
    const commentsContainer = document.getElementById("commentsContainer");
    while (commentsContainer.firstChild) {
      commentsContainer.firstChild.remove();
    }
  }
});
