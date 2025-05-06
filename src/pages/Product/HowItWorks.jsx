const HowItWorks = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">How InsightBot AI Works</h2>
      <p className="text-lg mb-8">
        InsightBot AI uses advanced natural language processing and machine learning to enhance your customer support experience. Here's a detailed look at our technical architecture.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-12">
        <h3 className="text-xl font-semibold mb-4">The Technology Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium mb-2">NLP Models</h4>
            <p className="text-sm">
              Fine-tuned transformer models optimized for customer support contexts
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium mb-2">RAG System</h4>
            <p className="text-sm">
              Vector database and semantic search with contextual retrieval
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium mb-2">APIs</h4>
            <p className="text-sm">
              REST and WebSocket APIs for real-time integration with support platforms
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">The AI Pipeline</h3>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">1</div>
              <div className="md:ml-6 bg-white p-6 rounded-lg shadow-md md:w-3/4">
                <h4 className="font-semibold mb-2">Data Ingestion</h4>
                <p className="mb-2">
                  When a customer message arrives, InsightBot AI receives it through our integration with your support platform.
                </p>
                <p className="text-sm text-gray-600">
                  We also capture the conversation context, customer history, and any relevant metadata to improve accuracy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">2</div>
              <div className="md:ml-6 bg-white p-6 rounded-lg shadow-md md:w-3/4">
                <h4 className="font-semibold mb-2">NLP Processing</h4>
                <p className="mb-2">
                  Our NLP models analyze the message to detect sentiment, identify intent, and extract key entities and topics.
                </p>
                <p className="text-sm text-gray-600">
                  This happens in real-time (under 300ms) so agents get immediate insights.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">3</div>
              <div className="md:ml-6 bg-white p-6 rounded-lg shadow-md md:w-3/4">
                <h4 className="font-semibold mb-2">Knowledge Retrieval (RAG)</h4>
                <p className="mb-2">
                  Based on the content analysis, our RAG system searches your knowledge base to find relevant documentation and solutions.
                </p>
                <p className="text-sm text-gray-600">
                  The system uses dense vector embeddings and semantic search to find contextually relevant information, not just keyword matches.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">4</div>
              <div className="md:ml-6 bg-white p-6 rounded-lg shadow-md md:w-3/4">
                <h4 className="font-semibold mb-2">Response Generation</h4>
                <p className="mb-2">
                  Using the retrieved knowledge and conversation context, the system generates or suggests appropriate responses.
                </p>
                <p className="text-sm text-gray-600">
                  The responses are tailored to the detected sentiment and intent, maintaining appropriate tone and style.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">5</div>
              <div className="md:ml-6 bg-white p-6 rounded-lg shadow-md md:w-3/4">
                <h4 className="font-semibold mb-2">Agent Assistance</h4>
                <p className="mb-2">
                  The system presents the suggested responses and knowledge articles to your support agent through the integrated UI.
                </p>
                <p className="text-sm text-gray-600">
                  Agents maintain control, choosing to use, modify, or ignore the suggestions based on their judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Continuous Learning Loop</h3>
        <p className="mb-4">
          InsightBot AI continuously improves based on which suggestions agents use, modify, or ignore. This feedback loop helps the system adapt to your specific product, customers, and support style.
        </p>
        <div className="bg-white p-4 rounded-md">
          <h4 className="font-medium mb-2">Privacy and Security</h4>
          <p>
            All customer data is processed in compliance with GDPR and CCPA. We use enterprise-grade encryption and can deploy in your own cloud environment for added security.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
