'use client'

import dynamic from 'next/dynamic';

// Quill touches `window` when it loads, so the editor only renders in the browser
const DashEdit = dynamic(() => import('./DashEdit'), {ssr: false});

export default DashEdit;
