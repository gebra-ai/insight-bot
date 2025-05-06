import { NavLink, Outlet } from 'react-router-dom'

const ProductLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold mb-6">InsightBot AI Product</h1>
        
        <nav className="flex flex-wrap gap-4">
          <NavLink 
            to="/product" 
            end
            className={({isActive}) => 
              isActive 
                ? "bg-blue-500 text-white px-4 py-2 rounded" 
                : "bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            }
          >
            Overview
          </NavLink>
          
          <NavLink 
            to="/product/features" 
            className={({isActive}) => 
              isActive 
                ? "bg-blue-500 text-white px-4 py-2 rounded" 
                : "bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            }
          >
            Features
          </NavLink>
          
          <NavLink 
            to="/product/integrations" 
            className={({isActive}) => 
              isActive 
                ? "bg-blue-500 text-white px-4 py-2 rounded" 
                : "bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            }
          >
            Integrations
          </NavLink>
          
          <NavLink 
            to="/product/how-it-works" 
            className={({isActive}) => 
              isActive 
                ? "bg-blue-500 text-white px-4 py-2 rounded" 
                : "bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            }
          >
            How It Works
          </NavLink>
        </nav>
      </div>
      
      {/* Child routes will render here */}
      <Outlet />
    </div>
  )
}

export default ProductLayout
