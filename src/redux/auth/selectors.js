export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsSuccess = (state) => state.auth.isSuccess;
export const selectIsInstructor = (state) => state.auth.isInstructor;
export const selectUserCity = (state) => state.auth.user.city;
