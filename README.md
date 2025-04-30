# Website Visitor Counter

A simple and customizable website visitor counter that can be implemented with client-side JavaScript (using localStorage) or server-side PHP.

## Features

- **Two Implementation Options**:
  - Client-side with JavaScript (uses browser localStorage)
  - Server-side with PHP (more persistent across devices)
- **Clean, responsive design** with CSS styling
- **Simple animation** when the counter updates
- **Easy to integrate** into any website

## Installation

### Client-Side Version (JavaScript)

1. Clone this repository or download the files:
   ```bash
   git clone https://github.com/iamaanahmad/Website-Visitor-Counter.git
   ```
2. Add these files to your project:
   - `index.html` (main HTML file)
   - `styles.css` (styling)
   - `script.js` (counter logic)

3. Include the counter in your HTML:
   ```html
   <div class="counter">
       <span>Visitors: </span>
       <span id="visitorCount">0</span>
   </div>
   <script src="script.js"></script>
   ```

### Server-Side Version (PHP)

1. Ensure your server supports PHP
2. Add `counter.php` to your project
3. Update the JavaScript in your HTML to fetch from the PHP counter:
   ```javascript
   fetch('counter.php')
       .then(response => response.text())
       .then(count => {
           document.getElementById('visitorCount').textContent = count;
       });
   ```

## Customization

You can easily customize the appearance by modifying the CSS:

```css
.counter {
    /* Your custom styles here */
    font-family: 'Your Font', sans-serif;
    color: #yourcolor;
    font-size: 1.5rem;
}
```

## How It Works

### JavaScript Version
- Uses `localStorage` to persist the visitor count between sessions
- Increments the counter on each page load
- Falls back to session-only counting if localStorage isn't available

### PHP Version
- Reads and increments a count stored in `count.txt`
- Provides a consistent count across all visitors
- Requires PHP support on your server

## Limitations

- **JavaScript version**:
  - Count is per-browser/per-device
  - Resets if users clear their browser storage
- **PHP version**:
  - Requires server-side processing
  - Needs write permissions for the count.txt file

## License

This project is open source and available under the [MIT License](LICENSE).
