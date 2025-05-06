const Features = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">AI-Powered Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Real-time Sentiment Analysis</h3>
          <p className="mb-4">
            Our NLP models detect customer sentiment in real-time, alerting agents when a conversation is becoming negative and suggesting approaches to improve the interaction.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-medium mb-2">How it helps:</h4>
            <ul className="list-disc pl-5">
              <li>Identify at-risk customers before they churn</li>
              <li>Prioritize conversations that need immediate attention</li>
              <li>Adjust tone and approach based on customer mood</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Intent Detection</h3>
          <p className="mb-4">
            Our AI identifies customer intent from the conversation, helping agents understand what the customer is trying to accomplish even when it's not explicitly stated.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-medium mb-2">How it helps:</h4>
            <ul className="list-disc pl-5">
              <li>Route conversations to the right department faster</li>
              <li>Prepare relevant responses before the customer explains their full issue</li>
              <li>Track common intents to improve product and documentation</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Response Suggestions</h3>
          <p className="mb-4">
            InsightBot AI suggests relevant responses based on your knowledge base and previous successful conversations, which agents can use or modify.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-medium mb-2">How it helps:</h4>
            <ul className="list-disc pl-5">
              <li>Reduce response time by 60%</li>
              <li>Maintain consistent messaging across your support team</li>
              <li>Help new agents respond like your best performers</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Knowledge Base Integration</h3>
          <p className="mb-4">
            Our RAG system automatically suggests relevant documentation and knowledge base articles that agents can share with customers.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-medium mb-2">How it helps:</h4>
            <ul className="list-disc pl-5">
              <li>Agents don't need to search for information</li>
              <li>Customers receive thorough, accurate information</li>
              <li>Identify gaps in your documentation based on agent feedback</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
          <p className="mb-4">
            Comprehensive analytics on agent performance, common issues, sentiment trends, and AI assistance usage.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-medium mb-2">How it helps:</h4>
            <ul className="list-disc pl-5">
              <li>Identify training opportunities for agents</li>
              <li>Track improvement in response times and quality</li>
              <li>Discover product issues based on support patterns</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Multilingual Support</h3>
          <p className="mb-4">
            InsightBot AI works with over 30 languages, enabling your team to provide consistent support globally.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-medium mb-2">How it helps:</h4>
            <ul className="list-disc pl-5">
              <li>Support customers in their native language</li>
              <li>Reduce the need for language-specific support teams</li>
              <li>Maintain consistent brand voice across languages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
