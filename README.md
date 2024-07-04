# @tanstack/react-query, stacktrace-js, and vite

Repo to recreate this error from `@tanstack/react-query`:

```text
TypeError: _(...).resumePausedMutations is not a function
    at kf.resumePausedMutations (queryClient.js:191:34)
    at queryClient.js:39:20
    at focusManager.js:53:7
    at Set.forEach (<anonymous>)
    at bf.onFocus (focusManager.js:52:20)
    at focusManager.js:39:14
    at r (focusManager.js:12:32)
```

To recreate:

- `npm install`
- `npm run build`
- `npm run preview`


To see that the error is isolated to `stacktrace-js`, uncomment the lines in `useMutationHook.ts` to substitute a timeout promise instead of the call to `stacktrace-js` and run the above steps again.