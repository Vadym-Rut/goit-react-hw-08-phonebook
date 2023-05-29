export const selectIsAuth = state => state.auth.isAuth;
export const selectAuthToken = state => state.auth.token;
export const selectUser = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
