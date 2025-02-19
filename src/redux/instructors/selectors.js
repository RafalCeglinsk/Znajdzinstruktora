export const selectAllInstructors = (state) => state.instructors.instructors;
export const selectInstructorsByCity = (state) =>
  state.instructors.instructorsByCity;
export const selectInstructor = (state) => state.instructors.instructor;
export const selectTotalPages = (state) => state.instructors.totalPages;
export const selectCurrentPage = (state) => state.instructors.currentPage;
export const selectIsLoading = (state) => state.instructors.isLoading;
export const selectError = (state) => state.instructors.error;
