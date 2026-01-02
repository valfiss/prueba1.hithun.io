
import { Student, Teacher } from './types';

export const MOCK_STUDENTS: Student[] = [
  { id: '1', firstName: 'Ana', lastName: 'García', email: 'ana.garcia@edu.com', grade: '10° A', status: 'Activo', attendance: 95, averageScore: 4.8, avatar: 'https://picsum.photos/seed/ana/100', ci: '1234567 LP', phone: '70011223', parentPhone: '70099887' },
  { id: '2', firstName: 'Carlos', lastName: 'López', email: 'carlos.lopez@edu.com', grade: '10° A', status: 'Activo', attendance: 88, averageScore: 4.2, avatar: 'https://picsum.photos/seed/carlos/100', ci: '2345678 SC', phone: '70022334', parentPhone: '70088776' },
  { id: '3', firstName: 'María', lastName: 'Rodríguez', email: 'maria.rod@edu.com', grade: '11° B', status: 'Inactivo', attendance: 72, averageScore: 3.5, avatar: 'https://picsum.photos/seed/maria/100', ci: '3456789 CB', phone: '70033445', parentPhone: '70077665' },
  { id: '4', firstName: 'Juan', lastName: 'Pérez', email: 'juan.perez@edu.com', grade: '9° C', status: 'Activo', attendance: 98, averageScore: 4.9, avatar: 'https://picsum.photos/seed/juan/100', ci: '4567890 LP', phone: '70044556', parentPhone: '70066554' },
  { id: '5', firstName: 'Sofía', lastName: 'Martínez', email: 'sofia.mtz@edu.com', grade: '11° B', status: 'Activo', attendance: 92, averageScore: 4.5, avatar: 'https://picsum.photos/seed/sofia/100', ci: '5678901 OR', phone: '70055667', parentPhone: '70055443' },
];

export const MOCK_TEACHERS: Teacher[] = [
  { id: 't1', name: 'Dr. Roberto Sánchez', subject: 'Matemáticas', email: 'roberto.s@edu.com', classes: ['10° A', '11° B'] },
  { id: 't2', name: 'Lic. Elena Gómez', subject: 'Literatura', email: 'elena.g@edu.com', classes: ['9° C', '10° A'] },
];

export const PERFORMANCE_DATA = [
  { name: 'Ene', promedio: 4.1 },
  { name: 'Feb', promedio: 4.3 },
  { name: 'Mar', promedio: 4.2 },
  { name: 'Abr', promedio: 4.5 },
  { name: 'May', promedio: 4.7 },
  { name: 'Jun', promedio: 4.6 },
];
