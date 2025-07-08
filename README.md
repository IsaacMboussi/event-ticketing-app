# 🎫 Event Ticketing App

A modern, responsive event ticketing application built with React, TypeScript, and Material-UI. Features a beautiful purple-themed design with animated backgrounds and smooth user interactions.

![Event Ticketing App](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Material-UI](https://img.shields.io/badge/Material--UI-7.0.2-blue?style=for-the-badge&logo=mui)
![Vite](https://img.shields.io/badge/Vite-6.3.4-purple?style=for-the-badge&logo=vite)

## ✨ Features

### 🎨 Modern Design
- **Purple Theme**: Beautiful light purple color scheme with gradients
- **Animated Backgrounds**: Cyber grid effects with floating particles
- **Glassmorphism**: Modern card designs with backdrop blur effects
- **Smooth Animations**: Hover effects and transitions throughout the app

### 📱 User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Loading States**: Skeleton loaders for better perceived performance
- **Search & Filter**: Advanced filtering by category, location, and date
- **Smooth Scrolling**: Enhanced navigation experience

### 🎯 Core Functionality
- **Event Browsing**: Browse events with beautiful cards
- **Event Details**: Detailed event information with ticket purchasing
- **Category Filtering**: Filter events by category (Music, Sports, Arts, etc.)
- **User Profiles**: User account management
- **Checkout Process**: Complete ticket purchasing flow
- **Create Events**: Event creation form for organizers

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IsaacMboussi/event-ticketing-app.git
   cd event-ticketing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.2.2
- **Build Tool**: Vite 6.3.4
- **UI Library**: Material-UI 7.0.2
- **Styling**: Emotion (CSS-in-JS)
- **Routing**: React Router DOM 7.5.3
- **State Management**: React Query 5.75.1
- **Icons**: Material-UI Icons 7.0.2
- **Date Handling**: Date-fns 4.1.0

## 📁 Project Structure

```
event-ticketing/
├── src/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── EventDetailsPage.tsx
│   │   ├── CreateEventPage.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── UserProfilePage.tsx
│   │   ├── CheckoutPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#b388ff`
- **Light Purple**: `#e7b9ff`
- **Dark Purple**: `#805acb`
- **Background**: `#0a0a0a` to `#1a1a2e`
- **Text**: White with various opacity levels

### Typography
- **Font Family**: Space Grotesk (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Optimized**: Letter spacing and line heights for readability

### Components
- **Cards**: Glassmorphism with hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Rounded inputs with focus states
- **Navigation**: Responsive navbar with smooth animations

## 📱 Pages Overview

### 🏠 Home Page
- Event grid with search and filtering
- Category chips for quick filtering
- Advanced filters (date range, price range)
- Loading skeletons and scroll-to-top button

### 🎫 Event Details
- Comprehensive event information
- Ticket quantity selection
- Purchase functionality
- Related events suggestions

### ➕ Create Event
- Multi-step form wizard
- Event details, location, and pricing
- Image upload and category selection
- Form validation and error handling

### 📂 Category Page
- Events filtered by category
- Search within category
- Location-based filtering
- Consistent card design

### 👤 User Profile
- User information display
- Attending events list
- Reviews and ratings
- Account settings

### 💳 Checkout
- Ticket summary
- Payment information
- Shipping details
- Order confirmation

## 🎯 Key Features

### Search & Filtering
- **Real-time Search**: Instant results as you type
- **Category Filtering**: Filter by event type
- **Location Filtering**: Find events near you
- **Date Range**: Filter by specific dates
- **Price Range**: Filter by ticket price

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Perfect layout for tablets
- **Desktop Enhanced**: Full features on larger screens
- **Touch Friendly**: Optimized for touch interactions

### Performance
- **Fast Loading**: Vite for rapid development
- **Code Splitting**: Lazy loading for better performance
- **Optimized Images**: Responsive image handling
- **Smooth Animations**: 60fps animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Future Enhancements

- [ ] User authentication and authorization
- [ ] Real-time notifications
- [ ] Payment integration (Stripe)
- [ ] Event recommendations
- [ ] Social sharing features
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Isaac Mboussi**
- GitHub: [@IsaacMboussi](https://github.com/IsaacMboussi)

## 🙏 Acknowledgments

- Material-UI for the component library
- Vite for the fast build tool
- React Query for state management
- Space Grotesk font from Google Fonts

---

⭐ **Star this repository if you found it helpful!**
