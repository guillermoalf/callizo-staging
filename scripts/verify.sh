#!/bin/bash
set -e

echo "🔍 Running Callizo.OS verification..."

echo "📦 Checking dependencies..."
npm install

echo "🔷 Running TypeScript check..."
npx tsc --noEmit

echo "🧹 Running linter..."
npm run lint

echo "🏗️ Running build..."
npm run build

echo "✅ All checks passed — safe to create PR"
