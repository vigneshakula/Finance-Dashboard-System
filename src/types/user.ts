interface User {
  name: string;
  email: string;
  password: string;
  role: 'viewer' | 'analyst' | 'admin';
  isActive: boolean;
}