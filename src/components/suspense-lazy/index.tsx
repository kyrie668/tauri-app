import React, { Suspense, lazy } from 'react';

const SuspenseLazy = (props: any) => {
  return <Suspense fallback={<>...</>}>{React.createElement(lazy(props))}</Suspense>;
};

export default SuspenseLazy;
// import React, { Suspense, lazy } from 'react';

// const SuspenseLazy = (importFunc: () => Promise<{ default: React.ComponentType }>) => {
//   const LazyComponent = lazy(importFunc);
//   return (
//     <Suspense fallback={<>...</>}>
//       <LazyComponent />
//     </Suspense>
//   );
// };

// export default SuspenseLazy;