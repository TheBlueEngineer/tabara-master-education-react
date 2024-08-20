export const valueExists = (value: unknown): boolean => {
  return value !== null && value !== undefined && value !== '';
};

export const throttle = <T extends (...args: unknown[]) => unknown>(
  callbackFn: T,
  limit: number
) => {
  let wait = false;
  return (...args: Parameters<T>) => {
    if (!wait) {
      callbackFn(...args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};
