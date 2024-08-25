import React, { useState } from 'react';
import OrdersDashboard from './OrderDas';
import Filters from './Filters';

function Order() {
  const [activeTab, setActiveTab] = useState("Pending");

  const renderContent = () => {
    switch (activeTab) {
      case "On Hold":
        return <div>No On Hold orders yet</div>;
      case "Pending":
        return <div>No Pending orders yet</div>;
      case "Ready to Ship":
        return <div>No Ready to Ship orders yet</div>;
      case "Shipped":
        return <div>No Shipped orders yet</div>;
      case "Cancelled":
        return <div>No Cancelled orders yet</div>;
      default:
        return null;
    }
  };

  return (
    <div id="main">
      <div className='bg-white p-3'>
        <div className='fs-5 fw-bold'>Order</div>
      </div>

      <OrdersDashboard />

      <div>
        <div className="tabs">
          <button
            className={activeTab === "On Hold" ? "active-tab" : ""}
            onClick={() => setActiveTab("On Hold")}
          >
            On Hold (0)
          </button>
          <button
            className={activeTab === "Pending" ? "active-tab" : ""}
            onClick={() => setActiveTab("Pending")}
          >
            Pending (0)
          </button>
          <button
            className={activeTab === "Ready to Ship" ? "active-tab" : ""}
            onClick={() => setActiveTab("Ready to Ship")}
          >
            Ready to Ship (0)
          </button>
          <button
            className={activeTab === "Shipped" ? "active-tab" : ""}
            onClick={() => setActiveTab("Shipped")}
          >
            Shipped (0)
          </button>
          <button
            className={activeTab === "Cancelled" ? "active-tab" : ""}
            onClick={() => setActiveTab("Cancelled")}
          >
            Cancelled (0)
          </button>
        </div>
        <Filters />
        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Order;
