# RealtyAI Launch Guide (GitHub Pages + Namecheap + Zoho)

This guide is written for non-technical setup.

## 1) Put this website on GitHub

1. Create a new public GitHub repo named realtyai-website.
2. Upload all files from this folder into the root of that repo.
3. Commit and push to the main branch.

If you use command line:

- git init
- git add .
- git commit -m "Initial RealtyAI website"
- git branch -M main
- git remote add origin https://github.com/YOUR_USERNAME/realtyai-website.git
- git push -u origin main

## 2) Turn on GitHub Pages

1. Open the repo in GitHub.
2. Go to Settings -> Pages.
3. Source: Deploy from a branch.
4. Branch: main, Folder: / (root).
5. Save.
6. Wait for deployment to complete.

You should get a temporary URL like:
https://YOUR_USERNAME.github.io/realtyai-website/

## 3) Connect your domain realtyaihq.com in GitHub

1. In Settings -> Pages, set Custom domain to realtyaihq.com.
2. Save.
3. Keep "Enforce HTTPS" enabled (turn it on after certificate is issued).
4. This repo already includes the CNAME file with realtyaihq.com.

## 4) Add DNS records in Namecheap

Open Namecheap -> Domain List -> Manage -> Advanced DNS.

Add these records for GitHub Pages:

- Type: A | Host: @ | Value: 185.199.108.153 | TTL: Automatic
- Type: A | Host: @ | Value: 185.199.109.153 | TTL: Automatic
- Type: A | Host: @ | Value: 185.199.110.153 | TTL: Automatic
- Type: A | Host: @ | Value: 185.199.111.153 | TTL: Automatic
- Type: CNAME | Host: www | Value: YOUR_USERNAME.github.io | TTL: Automatic

Important:
- Replace YOUR_USERNAME with your actual GitHub username.
- Keep existing MX records for Zoho Mail unchanged.

DNS may take a few minutes to 24 hours to fully propagate.

## 5) Point support subdomain to Zoho Desk

Goal: support.realtyaihq.com opens your Zoho Desk portal.

1. In Zoho Desk, open Setup -> Channels -> Help Center -> Domain Mapping (wording can vary by Zoho region).
2. Enter subdomain: support.realtyaihq.com.
3. Zoho will show a target CNAME value.
4. In Namecheap, add:
   - Type: CNAME
   - Host: support
   - Value: (the exact CNAME target Zoho gave you)
5. Complete verification in Zoho Desk.
6. After verification, your support portal should open at support.realtyaihq.com.

## 6) Update website config placeholders

Edit assets/js/config.js and replace placeholders:

- updatesRepoUrl -> your real updates repo releases URL
- appDownloadUrl -> your latest release download URL
- supportPortalUrl -> your final Zoho support portal URL
- knowledgeBaseUrl -> your final Zoho knowledge base URL

## 7) Final checks

1. Visit:
   - https://realtyaihq.com
   - https://www.realtyaihq.com
   - https://realtyaihq.com/support-portal.html
2. Confirm padlock SSL appears in browser.
3. Confirm support buttons open Zoho portal.
4. Confirm app download and release links are correct.
5. Submit your sitemap to Google Search Console (optional but recommended).

## 8) Ongoing updates

To update content later:

1. Edit files locally.
2. Commit and push to main.
3. GitHub Pages redeploys automatically.

## 9) Suggested structure in Zoho Desk knowledge base

Create these article categories:

- Installation Guide
- First-Time Setup
- License and Access
- AI Provider Setup and API Keys
- Local AI / Ollama Setup
- Listing Generator Guide
- Dashboard Guide
- AI Studio Guide
- Portfolio Guide
- PDF Export Guide
- Update Troubleshooting
- Common Errors and Fixes
