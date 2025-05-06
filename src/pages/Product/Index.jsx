import { Link } from 'react-router-dom'

const ProductIndex = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">What is InsightBot AI?</h3>
        <p className="mb-4">
          InsightBot AI is a smart, AI-powered assistant for customer support teams that automatically analyzes live chat conversations, detects sentiment and intent in real time, and suggests relevant responses or knowledge base articles.
        </p>
        <p>
          It helps support agents save time, reduce response errors, and improve customer satisfaction through intelligent augmentation of human support.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cut support response time by 60%</li>
            <li>Reduce training time for new agents</li>
            <li>Improve resolution accuracy with real-time suggestions</li>
            <li>Consistent support quality across all interactions</li>
            <li>Decrease agent burnout by automating repetitive tasks</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Who It's For</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Customer support teams of 5+ agents</li>
            <li>SaaS companies with complex product offerings</li>
            <li>E-commerce businesses with high support volume</li>
            <li>Companies looking to scale support without adding headcount</li>
            <li>Teams using Zendesk, Intercom, or Freshdesk</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Learn More About Our Product</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/product/features" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Explore Features
          </Link>
          <Link to="/product/integrations" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            View Integrations
          </Link>
          <Link to="/product/how-it-works" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            See How It Works
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductIndex
