export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'researcher' | 'faculty' | 'librarian' | 'admin';
  department?: string;
  avatar?: string;
  lastLogin?: string;
}

export interface Document {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  subcategory?: string;
  keywords: string[];
  fileType: 'pdf' | 'doc' | 'image' | 'video' | 'audio' | 'other';
  fileSize: string;
  uploadDate: string;
  lastModified: string;
  accessLevel: 'public' | 'restricted' | 'private';
  downloadCount: number;
  thumbnail?: string;
  metadata: DocumentMetadata;
}

export interface DocumentMetadata {
  pages?: number;
  language: string;
  subject: string;
  year?: number;
  publisher?: string;
  isbn?: string;
  doi?: string;
  location?: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  fileType: string;
  dateRange: {
    start: string;
    end: string;
  };
  author: string;
  subject: string;
  accessLevel: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  creator: string;
  collaborators: string[];
  documents: string[];
  notes: string;
  createdDate: string;
  lastModified: string;
  status: 'active' | 'completed' | 'archived';
}

export interface ArchiveStats {
  totalDocuments: number;
  totalUsers: number;
  recentUploads: number;
  popularCategories: Array<{
    name: string;
    count: number;
  }>;
  monthlyActivity: Array<{
    month: string;
    uploads: number;
    downloads: number;
  }>;
}