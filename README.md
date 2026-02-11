# DigiSpace Dashboard – Frontend Developer Task

This project is an implementation of the DigiSpace analytics dashboard based on the provided static design.
The goal is to achieve a close-to-pixel-perfect layout at a fixed desktop resolution using React and TypeScript.

## Resolution

- **Target design resolution**: **1440 × 810** (desktop, non‑responsive)
- The dashboard scales down slightly on smaller viewports while preserving the aspect ratio but is optimised for the above size.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler/Dev server**: Vite
- **Charts**: Apache ECharts via `echarts-for-react`
- **Styling**: Hand‑crafted CSS (no utility framework)

## Project Structure

- `src/App.tsx` – Main layout (sidebar, top header, and card grid)
- `src/components/LightsCard.tsx` – Lights dial card
- `src/components/WaterCard.tsx` – Water consumption card
- `src/components/CarbonCard.tsx` – Carbon intensity donut chart
- `src/components/EnergyCard.tsx` – Energy consumption bar chart
- `src/components/FootfallCard.tsx` – Footfall line chart
- `src/style.css` – Global styles and detailed layout for the dashboard

## Running the Project

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`) in a desktop browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Design Notes

- Fonts, colours, paddings, and radii are tuned to closely match the provided design.
- The dashboard is intentionally fixed to a desktop layout; responsiveness is not the primary goal for this task.
- Charts are configured with custom colours and labels to mirror the visual style of the original mock.


