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
      const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || "1befa18a-33ad-4ccb-a7e3-802a7825768a";

      // Using Web3Forms for reliable email delivery
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          phone,
          insuranceType,
          subject: subject || `New Quote Request from Rainbow Insurance Website`,
          message: message || `User ${name} requested a quote for ${insuranceType || 'General Insurance'}.

Source: ${pageSource || 'Main Website'}
Phone: ${phone}
Email: ${email}`,
          pageSource,
          from_name: "Rainbow Insurance Agency Webform",
          to: contactEmail
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
