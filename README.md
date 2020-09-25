# react-socketio-hooks

> react hooks for working with socketIO webSockets

[![NPM](https://img.shields.io/npm/v/react-socketio-hooks.svg)](https://www.npmjs.com/package/react-socketio-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-socketio-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-socketio-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [GypsyDangerous](https://github.com/GypsyDangerous)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
