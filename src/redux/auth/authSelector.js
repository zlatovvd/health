export const selectIsLoggedIn =  state => state.auth.isLoggedIn;

export const selectAuthStatus = state => state.auth.status;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;