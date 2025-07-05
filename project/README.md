# Diagno-Dose AI - Personalized Drug Dosage Platform

A React-based application for personalized drug dosage recommendations using AI and blockchain technology.

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Build the project locally first:**
   ```bash
   cd project
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login to your account
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder from your project directory
   - Your site will be deployed instantly!

### Option 2: Deploy via Git Integration

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

### Option 3: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   cd project
   npm run build
   netlify deploy --prod --dir=dist
   ```

## 🔧 Build Configuration

The project includes:
- `netlify.toml` - Netlify configuration file
- `_redirects` - SPA routing support
- Vite build configuration

## 📁 Project Structure

```
project/
├── src/                 # Source code
├── dist/               # Build output (generated)
├── public/             # Static assets
├── netlify.toml        # Netlify configuration
├── _redirects          # Redirect rules
└── package.json        # Dependencies and scripts
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Environment Variables

If you need to add environment variables for your deployment:

1. Go to your Netlify site dashboard
2. Navigate to Site settings → Environment variables
3. Add any required environment variables

## 📝 Notes

- The app uses React Router for client-side routing
- All routes redirect to `index.html` for SPA functionality
- The build output is in the `dist` directory
- Node.js version 18 is specified for the build environment 