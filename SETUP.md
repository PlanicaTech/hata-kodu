# Quick Setup Guide

## Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create PWA icons:**
   - You need to create two PNG icons:
     - `public/icons/icon-192.png` (192x192 pixels)
     - `public/icons/icon-512.png` (512x512 pixels)
   - You can use any image editor or online tool like:
     - https://realfavicongenerator.net/
     - https://www.pwabuilder.com/imageGenerator
     - Or create simple colored squares using ImageMagick:
       ```bash
       convert -size 192x192 xc:#3B82F6 public/icons/icon-192.png
       convert -size 512x512 xc:#3B82F6 public/icons/icon-512.png
       ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to http://localhost:3000

## Project Structure

- ✅ Next.js 14+ App Router setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS configured
- ✅ PWA manifest and service worker
- ✅ Search functionality with field filtering
- ✅ Detail page for individual codes
- ✅ Mobile-responsive design
- ✅ Offline support

## Notes

- The JSON data file is loaded client-side for offline functionality
- Search is performed client-side for instant results
- The app is fully functional offline after the first load
- Icons are required for PWA installation prompts to appear

