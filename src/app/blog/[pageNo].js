import React from 'react';
import { useRouter } from 'next/router';

function PageNo() {
  const router = useRouter();
  const { pageNo } = router.query;

  return (
    <h1>My {pageNo} content </h1>
  );
}

export default PageNo;