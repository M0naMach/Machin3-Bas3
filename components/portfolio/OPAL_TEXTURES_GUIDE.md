# Opal Card Texture Customization Guide

This guide explains how to swap and customize textures for your Opal Cards.

## Quick Start

### Option 1: Change Default Textures (Affects All Cards)

Edit `/src/app/components/OpalTextures.ts`:

```typescript
export const DEFAULT_TEXTURES: TextureSet = {
  opal: [
    "YOUR_OPAL_TEXTURE_1_URL",
    "YOUR_OPAL_TEXTURE_2_URL",
    // Add as many as you want
  ],
  
  copper: [
    "YOUR_COPPER_TEXTURE_1_URL",
    "YOUR_COPPER_TEXTURE_2_URL",
    "YOUR_COPPER_TEXTURE_3_URL",
    // Add as many as you want
  ],
};
```

### Option 2: Custom Textures Per Card

Pass texture URLs directly to individual cards:

```tsx
<OpalCard
  title="My Card"
  opalTexture="https://your-custom-opal-texture.jpg"
  copperTexture="https://your-custom-copper-texture.jpg"
  accentBarTexture="https://your-custom-bar-texture.jpg"
  copperAccent
/>
```

### Option 3: Use Local Images

1. Place your texture images in `/src/imports/`
2. Import them in your component:

```tsx
import myOpalTexture from "@/imports/my-opal-texture.jpg";
import myCopperTexture from "@/imports/my-copper-texture.png";

// Then use them:
<OpalCard
  title="My Card"
  opalTexture={myOpalTexture}
  copperTexture={myCopperTexture}
/>
```

## Texture Properties Explained

### `opalTexture`
- **Used on:** Card background
- **Best for:** Pearl, opal, iridescent, marble textures
- **Blend mode:** soft-light at 30% opacity
- **Recommended:** High-res images with subtle shimmer/variation

### `copperTexture`
- **Used on:** Icon containers
- **Best for:** Copper, bronze, brass, metallic textures
- **Blend mode:** multiply at 50% opacity
- **Recommended:** Brushed metal, oxidized copper

### `accentBarTexture`
- **Used on:** Bottom copper accent bar (when `copperAccent={true}`)
- **Best for:** Brushed copper, polished metal textures
- **Blend mode:** multiply at 60% opacity
- **Recommended:** Horizontal brushed textures work best

## Finding Great Textures

### Recommended Search Terms:
- **Opal:** "mother of pearl", "iridescent", "opal texture", "pearl shimmer"
- **Copper:** "brushed copper", "oxidized copper", "bronze texture", "metallic surface"

### Image Tips:
- ✅ High resolution (1080px+)
- ✅ Even lighting
- ✅ Subtle patterns work better than extreme contrasts
- ✅ Seamless/tileable textures ideal but not required
- ❌ Avoid images with strong directional lighting
- ❌ Avoid busy patterns that distract from content

## Advanced: Rotating Through Multiple Textures

You can add variety by using different textures from your array:

```tsx
import { getOpalTexture, getCopperTexture } from "@/app/components/OpalTextures";

<OpalCard
  title="Card 1"
  opalTexture={getOpalTexture(0)}  // First opal texture
  copperTexture={getCopperTexture(0)}
/>

<OpalCard
  title="Card 2"
  opalTexture={getOpalTexture(1)}  // Second opal texture
  copperTexture={getCopperTexture(1)}
/>
```

## Current Default Textures

The system currently uses these Unsplash images:

**Opal Textures:**
- Index 0: Pearl shimmer texture
- Index 1: Iridescent opal surface

**Copper Textures:**
- Index 0: Copper metal texture
- Index 1: Brushed copper surface
- Index 2: Metallic bronze texture

Replace these in `OpalTextures.ts` to change the defaults globally!
