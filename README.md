# Xyranthian Design System

An open source design system for educational websites.

## 🖋 Font Setup

Our design system uses **Sora**, **Inter**, and **JetBrains Mono** as foundational typefaces.

You have two options for using these fonts:


### ✅ Option 1: Use our pre-bundled CSS (Recommended)

The easiest way to get started is to import our pre-configured CSS file. This automatically loads all required fonts from Google Fonts and applies them globally.

**Usage:**

```ts
// In your app entry point (e.g. index.ts or App.tsx)
import '@zyridian/xyranthian/styles/fonts.css';
```
This will load all fonts via Google Fonts and make them globally available to your app.

This will:

- Import Sora, Inter, and JetBrains Mono

- Define CSS variables you can use (optional)

- Apply global availability for all components

### 🛠 Option 2: Install Fonts Manually

If you prefer manual font control, you can import the fonts directly in your global styles.

**Step 1: Import from Google Fonts**
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono&family=Sora:wght@600;700&display=swap');
```
**Step 2: Set Global Font Defaults**
```
body {
  font-family: 'Inter', sans-serif;
}
```
You may also set font variables or utility classes depending on your setup.

