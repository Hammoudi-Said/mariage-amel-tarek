# GitHub Pages Deployment Guide 🚀

This document explains how to deploy your wedding website to GitHub Pages.

## ✅ What's Already Configured

Your repository is now **fully ready** for GitHub Pages deployment with:

1. **Static Build**: All backend dependencies removed
2. **Google Form Integration**: RSVP functionality using your provided Google Form
3. **Correct Homepage URL**: Set to `https://Hammoudi-Said.github.io/mariage-amel-tarek`
4. **Router Configuration**: Basename configured for GitHub Pages
5. **GitHub Actions**: Automatic deployment workflow created
6. **Build Process**: Tested and working correctly

## 🚀 Deployment Steps

### Option 1: Automatic Deployment (Recommended)

**Choose one of these workflows** (all are configured and ready):

1. **Main Workflow** (`deploy.yml`): Uses `yarn install --prefer-offline --pure-lockfile`
2. **Simple Workflow** (`deploy-simple.yml`): Uses `yarn install --prefer-offline --pure-lockfile`  
3. **NPM Workflow** (`deploy-npm.yml`): Uses npm instead of yarn (fallback option)

**Steps:**
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy wedding website to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - The workflow will automatically run and deploy your site

3. **Access Your Website**:
   - Visit: https://Hammoudi-Said.github.io/mariage-amel-tarek
   - It may take a few minutes for the first deployment

### Option 2: Manual Deployment

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Deploy manually**:
   ```bash
   cd frontend
   yarn deploy
   ```

## 🔧 GitHub Repository Settings

### Required Settings:
1. **Repository must be public** (for GitHub Pages free tier)
2. **Actions must be enabled**:
   - Go to **Settings** → **Actions** → **General**
   - Enable "Allow all actions and reusable workflows"

### GitHub Pages Configuration:
- **Settings** → **Pages**
- **Source**: Deploy from a branch OR GitHub Actions
- If using branch: Select **gh-pages** branch and **/ (root)** folder

## 📁 What Was Changed

### Removed:
- ✅ FastAPI backend (`backend/` folder dependencies)
- ✅ MongoDB database requirements
- ✅ Backend API calls
- ✅ Unused `axios` dependency
- ✅ Backend URL from environment variables

### Added:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Comprehensive README documentation
- ✅ Root package.json for easier commands
- ✅ Production build configuration

### Kept:
- ✅ All React frontend functionality
- ✅ Beautiful wedding website design
- ✅ Google Form integration for RSVPs
- ✅ Responsive design and animations
- ✅ All existing pages and navigation

## 🧪 Testing Your Deployment

After deployment, test these features:
1. **Navigation**: All pages load correctly
2. **Routing**: URL changes work with browser back/forward
3. **RSVP Form**: "Confirmation" page opens Google Form
4. **Responsive Design**: Check mobile and desktop layouts
5. **Contact Information**: Phone numbers are clickable

## 🔄 Future Updates

To update your website:
1. Make changes to your code
2. Commit and push to main branch
3. GitHub Actions automatically rebuilds and deploys
4. Changes appear on your live site within minutes

## ⚠️ Troubleshooting

### Yarn Lockfile Error in GitHub Actions:
```
error Your lockfile needs to be updated, but yarn was run with `--frozen-lockfile`.
```
**Solution**: This has been fixed! The yarn.lock file is now updated and synchronized.

### Site Not Loading:
- Check GitHub Pages is enabled in repository settings
- Ensure repository is public
- Wait a few minutes for DNS propagation

### 404 Errors on Page Refresh:
- This is normal for client-side routing
- Users should use the navigation menu
- Consider adding a custom 404 page if needed

### Form Not Working:
- Verify the Google Form URL in `ConfirmationPage.jsx`
- Ensure Google Form is set to "Anyone can respond"

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions tab for deployment logs
2. Verify all settings match this guide
3. Contact the developer who set this up

---

**Your website is ready! 🎉**
**URL: https://Hammoudi-Said.github.io/mariage-amel-tarek**