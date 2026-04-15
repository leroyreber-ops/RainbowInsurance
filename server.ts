import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/submit-form", async (req, res) => {
    try {
      const { name, email, phone, insuranceType, message, pageSource, subject } = req.body;
      const contactEmail = process.env.CONTACT_EMAIL || "rainbowins@hotmail.com";

      // Using FormSubmit.co as a simple backend email service
      // This keeps the email address hidden from the client-side code
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          insuranceType,
          subject: subject || `New Quote Request: ${insuranceType || 'General'}`,
          message,
          pageSource,
          _subject: `New Website Submission from ${name}`,
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok) {
        res.json({ success: true, message: "Form submitted successfully" });
      } else {
        console.error("FormSubmit error:", result);
        res.status(500).json({ success: false, message: "Failed to submit form" });
      }
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
