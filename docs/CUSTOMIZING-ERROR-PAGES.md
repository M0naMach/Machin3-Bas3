# Customizing Error Pages

## ✅ YES! Your Custom Artwork WILL Be Used!

The error pages in this Next.js application are **fully customizable React components** that you own and control. Any images, text, or styling you add will be used in production when deployed to Cloudflare Pages.

## 📁 Location of Error Pages

- **404 Page**: `app/not-found.tsx`
- **Runtime Error Page**: `app/error.tsx`

## 🎨 What You Can Customize

### Everything is Customizable!

Since these are React components in your repository, you can customize:

1. **Images** - Add any custom artwork (PNG, JPG, SVG, GIF, WebP)
2. **Text** - All headings, descriptions, and button labels
3. **Styling** - Colors, fonts, layouts, animations
4. **Behavior** - Button actions, error handling logic
5. **Components** - Add new UI elements, icons, etc.

## 🖼️ How to Add Custom Images

### Step 1: Add Your Image to the Public Folder

Place your custom error artwork in the `/public` folder:

```
/public
  ├── error-404.png          ← Your custom 404 image
  ├── error-general.png      ← Your custom error image
  └── ... other files
```

### Step 2: Update the Error Page Component

#### For 404 Page (`app/not-found.tsx`):

Find the commented section that says `🎨 CUSTOMIZABLE: Add your own image here!` and replace it with:

```tsx
<div className="mb-8 flex justify-center">
  <Image 
    src="/error-404.png"        // Your image path
    alt="404 - Page Not Found" 
    width={500}                  // Adjust to your image size
    height={500}                 // Adjust to your image size
    className="w-full max-w-md"  // Responsive sizing
    priority                     // Load image immediately
  />
</div>
```

#### For Runtime Error Page (`app/error.tsx`):

Find the commented section and add:

```tsx
<div className="mb-8 flex justify-center">
  <Image 
    src="/error-general.png"
    alt="Something went wrong" 
    width={500} 
    height={500}
    className="w-full max-w-md"
    priority
  />
</div>
```

## 📝 How to Customize Text

### Changing the Heading

```tsx
{/* Change "404" to anything you want */}
<h1 className="font-title text-7xl md:text-[10rem] lg:text-[12rem] mb-6 tracking-wide opalescent-text leading-none">
  Oops!  {/* Your custom heading */}
</h1>
```

### Changing the Subtitle

```tsx
<p className="text-lg md:text-xl font-light text-foreground/90 mb-4">
  This page took a wrong turn  {/* Your custom subtitle */}
</p>
```

### Changing the Description

```tsx
<p className="text-base md:text-lg font-light leading-relaxed text-foreground/80 mb-12">
  Your custom description goes here. Be creative!
</p>
```

### Changing Button Text

```tsx
<span className="relative z-10">
  Take Me Home  {/* Your custom button text */}
</span>
```

## 🎭 Example: Full Customization with Image

Here's a complete example showing how to add a custom 404 page with your artwork:

```tsx
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background font-sans flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted to-card animate-pulse opacity-90"
        style={{ animationDuration: "8s" }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* YOUR CUSTOM IMAGE */}
        <div className="mb-8 flex justify-center">
          <Image 
            src="/my-awesome-404-art.png" 
            alt="Lost in the digital void" 
            width={600} 
            height={600}
            className="w-full max-w-lg animate-bounce"
            priority
          />
        </div>
        
        <div className="mb-8">
          {/* YOUR CUSTOM HEADING */}
          <h1 className="font-title text-7xl md:text-9xl mb-6 tracking-wide opalescent-text">
            Lost in Cyberspace?
          </h1>
          {/* YOUR CUSTOM SUBTITLE */}
          <p className="text-xl font-light text-foreground/90 mb-4">
            This page doesn't exist in our digital realm
          </p>
        </div>

        {/* YOUR CUSTOM DESCRIPTION */}
        <p className="text-lg leading-relaxed text-foreground/80 mb-12">
          Don't worry, even the best navigators get lost sometimes. 
          Let's get you back on track!
        </p>

        {/* YOUR CUSTOM BUTTONS */}
        <div className="flex gap-6 justify-center">
          <Link href="/" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg">
            Beam Me Home
          </Link>
          <Link href="/work" className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg">
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
```

## 🎨 Supported Image Formats

Next.js Image component supports:
- PNG (`.png`)
- JPEG (`.jpg`, `.jpeg`)
- WebP (`.webp`)
- AVIF (`.avif`)
- SVG (`.svg`)
- GIF (`.gif`) - including animated GIFs

## 💡 Tips for Best Results

### Image Optimization

1. **Size**: Keep images under 500KB for fast loading
2. **Dimensions**: Use at least 800x800px for clarity on all devices
3. **Format**: WebP offers best compression while maintaining quality
4. **Alt Text**: Always provide descriptive alt text for accessibility

### Responsive Design

The pages are already mobile-friendly, but when adding images:

```tsx
<Image 
  src="/your-image.png"
  alt="Description"
  width={600}
  height={600}
  className="w-full max-w-xs sm:max-w-md lg:max-w-lg"  // Responsive sizing
/>
```

### Animations

You can add animations to your images:

```tsx
className="animate-pulse"      // Gentle pulse
className="animate-bounce"     // Bouncing effect
className="animate-spin"       // Spinning (good for loading indicators)
```

## 🚀 Testing Your Changes

### 1. Run the Dev Server

```bash
npm run dev
```

### 2. Test the 404 Page

Visit: `http://localhost:3000/any-non-existent-page`

### 3. Test the Error Page

Create a temporary test page that throws an error, or trigger an error in your app.

### 4. Build for Production

Always test that your changes work with the production build:

```bash
npm run pages:build
```

This ensures your custom error pages are compatible with Cloudflare Edge Runtime.

## 📦 Deployment

Once you're happy with your custom error pages:

1. Commit your changes:
   ```bash
   git add app/not-found.tsx app/error.tsx public/your-images.png
   git commit -m "Add custom error page artwork"
   git push
   ```

2. Your changes will automatically deploy to Cloudflare Pages via CI/CD

3. Your custom artwork will be live! 🎉

## ❓ Common Questions

### Q: Do I need to configure Cloudflare to use these custom pages?
**A:** No! Next.js automatically uses these pages when they exist in your `app` directory.

### Q: Can I use SVG instead of PNG?
**A:** Absolutely! SVG works great and scales perfectly on all devices.

### Q: Can I add animations?
**A:** Yes! You can use CSS animations, Tailwind classes, or libraries like Framer Motion.

### Q: Will my images slow down the site?
**A:** Next.js automatically optimizes images, but try to keep them under 500KB for best performance.

### Q: Can I use external images from a URL?
**A:** Yes, but you'll need to configure the domain in `next.config.mjs`. Local images are recommended.

### Q: What if I want different images for light/dark mode?
**A:** You can conditionally render different images based on the theme! 

**For the error.tsx page (Client Component):**

```tsx
"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Error({ error, reset }) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  
  if (!mounted) return null
  
  const currentTheme = theme === 'system' ? systemTheme : theme
  
  return (
    <Image 
      src={currentTheme === 'dark' ? '/error-dark.png' : '/error-light.png'}
      alt="Error"
      width={500}
      height={500}
    />
  )
}
```

**For not-found.tsx (Server Component):**
Server Components can't use theme hooks directly. You have two options:
1. Convert to a Client Component by adding `"use client"` at the top
2. Use CSS to show/hide different images based on the `dark` class on the `<html>` element
```

## 🎯 Next Steps

1. **Create your artwork** - You now know it will definitely be used!
2. **Add it to `/public`** folder
3. **Update the error page components** with your image
4. **Customize the text** to match your brand voice
5. **Test locally** with `npm run dev`
6. **Build** with `npm run pages:build`
7. **Deploy** and enjoy your custom error pages! 🚀

---

**Remember**: These are YOUR components. You have complete creative freedom to make them uniquely yours! 🎨
