# Custom Domain Setup Guide

## Current Domain Configuration

**Production Domain**: [audit.machin3.space](https://audit.machin3.space)

## Setup Status

✅ **DNS Configuration**: Domain is resolving to Cloudflare  
✅ **HTTPS/SSL**: Cloudflare automatic SSL enabled  
⚠️ **Deployment Status**: Waiting for first deployment to `live-deploy` branch  

## Current Configuration

### 1. DNS Records
The domain `audit.machin3.space` should have a CNAME record pointing to your Cloudflare Pages project:

```
Type: CNAME
Name: audit
Value: machin3-bas3.pages.dev (or your specific Pages URL)
Proxy: Enabled (orange cloud)
```

### 2. Cloudflare Pages Dashboard
In your Cloudflare account:
1. Navigate to **Pages** → **machin3-bas3**
2. Go to **Custom domains**
3. Verify `audit.machin3.space` is listed and active

### 3. Security Settings
The domain is currently showing a 403 Forbidden response, which could be due to:
- Cloudflare security rules (Bot Fight Mode, Security Level, etc.)
- Waiting for initial deployment
- Custom firewall rules

## Deployment Process

### First Deployment
To deploy the site to your custom domain:

1. **Push to `live-deploy` branch**:
   ```bash
   git push origin main:live-deploy
   ```

2. **Monitor deployment**:
   - Check GitHub Actions: https://github.com/M0naMach/Machin3-Bas3/actions
   - Check Cloudflare Dashboard: https://dash.cloudflare.com/

3. **Verify deployment**:
   ```bash
   curl -I https://audit.machin3.space
   # Should return HTTP 200 OK after successful deployment
   ```

### Subsequent Deployments
Any push to the `live-deploy` branch will trigger automatic deployment via GitHub Actions.

## Verification Steps

### Check DNS Resolution
```bash
# Verify DNS is resolving
dig audit.machin3.space

# Check CNAME record
dig audit.machin3.space CNAME
```

### Test HTTPS
```bash
# Test SSL certificate
curl -vI https://audit.machin3.space 2>&1 | grep -i ssl

# Check headers
curl -I https://audit.machin3.space
```

### Verify Deployment
```bash
# Check if site is accessible
curl https://audit.machin3.space

# Check response headers
curl -I https://audit.machin3.space | grep -i "cf-ray"
```

## Troubleshooting

### 403 Forbidden Error
If you're seeing a 403 error:
1. Check Cloudflare Security Level (should be Medium or lower)
2. Review Firewall Rules in Cloudflare Dashboard
3. Temporarily disable Bot Fight Mode
4. Check that the deployment has completed successfully
5. Verify the custom domain is properly linked in Pages settings

### DNS Not Resolving
1. Verify CNAME record in Cloudflare DNS settings
2. Wait for DNS propagation (can take up to 48 hours, usually < 5 minutes)
3. Clear local DNS cache:
   - macOS: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
   - Windows: `ipconfig /flushdns`
   - Linux: `sudo resolvectl flush-caches` (or `sudo systemd-resolve --flush-caches` on older systems)

### Deployment Failures
1. Check GitHub Actions logs for errors
2. Verify Cloudflare API token has correct permissions
3. Ensure `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` secrets are set

## Cloudflare Dashboard Access

1. **Pages**: https://dash.cloudflare.com/pages
2. **DNS**: https://dash.cloudflare.com/dns
3. **Analytics**: https://dash.cloudflare.com/analytics

## Next Steps

- [ ] Deploy to `live-deploy` branch to activate the site
- [ ] Verify 200 OK response from `audit.machin3.space`
- [ ] Configure additional security settings if needed
- [ ] Set up analytics and monitoring
- [ ] Configure custom error pages (404, 500)

## Related Files

- `wrangler.jsonc` - Cloudflare configuration
- `.github/workflows/deploy.yml` - Deployment workflow
- `README.md` - Main documentation with deployment info

---

**Last Updated**: 2026-01-30  
**Status**: Domain configured, awaiting first deployment
