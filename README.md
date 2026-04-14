# To-Do List Web App

A modern, responsive task management web application built with vanilla JavaScript, HTML5, and CSS3. Manage your pending and completed tasks with an elegant and intuitive user interface.

## Features

 **Modern Design**
- Beautiful gradient background and smooth animations
- Responsive layout that works on desktop and mobile devices
- Professional color scheme with purple gradient theme

 **Task Management**
- Create tasks with title and description
- Mark tasks as complete
- Edit existing tasks
- Delete tasks
- Automatic task categorization (Pending/Completed)

**Data Persistence**
- Tasks are saved to browser's localStorage
- Data persists across browser sessions
- No server required
 **User Experience**
- Smooth transitions and hover effects
- Keyboard support (Enter to move between fields, Ctrl+Enter to submit)
- Clear visual feedback for all interactions
- Timestamps for task creation and completion

## Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with:
  - Flexbox & CSS Grid for layouts
  - Gradient backgrounds
  - CSS animations and transitions
  - Media queries for responsive design
- **JavaScript (Vanilla)** - No frameworks, pure ES6+ JavaScript
  - DOM manipulation
  - LocalStorage API for data persistence
  - Event handling

### Storage
- **Browser LocalStorage** - Client-side data persistence

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or server required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meenakshiii-07/OIBSIB.git
cd todo-app
```

2. Open the app:
   - **Option 1:** Directly open `index.html` in your browser
   - **Option 2:** Use a local server (Python):
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Usage

1. **Add a Task:**
   - Enter a task title in the input field
   - Add a description in the textarea
   - Click "Add Task" or press Ctrl+Enter

2. **Complete a Task:**
   - Click "Complete" button on a pending task
   - Task automatically moves to the Completed section

3. **Edit a Task:**
   - Click "Edit" button to modify the title or description
   - Confirm the changes

4. **Delete a Task:**
   - Click "Delete" button to remove a task
   - Task is permanently removed

## File Structure

```
todo-app/
├── index.html      # HTML structure and layout
├── style.css       # Styling and animations
├── script.js       # JavaScript logic and functionality
└── README.md       # Project documentation
```

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Style Features
- Gradient purple theme (667eea to 764ba2)
- Smooth animations on page load
- Card-based design with hover effects
- Color-coded buttons (blue: complete, orange: edit, red: delete)
- Responsive two-column layout (single column on mobile)

### JavaScript Features
- Task array management
- LocalStorage sync
- Dynamic DOM rendering
- Event-driven architecture
- Keyboard event handling
- DateTime formatting

## Local Development

No build process needed! Simply edit the files and refresh your browser to see changes.

### Tips for Development
- Use browser DevTools to inspect localStorage: `Application` → `Local Storage`
- Check the console for any errors
- All data is stored locally - no backend required

## Future Enhancements

Potential features for future versions:
- Task categories/tags
- Priority levels
- Due dates
- Search and filter functionality
- Dark mode toggle
- Export tasks to CSV/PDF
- Cloud sync with backend

## License

This project is open source and available for personal and educational use.

## Author

Created by Meenakshi

---

**Enjoy organizing your tasks with style! 🚀**
