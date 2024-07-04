import { useMutation } from '@tanstack/react-query';
import StackTrace from 'stacktrace-js';

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     window.setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

const getParsedStackTrace = (error: Error) => {
  return StackTrace.fromError(error)
    .then(() => 'StackTrace fails')
    .catch((err) => `Error StackTrace failed ${String(err)}`);
  // return resolveAfter2Seconds().then(() => 'Promises do work inside useMutation!');
};

export const useMutationHook = () => {
  const mutation = useMutation({
    mutationFn: async (error: string | Error = 'No stack trace found') => {
      const stackTraceMessage =
        typeof error === 'string' ? error : await getParsedStackTrace(error);
      console.log(stackTraceMessage);
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  });

  return {
    fireMutation: mutation.mutate,
  };
};
