# College Event Management Platform

A modern web application for managing college events built with Next.js 14, TypeScript, and shadcn/ui.

## Features

### 🏠 Dashboard Home Page (`/`)

- **Responsive event grid layout** displaying all events
- **Custom EventCard components** with placeholder images, titles, dates, times, and descriptions
- **Empty state** with friendly message and "Add Event" button when no events exist
- **Client-side navigation** using Next.js Link components

### ➕ Add Event Page (`/add-event`)

- **Comprehensive form** with validation using `react-hook-form` and `zod`
- **Form fields**: Title, Description, Date, Time, Note, Important Instructions
- **Live preview** showing how the event card will appear
- **Preview modal** for mobile responsiveness
- **Professional form validation** with error messages

### 📋 Event Details Page (`/events/[id]`)

- **Three-tab interface**: Event Info, Participants, and Announcements

#### Event Info Tab

- **Complete event details** in a clean, readable layout
- **Quick stats sidebar** showing registration numbers
- **Edit button** for event management

#### Participants Tab

- **Analytics placeholders** for registration trends (line chart and pie chart)
- **Searchable and filterable data table** with columns for Name, Email, College, Phone, and Status
- **CSV export functionality**
- **Status filtering** (All, Registered, Confirmed, Cancelled)

#### Announcements Tab

- **Announcement creation form** with Title and Message fields
- **List of existing announcements** in card format
- **Timestamp display** for each announcement

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: react-hook-form with zod validation
- **Icons**: Lucide React

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Dashboard home page
│   ├── add-event/
│   │   └── page.tsx        # Add event form
│   └── events/
│       └── [id]/
│           └── page.tsx    # Event details with tabs
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── event-card.tsx     # Event card component
│   ├── data-table.tsx     # Participants table
│   └── event-preview.tsx  # Event preview component
└── lib/
    ├── types.ts            # TypeScript interfaces
    ├── data.ts             # Mock data and helper functions
    └── utils.ts            # Utility functions
```

## Data Models

### Event Interface

- `id`, `title`, `description`, `date`, `time`
- `note`, `importantInstructions`, `image`
- `createdAt`, `updatedAt`

### Participant Interface

- `id`, `eventId`, `name`, `email`, `college`, `phone`
- `status` (registered | confirmed | cancelled)
- `registeredAt`

### Announcement Interface

- `id`, `eventId`, `title`, `message`, `createdAt`

## Getting Started

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Start development server**:

   ```bash
   yarn dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features in Detail

### Form Validation

- **Zod schema validation** ensures data integrity
- **Real-time validation** with helpful error messages
- **TypeScript integration** for type safety

### Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Adaptive layouts** that work on all screen sizes
- **Touch-friendly interactions** for mobile devices

### User Experience

- **Smooth transitions** and hover effects
- **Loading states** and feedback messages
- **Intuitive navigation** with breadcrumbs and back buttons
- **Empty states** with helpful guidance

### Data Management

- **Mock data** included for demonstration
- **Helper functions** for data formatting and filtering
- **CSV export** functionality for participant data
- **Search and filter** capabilities

## Customization

The application is designed to be easily customizable:

- **Theme**: Modify `tailwind.config.js` for custom colors and spacing
- **Components**: All components are modular and can be easily modified
- **Data**: Replace mock data with real API calls
- **Validation**: Extend zod schemas for additional fields

## Future Enhancements

- **Image upload** for event images
- **Email notifications** for announcements
- **Real-time updates** with WebSocket integration
- **Advanced analytics** with chart libraries
- **User authentication** and role management
- **Event categories** and tagging system

## Contributing

This project follows clean code principles and best practices:

- **TypeScript** for type safety
- **Component-based architecture** for reusability
- **Consistent naming conventions**
- **Comprehensive error handling**
- **Responsive design patterns**

---

Built with ❤️ for college event management
