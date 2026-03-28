# Agent Guide

Repo instructions for coding agents working in this project.

## Overview

- Stack: Vue 3 + TypeScript + Vite + Vue Router
- Desktop: Tauri 2 + Rust
- UI: Naive UI
- Styling: UnoCSS
- Platform: Windows desktop with a transparent, Mica-friendly visual baseline

## Must Follow

- Keep `pnpm run windows:dev` working.
- Preserve the current route and layout structure unless the task explicitly changes it.
- Prefer small, focused edits over broad refactors.
- Keep docs aligned with the real project state.

## Routing And Layout

- Define routes in `src/router/index.ts`.
- Top tabs are generated from route metadata in `src/components/Tabs.vue`.
- To show a page in the top tab bar, set both:
  - `meta.isTab: true`
  - `meta.tabsName: '...'`
- Keep route `name` stable because tabs use it as the menu key.
- Main pages belong under `DefaultLayout`.
- Settings pages belong under `SettingsLayout` unless the task requires otherwise.

## UI And Styling

- Follow existing patterns before introducing new abstractions.
- Prefer UnoCSS utilities for common styling.
- Use scoped CSS for component-local transitions, deep overrides, or styles that are awkward in utilities.
- Keep foreground content readable on top of the transparent/Mica window background.
- Do not replace the transparent window baseline with opaque full-window backgrounds unless requested.

## Tooling And Validation

- Use `pnpm` for package management and scripts.
- Keep Vite and Tauri dev URL alignment intact unless a coordinated change is required.
- Preserve the current auto-import and auto-component setup in `vite.config.ts` unless needed.
- Keep Rust-side changes isolated to `src-tauri/`.

Run what matches the scope of the change:

```bash
pnpm run lint
pnpm run build
pnpm run windows:dev
```

If the environment blocks a command, say so explicitly and verify changed files manually.

## Documentation

- Update both English and Chinese docs when behavior or conventions change.
- Keep examples consistent with current route names, scripts, and file layout.
- Keep guidance short, practical, and accurate.
