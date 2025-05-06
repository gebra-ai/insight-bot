const Integrations = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">CRM Integrations</h2>
      <p className="text-lg mb-8">
        InsightBot AI seamlessly integrates with the most popular customer support platforms, making implementation quick and easy with no disruption to your existing workflows.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-center mb-4">
            <img 
              src="https://via.placeholder.com/150x80?text=Zendesk" 
              alt="Zendesk Logo" 
              className="h-16 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Zendesk Integration</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Appears directly in the Zendesk agent workspace</li>
            <li>Analyzes ticket content and conversation history</li>
            <li>Suggests macros and knowledge base articles</li>
            <li>Works with Zendesk Chat and Support</li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm">
              <strong>Setup time:</strong> 30 minutes
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-center mb-4">
            <img 
              src="https://via.placeholder.com/150x80?text=Intercom" 
              alt="Intercom Logo" 
              className="h-16 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Intercom Integration</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Integrated directly within the Intercom messenger</li>
            <li>Real-time suggestions as conversations happen</li>
            <li>Connects to your Articles for instant references</li>
            <li>Works with both live chat and tickets</li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm">
              <strong>Setup time:</strong> 15 minutes
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-center mb-4">
            <img 
              src="https://via.placeholder.com/150x80?text=Freshdesk" 
              alt="Freshdesk Logo" 
              className="h-16 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Freshdesk Integration</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Appears as a sidebar in the Freshdesk interface</li>
            <li>Analyzes ticket context and customer history</li>
            <li>Suggests canned responses and solutions</li>
            <li>Works with Freshdesk and Freshchat</li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm">
              <strong>Setup time:</strong> 25 minutes
            </p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">Other Integrations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="font-semibold mb-3">Knowledge Base Platforms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confluence</li>
            <li>Notion</li>
            <li>SharePoint</li>
            <li>Custom documentation (via API)</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h4 className="font-semibold mb-3">Coming Soon</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salesforce Service Cloud</li>
            <li>HubSpot Service Hub</li>
            <li>Help Scout</li>
            <li>Kustomer</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4">Custom Integration</h3>
        <p className="mb-4">
          Don't see your platform listed? We offer custom integrations for enterprise customers. Our API allows for integration with virtually any customer support platform.
        </p>
        <p>
          Contact our team to discuss your specific integration needs.
        </p>
      </div>
    </div>
  )
}

export default Integrations
