import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <header className="page-header">
        <h1>Админ-панель</h1>
      </header>
      
      <main className="page-content">
        <p>Панель администратора</p>
        {/* Здесь будет контент админ-панели */}
      </main>
    </div>
  );
};

export default AdminDashboard; 