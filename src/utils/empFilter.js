export const empFilter = empList =>
  empList.filter(
    e =>
      e.avatar != 0 &&
      e.avatar != 'http://httpstat.us/503' &&
      e.avatar.split(',').length === 1 &&
      e.bio != '' &&
      e.bio.length > 4
  );
