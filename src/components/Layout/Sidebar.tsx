import React from 'react';
import { 
  Home, 
  Archive, 
  Search, 
  BookOpen, 
  Users, 
  Upload, 
  BarChart3, 
  Settings,
  FolderOpen,
  Star,
  Clock
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user } = useAuth();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, roles: ['student', 'researcher', 'faculty', 'librarian', 'admin'] },
    { id: 'browse', label: 'Browse Archive', icon: Archive, roles: ['student', 'researcher', 'faculty', 'librarian', 'admin'] },
    { id: 'search', label: 'Advanced Search', icon: Search, roles: ['student', 'researcher', 'faculty', 'librarian', 'admin'] },
    { id: 'research', label: 'My Research', icon: BookOpen, roles: ['researcher', 'faculty', 'student'] },
    { id: 'favorites', label: 'Favorites', icon: Star, roles: ['student', 'researcher', 'faculty', 'librarian'] },
    { id: 'recent', label: 'Recent Activity', icon: Clock, roles: ['student', 'researcher', 'faculty', 'librarian', 'admin'] },
  ];

  const managementItems = [
    { id: 'upload', label: 'Upload Documents', icon: Upload, roles: ['faculty', 'librarian', 'admin'] },
    { id: 'users', label: 'User Management', icon: Users, roles: ['admin', 'librarian'] },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, roles: ['admin', 'librarian'] },
    { id: 'categories', label: 'Categories', icon: FolderOpen, roles: ['admin', 'librarian'] },
    { id: 'settings', label: 'System Settings', icon: Settings, roles: ['admin'] },
  ];

  const filteredNavigation = navigationItems.filter(item => 
    item.roles.includes(user?.role || 'student')
  );

  const filteredManagement = managementItems.filter(item => 
    item.roles.includes(user?.role || 'student')
  );

  const SidebarItem: React.FC<{ item: any; isActive: boolean }> = ({ item, isActive }) => (
    <button
      onClick={() => onTabChange(item.id)}
      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
        isActive 
          ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <item.icon className="w-5 h-5" />
      <span className="font-medium">{item.label}</span>
    </button>
  );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <nav className="space-y-6">
        {/* Navigation Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Navigation
          </h3>
          <div className="space-y-1">
            {filteredNavigation.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
              />
            ))}
          </div>
        </div>

        {/* Management Section */}
        {filteredManagement.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Management
            </h3>
            <div className="space-y-1">
              {filteredManagement.map((item) => (
                <SidebarItem
                  key={item.id}
                  item={item}
                  isActive={activeTab === item.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 mt-8">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Stats</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Documents</span>
              <span className="font-medium text-blue-600">2,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">My Uploads</span>
              <span className="font-medium text-blue-600">23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Downloads</span>
              <span className="font-medium text-blue-600">156</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};