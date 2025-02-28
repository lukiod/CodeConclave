// client/src/__tests__/setup.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// Extend expect with testing-library matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});