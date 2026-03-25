# @fabric-msft/svg-icons

This library is a publicly available collection of SVG icons for use in Microsoft Fabric platform extension development.

To use these icons, import the package into your project, then use individual SVG files as an image source or as an SVG.

## Bundle Size Optimization

This package is optimized for tree-shaking. When you import individual icons, only those icons will be included in your bundle - not the entire icon library. Modern bundlers like Webpack, Rollup, and Vite will automatically eliminate unused icons.

```javascript
// ✅ Recommended: Named imports - only Activator20Item will be in your bundle
import { Activator20Item } from "@fabric-msft/svg-icons";

// Also works, same result
import { Activator20Item, Apps24Item } from "@fabric-msft/svg-icons";
```

These icons can be implemented a number of ways:

### Implement as React Component

```javascript
import { Activator20Item } from "@fabric-msft/svg-icons";

function App() {
  return (
    <div>
      <h1>My SVG Icon</h1>
      <Activator20Item />
    </div>
  );
}

export default App;
```

Each SVG is its own React component that accepts standard SVG props. With tree-shaking enabled, only the icons you import will be included in your final bundle, keeping your application size minimal.

### Direct File Import

```javascript
import React from "react";
import { ReactComponent as AISkillsIcon } from "@fabric-msft/svg-icons/ai_skills_20_item.svg";

const Component = () => {
  return <AISkillsIcon />;
};
```

### Using a Path

```javascript
<img
  src="node_modules/@fabric-msft/svg-icons/ai_skills_20_item.svg"
  alt="Warning!"
/>
```
