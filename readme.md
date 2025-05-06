# InsightBot AI

InsightBot AI is a smart, AI-powered assistant for customer support teams. It automatically analyzes live chat conversations, detects sentiment and intent in real time, and suggests relevant responses or knowledge base articles. It helps support agents save time, reduce response errors, and improve customer satisfaction.

---

## 🌐 Website Overview

This project is the **landing page** and **product overview SPA** for InsightBot AI.

The application uses **React Router v6+** to implement a modern **single-page application (SPA)** experience with **nested routing**.

---

## 🧠 Real-World AI Use Case

**InsightBot AI** is powered by:
- Real-time NLP models for sentiment analysis and intent detection.
- RAG (Retrieval-Augmented Generation) using your company's support documentation.
- Agent assist API that plugs into Zendesk, Intercom, or Freshdesk.

This site explains how it works, pricing plans, product tour, and a contact form.

---

## 📁 Project Structure

This app is intended to test React SPA and nested routing.

Suggested folder and route structure:

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── …
├── pages/
│   ├── Home.jsx
│   ├── Product/
│   │   ├── Index.jsx         // Overview of InsightBot AI
│   │   ├── Features.jsx      // AI features, screenshots
│   │   ├── Integrations.jsx  // Zendesk, Intercom integrations
│   │   └── HowItWorks.jsx    // Explains RAG + NLP pipelines
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx
```

---

## 🧭 Routes to Implement

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page |
| `/product` | `Product/Index` | Product overview |
| `/product/features` | `Product/Features` | Detailed AI features |
| `/product/integrations` | `Product/Integrations` | CRM integrations |
| `/product/how-it-works` | `Product/HowItWorks` | AI architecture |
| `/pricing` | `Pricing` | Plans and pricing |
| `/contact` | `Contact` | Contact form |
| `*` | `NotFound` | 404 page |

---

## 🔧 Tech Stack

- React (with Vite or CRA)
- React Router v6+
- TailwindCSS (optional but preferred)
- Formspree / Netlify Forms for contact submission (optional)

---

## 🚀 Getting Started

```bash
npm create vite@latest insightbot-landing -- --template react
cd insightbot-landing
npm install react-router-dom
npm run dev
```

Then build out the routes and nested structure in App.jsx.

### 📚 Example Nested Routing (React Router v6)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product" element={<ProductLayout />}>
    <Route index element={<ProductOverview />} />
    <Route path="features" element={<Features />} />
    <Route path="integrations" element={<Integrations />} />
    <Route path="how-it-works" element={<HowItWorks />} />
  </Route>
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 🤖 Why InsightBot AI?
- Cut support response time by 60%.
- Reduce training time for new agents.
- Improve resolution accuracy via real-time suggestions.

### 📩 Contact Us

Want to try InsightBot AI or integrate into your support system?

📧 avinash@gebra.ai

---

## License

MIT License. Feel free to fork, extend, and modify.