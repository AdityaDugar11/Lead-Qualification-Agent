# Deployment Instructions

This guide outlines how to deploy this static frontend application to Vercel. Because it is a simple HTML file with no build step, deployment is instantaneous.

## Prerequisites
- A GitHub, GitLab, or Bitbucket account.
- A Vercel account linked to your Git provider.
- The `index.html` file committed to a Git repository.

## Step-by-Step Guide

1. **Commit your code**
   Ensure your `index.html` (and these documentation files) are pushed to your remote repository.

2. **Import Project into Vercel**
   - Log in to your Vercel dashboard.
   - Click **Add New...** and select **Project**.
   - Find your repository in the list and click **Import**.

3. **Configure Project**
   - **Project Name**: Choose a relevant name (e.g., `lead-capture-form`).
   - **Framework Preset**: Vercel will auto-detect "Other" since there is no `package.json`. Leave it as is.
   - **Build and Output Settings**: Leave these blank. Vercel automatically serves static files like `index.html` located in the root directory.

4. **Deploy**
   - Click the **Deploy** button.
   - Vercel will instantly provision a secure URL and serve your application.

5. **Configuration (Optional)**
   - If you need to change the n8n webhook URL dynamically without changing code, you could theoretically use Vercel Environment Variables, but since this is Vanilla JS without a build step, the URL must be hardcoded or injected via a separate script before deployment. For this version, ensure the URL is correct in `index.html` before pushing.
