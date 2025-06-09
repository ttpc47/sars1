import React, { useState } from 'react';
import { Filter, Grid, List, SortAsc } from 'lucide-react';
import { DocumentCard } from './DocumentCard';
import { Document } from '../../types';

export const Browse: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data - replace with actual API calls
  const mockDocuments: Document[] = [
    {
      id: '1',
      title: 'Medieval Manuscripts of the 12th Century',
      author: 'Dr. Margaret Smith',
      description: 'A comprehensive collection of illuminated manuscripts from the medieval period, featuring detailed analysis of artistic techniques and historical context.',
      category: 'History',
      subcategory: 'Medieval Studies',
      keywords: ['medieval', 'manuscripts', 'illuminated', 'history'],
      fileType: 'pdf',
      fileSize: '15.2 MB',
      uploadDate: '2024-01-15',
      lastModified: '2024-01-15',
      accessLevel: 'public',
      downloadCount: 234,
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      metadata: {
        pages: 156,
        language: 'English',
        subject: 'Medieval History',
        year: 2023,
        publisher: 'Academic Press'
      }
    },
    {
      id: '2',
      title: 'Archaeological Survey Report: Ancient Roman Sites',
      author: 'Prof. James Wilson',
      description: 'Detailed archaeological survey of newly discovered Roman settlements in Northern England, including excavation findings and artifact analysis.',
      category: 'Archaeology',
      subcategory: 'Roman Studies',
      keywords: ['archaeology', 'roman', 'excavation', 'artifacts'],
      fileType: 'pdf',
      fileSize: '28.7 MB',
      uploadDate: '2024-01-12',
      lastModified: '2024-01-12',
      accessLevel: 'restricted',
      downloadCount: 156,
      thumbnail: 'https://images.pexels.com/photos/8349239/pexels-photo-8349239.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      metadata: {
        pages: 89,
        language: 'English',
        subject: 'Archaeology',
        year: 2023,
        location: 'Northern England'
      }
    },
    {
      id: '3',
      title: 'Digital Humanities: Text Analysis Methods',
      author: 'Dr. Sarah Chen',
      description: 'An introduction to computational methods for analyzing historical texts, including natural language processing and data visualization techniques.',
      category: 'Digital Humanities',
      subcategory: 'Computational Methods',
      keywords: ['digital humanities', 'text analysis', 'nlp', 'visualization'],
      fileType: 'pdf',
      fileSize: '12.3 MB',
      uploadDate: '2024-01-10',
      lastModified: '2024-01-10',
      accessLevel: 'public',
      downloadCount: 189,
      thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      metadata: {
        pages: 67,
        language: 'English',
        subject: 'Digital Humanities',
        year: 2024
      }
    },
    {
      id: '4',
      title: 'Ancient Greek Literature: Epic Poetry Analysis',
      author: 'Prof. Elena Rodriguez',
      description: 'Comprehensive analysis of ancient Greek epic poetry, focusing on narrative structures and cultural significance in classical literature.',
      category: 'Literature',
      subcategory: 'Classical Studies',
      keywords: ['greek', 'literature', 'epic', 'poetry', 'classical'],
      fileType: 'pdf',
      fileSize: '18.9 MB',
      uploadDate: '2024-01-08',
      lastModified: '2024-01-08',
      accessLevel: 'public',
      downloadCount: 134,
      thumbnail: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      metadata: {
        pages: 203,
        language: 'English',
        subject: 'Classical Literature',
        year: 2023
      }
    }
  ];

  const categories = ['all', 'History', 'Archaeology', 'Literature', 'Digital Humanities', 'Art', 'Science'];

  const handleView = (document: Document) => {
    console.log('Viewing document:', document.id);
    // TODO: Implement document viewer
  };

  const handleDownload = (document: Document) => {
    console.log('Downloading document:', document.id);
    // TODO: Implement download functionality
  };

  const handleFavorite = (document: Document) => {
    console.log('Favoriting document:', document.id);
    // TODO: Implement favorite functionality
  };

  const filteredDocuments = mockDocuments.filter(doc => 
    filterCategory === 'all' || doc.category === filterCategory
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Browse Archive</h2>
          <p className="text-gray-600 mt-1">
            Discover and explore our collection of {filteredDocuments.length} documents
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-2">
          <SortAsc className="w-4 h-4 text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="title">Title A-Z</option>
            <option value="author">Author A-Z</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="ml-auto text-sm text-gray-600">
          Showing {filteredDocuments.length} documents
        </div>
      </div>

      {/* Documents Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDocuments.map(document => (
            <DocumentCard
              key={document.id}
              document={document}
              onView={handleView}
              onDownload={handleDownload}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredDocuments.map(document => (
            <div key={document.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-medium text-sm uppercase">
                    {document.fileType}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{document.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{document.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{document.author}</span>
                    <span>{document.category}</span>
                    <span>{document.downloadCount} downloads</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleView(document)}
                    className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDownload(document)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};