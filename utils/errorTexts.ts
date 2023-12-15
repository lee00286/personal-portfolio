type errorTexts = {
  [key: string]: {
    heading: string;
    tryAgain?: string;
    buttonText: string;
    buttonPath: string;
  };
};

export const errorTexts: errorTexts = {
  general: {
    heading: 'Something went wrong!',
    tryAgain: 'Try Again',
    buttonText: 'Return Home',
    buttonPath: '/'
  },
  404: {
    heading: 'This page could not found',
    buttonText: 'Return Home',
    buttonPath: '/'
  }
};
