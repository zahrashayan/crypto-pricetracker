Crypto Price Tracker

A responsive, real-time cryptocurrency price tracker built with **React**, **Vite**, and the **CoinGecko API**. This web app allows users to view market data, individual coin stats, and historical price trends with a clean and simple interface.

## 🚀 Features

- **Browse Top Cryptos**: See a list of trending coins with price, market cap, and rank.
- **Coin Detail View**: Click any coin to view its:
  - Logo & full name
  - Market cap
  - 24-hour high
  - Current price (based on selected currency)
  - Line chart of price over the last 10 days
- **Currency Switch**: Easily switch between currencies like USD, EUR, etc. (via context).
- **Historical Chart**: Google LineChart to visualize price trends of the last 10 days.
- **Fast Loading**: Built with Vite for optimal development experience.

## 🛠 Tech Stack

- **React** (Frontend UI)
- **Vite** (Fast build tool)
- **CoinGecko API** (Live crypto data)
- **Google Charts** (Price line chart)
- **React Router** (Navigation)
- **React Context API** (Global state for currency & coin data)

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/zahrashayan/crypto-pricetracker.git

# Navigate to the project folder
cd crypto-pricetracker

# Install dependencies
npm install

# Run the development server
npm run dev
