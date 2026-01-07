# Portfolio Dashboard

A production-grade **portfolio tracking dashboard** that allows users to upload a real investor Excel file, fetch **live market prices**, and visualize investments through a **clean, modern, fintech-style UI**.

This project focuses on **real-world constraints**, **robust data handling**, and **high-quality UI/UX**, rather than demo-level assumptions.

---

## Table of Contents

- About the Project
- Features
- Built With
- Architecture Overview
- Getting Started
- Usage
- Challenges & Solutions
- UI/UX Design Decisions
- Project Structure
- Future Improvements
- Author

---

## About the Project

This Portfolio Dashboard enables users to:

- Upload a portfolio Excel file (`.xlsx`)
- Parse real-world Excel data with merged headers and irregular formatting
- Fetch **live Current Market Prices (CMP)** from Yahoo Finance
- Calculate investment performance dynamically
- View data in a **sector-wise, expandable, and highly readable UI**

The project was built with a **production mindset**, focusing on reliability, clarity, and user experience.


---

## Features

- Upload portfolio via Excel (`.xlsx`)
- Live CMP fetching using Yahoo Finance
- Automatic calculations:
  - Investment
  - Current Value
  - Gain / Loss
  - Return %
- Sector-wise grouping and aggregation
- Expandable stock rows (details on demand)
- Fintech-style UI (cards instead of dense tables)
- Graceful handling of partial API failures
- Responsive and fast frontend

---

## Built With

### Frontend
- React
- Tailwind CSS
- Custom React Hooks
- Functional Components

### Backend
- Node.js
- Express.js
- yahoo-finance2

### Utilities
- xlsx (Excel parsing)
- Axios

---

## Architecture Overview

Frontend (React + Tailwind)

- Excel Upload
  - Robust Excel parsing (merged headers, empty rows)
- State Management
  - Custom hook (usePortfolioData)
- UI Components
  - PortfolioSummary (KPI cards)
  - SectorBlock (sector grouping)
  - SectorStats (sector totals)
  - StockRow (expandable rows)
- API Layer
  - Fetch live market data

Backend (Node.js + Express)

- Routes
  - /api/stocks/prices
- Controller
  - stockController.js
- Services
  - yahooService.js
    - Per-symbol error isolation
    - Optional in-memory caching
- Server
  - Express app with CORS & JSON middleware

---

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

---

### Installation

Frontend

```bash
cd frontend
npm install
npm run dev
```

## UI/UX Design Decisions

- Avoided raw HTML tables to reduce cognitive load
- Used summary KPI cards for instant portfolio understanding
- Grouped data by sector to improve scanability
- Introduced expandable stock rows for details on demand
- Focused heavily on spacing, hierarchy, and readability

The UI follows patterns used by modern fintech platforms such as Zerodha and Groww.

---

## Project Structure

frontend
- components
  - ExcelUpload.jsx
  - PortfolioSummary.jsx
  - SummaryCard.jsx
  - SectorBlock.jsx
  - SectorStats.jsx
  - StockRow.jsx
  - GainLossCell.jsx
- hooks
  - usePortfolioData.js
- utils
  - parseExcel.js
  - calculations.js
  - calculatePortfolioSummary.js
  - groupBySector.js
  - formatters.js
- services
  - api.js
- App.jsx

backend
- controllers
  - stockController.js
- services
  - yahooService.js
- routes
  - stockRoutes.js
- server.js

---

## Future Improvements

- Interactive charts for sector and stock performance
- Editable symbol mapping UI
- User authentication and saved portfolios
- Export portfolio reports (PDF / Excel)
- Alerts for price thresholds

---

## Author

Lavish Sainik  
Full-Stack Developer  
Focused on building robust, user-centric systems

---

## Final Note

This project was built with a production mindset, solving real-world data problems while prioritizing clarity, resilience, and usability.

If you are reviewing this project as part of an interview — thank you for your time.
