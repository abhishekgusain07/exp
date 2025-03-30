#!/usr/bin/env node

// This script runs the database seeding process
// Usage: npm run seed-db

require('dotenv').config();

async function main() {
  try {
    console.log('📦 Importing seed module...');
    
    // Use dynamic import for the TypeScript file
    const { default: seed } = await import('../dist/db/seed.js');
    
    console.log('🚀 Running database seeding...');
    await seed();
    
    console.log('✨ Database seeding completed successfully');
  } catch (error) {
    console.error('💥 Error running seed script:', error);
    process.exit(1);
  }
}

main(); 