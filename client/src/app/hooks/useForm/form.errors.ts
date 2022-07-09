export const ERRORS = {
  SSN: 'Invalid SSN',
  REQUIRED: 'This field is required',
  MIN_LENGTH: (min: number) =>
    `This field must be at least ${min} character${min !== 1 ? 's' : ''} long`,
};
