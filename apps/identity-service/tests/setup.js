// Test setup file
require('dotenv').config({ path: '.env.test' });

// Increase timeout for integration tests
jest.setTimeout(10000);
