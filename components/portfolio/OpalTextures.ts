/**
 * Opal Card Texture Configuration
 * 
 * Replace these URLs with your own texture images as needed.
 * You can use local images from /src/imports or external URLs.
 */

export interface TextureSet {
  // Opal/Pearl textures for card backgrounds
  opal: string[];
  
  // Copper/Metal textures for accent elements
  copper: string[];
}

export const DEFAULT_TEXTURES: TextureSet = {
  // Opal/Pearl background textures
  opal: [
    "https://images.unsplash.com/photo-1728451151815-0038b7211c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMHRleHR1cmUlMjBzaGltbWVyfGVufDF8fHx8MTc2ODY4MDEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1660464615610-00116197fefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcmlkZXNjZW50JTIwb3BhbCUyMHN1cmZhY2V8ZW58MXx8fHwxNzY4NjgwMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    // Add more opal textures here
  ],
  
  // Copper/Metal textures for accents
  copper: [
    "https://images.unsplash.com/photo-1645223041544-db050029ad97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjBtZXRhbCUyMHRleHR1cmV8ZW58MXx8fHwxNzY4NjgwMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759141274832-129d1e05cacf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzaGVkJTIwY29wcGVyJTIwc3VyZmFjZXxlbnwxfHx8fDE3Njg2ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1744035858093-d8de2d27ec15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbGxpYyUyMGJyb256ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzY4NjgwMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    // Add more copper textures here
  ],
};

/**
 * Helper to get a texture from the set by index
 * Falls back to the first texture if index is out of bounds
 */
export function getOpalTexture(index: number = 0): string {
  return DEFAULT_TEXTURES.opal[index] || DEFAULT_TEXTURES.opal[0];
}

export function getCopperTexture(index: number = 0): string {
  return DEFAULT_TEXTURES.copper[index] || DEFAULT_TEXTURES.copper[0];
}
