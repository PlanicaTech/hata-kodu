# Generating PWA Icons

To generate the required PWA icons, you can:

1. **Use an online tool**: Visit https://realfavicongenerator.net/ or https://www.pwabuilder.com/imageGenerator
2. **Use ImageMagick** (if installed):
   ```bash
   # Create a simple colored square icon
   convert -size 192x192 xc:#3B82F6 icon-192.png
   convert -size 512x512 xc:#3B82F6 icon-512.png
   ```
3. **Use any image editor**: Create 192x192 and 512x512 PNG images and save them as:
   - `public/icons/icon-192.png`
   - `public/icons/icon-512.png`

The icons should be square PNG images. For best results, use a simple logo or icon that represents your app.

