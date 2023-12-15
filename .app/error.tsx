'use client';

import ErrorBox from '@/components/CustomBox/ErrorBox';

function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorBox reset={reset} />;
}

export default GlobalError;
