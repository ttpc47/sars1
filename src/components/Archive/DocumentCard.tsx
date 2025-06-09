import React from 'react';
import { 
  Download, 
  Star, 
  Eye, 
  Calendar, 
  User, 
  FileText, 
  Image, 
  Video, 
  Music,
  File
} from 'lucide-react';
import { Document } from '../../types';

interface DocumentCardProps {
  document: Document;
  onView: (document: Document) => void;
  onDownload: (document: Document) => void;
  onFavorite: (document: Document) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  onView,
  onDownload,
  onFavorite
}) => {
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf':
      case 'doc':
        return FileText;
      case 'image':
        return Image;
      case 'video':
        return Video;
      case 'audio':
        return Music;
      default:
        return File;
    }
  };

  const FileIcon = getFileIcon(document.fileType);

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 overflow-hidden group">
      {/* Document Thumbnail/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        {document.thumbnail ? (
          <img 
            src={document.thumbnail} 
            alt={document.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <FileIcon className="w-16 h-16 text-blue-400" />
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button
              onClick={() => onView(document)}
              className="bg-white text-gray-900 px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-1"
            >
              <Eye className="w-4 h-4" />
              <span>View</span>
            </button>
            <button
              onClick={() => onDownload(document)}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Access Level Badge */}
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 text-xs font-medium rounded ${
            document.accessLevel === 'public' ? 'bg-green-100 text-green-800' :
            document.accessLevel === 'restricted' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {document.accessLevel}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => onFavorite(document)}
          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Star className="w-4 h-4 text-gray-600 hover:text-yellow-500" />
        </button>
      </div>

      {/* Document Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 text-lg line-clamp-2 mb-1">
            {document.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {document.description}
          </p>
        </div>

        {/* Metadata */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-2" />
            <span>{document.author}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(document.uploadDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
            {document.category}
          </span>
          {document.subcategory && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {document.subcategory}
            </span>
          )}
        </div>

        {/* Footer Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-100">
          <span className="flex items-center space-x-1">
            <Download className="w-4 h-4" />
            <span>{document.downloadCount} downloads</span>
          </span>
          <span className="uppercase text-xs font-medium">
            {document.fileType} • {document.fileSize}
          </span>
        </div>
      </div>
    </div>
  );
};