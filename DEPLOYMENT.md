# GitHub Pages Deployment Guide

This guide will help you deploy the Dev Travels website to GitHub Pages.

## 📋 Prerequisites

- Git repository initialized (already done ✓)
- GitHub account
- Repository pushed to GitHub (https://github.com/mkdhruv09/devtravels.git)

## 🚀 Deployment Steps

### Step 1: Push Your Code to GitHub

Make sure all your files are committed and pushed to the `main` branch:

```bash
# Add all files
git add .

# Commit changes
git commit -m "Add Dev Travels website with real vehicle images"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/mkdhruv09/devtravels
2. Click on **Settings** (top right)
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. The workflow will automatically deploy your site

### Step 3: Wait for Deployment

- The GitHub Actions workflow will automatically run when you push to `main`
- Go to the **Actions** tab in your repository to see the deployment progress
- Once complete (green checkmark ✓), your site will be live!

### Step 4: Access Your Website

Your website will be available at:
```
https://mkdhruv09.github.io/devtravels/
```

## 🔄 Automatic Updates

Every time you push changes to the `main` branch, GitHub Pages will automatically rebuild and deploy your website.

## 📝 Manual Deployment

You can also trigger a manual deployment:

1. Go to the **Actions** tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## ✅ Verification

After deployment, verify that:
- [ ] Website loads correctly
- [ ] All images (logo, vehicles) display properly
- [ ] Navigation works smoothly
- [ ] Forms are functional
- [ ] Responsive design works on mobile

## 🛠️ Troubleshooting

### Images Not Loading
If images don't load, ensure:
- All image files are committed to the repository
- Image paths in HTML are relative (not absolute)
- File names match exactly (case-sensitive)

### 404 Error
If you get a 404 error:
- Wait a few minutes for DNS propagation
- Check that GitHub Pages is enabled in Settings
- Verify the repository is public

### Workflow Fails
If the GitHub Actions workflow fails:
- Check the Actions tab for error messages
- Ensure the workflow file is in `.github/workflows/deploy.yml`
- Verify you have the correct permissions set

## 📱 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. In GitHub Settings > Pages, add your custom domain
3. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `mkdhruv09.github.io`

## 🎉 Success!

Once deployed, share your website:
- **Live URL**: https://mkdhruv09.github.io/devtravels/
- **Repository**: https://github.com/mkdhruv09/devtravels

---

**Need Help?**
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
