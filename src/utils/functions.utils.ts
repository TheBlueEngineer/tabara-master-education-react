export const valueExists = (value: unknown): boolean => {
  return value !== null && value !== undefined && value !== '';
};
