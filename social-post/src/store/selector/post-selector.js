/**
 * Selects the loading status of posts.
 * @param {Object} state - The current state of the store.
 * @returns {boolean} - The loading status of posts.
 */
export const selectPostsLoadingStatus = (state) => state.postReducer.posts.isLoading;

/**
 * Selects the error status of posts.
 * @param {Object} state - The current state of the store.
 * @returns {boolean} - The error status of posts.
 */
export const selectPostsErrorStatus = (state) => state.postReducer.posts.isErrored;

/**
 * Selects the error message of posts.
 * @param {Object} state - The current state of the store.
 * @returns {string} - The error message of posts.
 */
export const selectPostsErrorMessage = (state) => state.postReducer.posts.errorMessage;

/**
 * Selects the data of posts.
 * @param {Object} state - The current state of the store.
 * @returns {Array} - The data of posts.
 */
export const selectPostsData = (state) => state.postReducer.posts.data;

export const selectPostById = (postId) => (state) => state.postReducer.posts.data.find(post => post.id === parseInt(postId));

/**
 * Selects a single post.
 * @param {Object} state - The current state of the store.
 * @returns {Object} - The selected post.
 */
export const selectPost = (state) => state.postReducer.post;

/**
 * Selects the value of a single post.
 * @param {Object} state - The current state of the store.
 * @returns {Object} - The value of the selected post.
 */
export const selectPostValue = (state) => state.postReducer.post.data;

/**
 * Selects the posting status of a single post.
 * @param {Object} state - The current state of the store.
 * @returns {boolean} - The posting status of the selected post.
 */
export const selectPostIsPosting = (state) => state.postReducer.post.isPosting;

/**
 * Selects the error status of a single post.
 * @param {Object} state - The current state of the store.
 * @returns {boolean} - The error status of the selected post.
 */
export const selectPostIsErrored = (state) => state.postReducer.post.isErrored;

/**
 * Selects the error message of a single post.
 * @param {Object} state - The current state of the store.
 * @returns {string} - The error message of the selected post.
 */
export const selectPostErrorMessage = (state) => state.postReducer.post.errorMessage;