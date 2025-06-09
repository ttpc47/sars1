import React from 'react';
import { 
  BookOpen, 
  Download, 
  Upload, 
  Users, 
  TrendingUp, 
  FileText,
  Calendar,
  Award
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Documents', value: '2,847', change: '+12%', icon: FileText, color: 'blue' },
    { label: 'Downloads Today', value: '156', change: '+8%', icon: Download, color: 'green' },
    { label: 'New Uploads', value: '23', change: '+15%', icon: Upload, color: 'yellow' },
    { label: 'Active Users', value: '1,234', change: '+5%', icon: Users, color: 'purple' },
  ];

  const recentActivity = [
    { type: 'upload', user: 'Dr. Smith', document: 'Medieval History Manuscript', time: '2 hours ago' },
    { type: 'download', user: 'Sarah Johnson', document: 'Archaeological Survey Report', time: '4 hours ago' },
    { type: 'research', user: 'Mike Chen', document: 'Started new research project', time: '6 hours ago' },
    { type: 'comment', user: 'Lisa Brown', document: 'Added annotation to Ancient Texts', time: '8 hours ago' },
  ];

  const popularDocuments = [
    { title: 'Introduction to Digital Humanities', downloads: 234, category: 'Research' },
    { title: 'Historical Manuscripts Collection', downloads: 189, category: 'History' },
    { title: 'Archaeological Survey Methods', downloads: 156, category: 'Archaeology' },
    { title: 'Ancient Literature Analysis', downloads: 134, category: 'Literature' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
            <p className="text-blue-100">
              {user?.role === 'admin' ? 'System Administrator' : 
               user?.role === 'faculty' ? `Faculty - ${user?.department}` :
               user?.role === 'librarian' ? 'Digital Librarian' :
               user?.role === 'researcher' ? 'Research Fellow' : 'Student'}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-blue-200">Last Login</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            {user?.avatar && (
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-16 h-16 rounded-full border-4 border-white/20 object-cover"
              />
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 flex items-center ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'upload' ? 'bg-green-100 text-green-600' :
                  activity.type === 'download' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'research' ? 'bg-purple-100 text-purple-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {activity.type === 'upload' && <Upload className="w-4 h-4" />}
                  {activity.type === 'download' && <Download className="w-4 h-4" />}
                  {activity.type === 'research' && <BookOpen className="w-4 h-4" />}
                  {activity.type === 'comment' && <FileText className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-500 truncate">{activity.document}</p>
                </div>
                <div className="text-xs text-gray-400 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Documents */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Popular Documents</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {popularDocuments.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{doc.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {doc.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {doc.downloads} downloads
                    </span>
                  </div>
                </div>
                <Award className="w-4 h-4 text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all">
            <Upload className="w-6 h-6 text-gray-500" />
            <span className="font-medium text-gray-700">Upload Document</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all">
            <BookOpen className="w-6 h-6 text-gray-500" />
            <span className="font-medium text-gray-700">Start Research</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all">
            <Users className="w-6 h-6 text-gray-500" />
            <span className="font-medium text-gray-700">Invite Collaborator</span>
          </button>
        </div>
      </div>
    </div>
  );
};