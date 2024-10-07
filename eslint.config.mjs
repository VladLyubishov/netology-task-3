import globals from "globals";


export default [
  {
    "name": "react-starter",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "lint": "ESLINT_USE_FLAT_CONFIG=true npx eslint . --report-unused-disable-directives --max-warnings 0 && stylelint '**/*.css' --max-warnings 0",
      "lint:fix": "eslint . --ext js,jsx --fix && stylelint '**/*.css' --fix",
      "preview": "vite preview",
      "prettier": "prettier . --check --ignore-unknown",
      "prettier:fix": "prettier . -w"
    },
    "dependencies": {
      "ramda": "^0.30.1",
      "react": "^18.3.1",
      "react-dom": "^18.3.1"
    },
    "devDependencies": {
      "@types/ramda": "^0.30.1",
      "@types/react": "^18.3.3",
      "@types/react-dom": "^18.3.0",
      "@vitejs/plugin-react-swc": "^3.7.0",
      "eslint": "^9.7.0",
      "eslint-config-prettier": "^9.1.0",
      "eslint-plugin-prettier": "^5.1.3",
      "eslint-plugin-react": "^7.34.3",
      "eslint-plugin-react-hooks": "^4.6.2",
      "eslint-plugin-react-refresh": "^0.4.8",
      "globals": "^15.8.0",
      "prettier": "^3.3.2",
      "stylelint": "^16.7.0",
      "stylelint-config-standard": "^36.0.1",
      "typescript": "^5.5.3",
      "typescript-eslint": "^7.16.0",
      "vite": "^5.3.3"
    },
    "overrides": {
      "eslint": "^9.7.0"
    },
    "volta": {
      "node": "22.1.0"
    }
  }
];