/**
 * Selects the user.
 * @param {Object} state - The current state of the store.
 * @returns {Object} - The user.
 */
export const selectUser = state => state.userReducer.user;