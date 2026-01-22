# How to Add Your Photo

## Steps

1. **Add your photo to the public folder:**
   - Create a `public` folder in the root directory if it doesn't exist
   - Add your photo (e.g., `profile.jpg` or `mutakilu.jpg`)
   - Recommended size: 800x800px or larger (square aspect ratio works best)
   - Formats: JPG, PNG, or WebP

2. **Update the homepage (`app/page.tsx`):**
   - Find the commented section that says "Uncomment and update when you have your photo"
   - Uncomment the `Image` component
   - Update the `src` path to match your photo filename
   - Example: If your photo is `public/profile.jpg`, use `src="/profile.jpg"`

3. **Remove the placeholder:**
   - Delete or comment out the placeholder `div` that contains "Your Photo Here"

## Example

```tsx
<Image
  src="/profile.jpg"  // Your photo filename
  alt="Mutakilu Mukailu"
  fill
  className="object-cover"
  priority
/>
```

## Tips

- Use a high-quality, professional headshot
- Square images work best for the circular/rounded design
- Ensure good lighting and a clean background
- The image will be automatically optimized by Next.js
