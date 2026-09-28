export type UserRole = 'STUDENT' | 'COLLEGE_ADMIN' | 'SUPER_ADMIN';

export interface User {
  id: string;
  email: string;
  phone?: string;
  fullName: string;
  role: UserRole;
  isActive: boolean;
  isEmailVerified: boolean;
  createdAt: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  fullName: string;
  dob?: string;
  gender?: string;
  category?: string;
  address?: string;
  state?: string;
  district?: string;
  pincode?: string;
  tenthPercentage?: number;
  twelfthPercentage?: number;
  entranceExam?: string;
  entranceScore?: number;
}

export interface AuthResponse {
  token: string;
  refreshToken?: string;
  tokenType: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp?: string;
}

export interface HealthStatus {
  service: string;
  status: string;
  version: string;
  environment: string;
}
