#!/bin/bash

echo "🌱 Setting up Plant Recommender folder structure..."

# ── Create all folders ───────────────────────────────────────────────────────
mkdir -p backend/routes
mkdir -p backend/models
mkdir -p backend/services
mkdir -p backend/data
mkdir -p frontend/src/components
mkdir -p frontend/public

# ── Move backend files ───────────────────────────────────────────────────────
[ -f recommend.js ]      && mv recommend.js      backend/routes/
[ -f SensorReading.js ]  && mv SensorReading.js  backend/models/
[ -f trefleService.js ]  && mv trefleService.js  backend/services/
[ -f plants.js ]         && mv plants.js         backend/data/
[ -f server.js ]         && mv server.js         backend/
[ -f package.json ]      && mv package.json      backend/
[ -f package-lock.json ] && mv package-lock.json backend/
[ -f .env ]              && mv .env              backend/

# ── Move frontend files ──────────────────────────────────────────────────────
[ -f App.jsx ]           && mv App.jsx           frontend/src/
[ -f App.css ]           && mv App.css           frontend/src/
[ -f index.js ]          && mv index.js          frontend/src/
[ -f SensorCard.jsx ]    && mv SensorCard.jsx    frontend/src/components/
[ -f PlantCard.jsx ]     && mv PlantCard.jsx     frontend/src/components/
[ -f SensorChart.jsx ]   && mv SensorChart.jsx   frontend/src/components/
[ -f HistoryTable.jsx ]  && mv HistoryTable.jsx  frontend/src/components/
[ -f index.html ]        && mv index.html        frontend/public/

# If there's a second package.json already in frontend, skip — otherwise create one
if [ ! -f frontend/package.json ]; then
cat > frontend/package.json << 'EOF'
{
  "name": "plant-recommender-frontend",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "recharts": "^2.12.7"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "proxy": "http://localhost:5000",
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
EOF
fi

# ── Remove old node_modules (was installed in wrong place) ───────────────────
[ -d node_modules ] && rm -rf node_modules && echo "🗑  Removed misplaced node_modules"

# ── Install backend dependencies ─────────────────────────────────────────────
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# ── Install frontend dependencies ────────────────────────────────────────────
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Done! Your folder structure is now:"
echo ""
find . -not -path "*/node_modules/*" -not -path "*/.git/*" | sort | head -40
echo ""
echo "👉 Now open TWO terminals:"
echo ""
echo "   Terminal 1:  cd backend  &&  npm run dev"
echo "   Terminal 2:  cd frontend &&  npm start"
