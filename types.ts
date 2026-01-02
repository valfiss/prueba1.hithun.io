
import React from 'react';

export type UserRole = 'Administrador' | 'Profesor' | 'Estudiante' | 'Padre';

export interface AppUser {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  role: UserRole;
  avatar: string;
  lastLogin: string;
  teacherId?: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  grade: string;
  status: 'Activo' | 'Inactivo';
  attendance: number;
  averageScore: number;
  avatar: string;
  ci: string;
  phone: string;
  parentPhone: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  classes: string[];
}

export interface GradeAdvisor {
  id: string;
  grade: string;
  parallel: string;
  teacherId: string;
  teacherName: string;
  assignedAt: string;
}

export interface SchoolData {
  sie: string;
  district: string;
  name: string;
  dependency: string;
  director: string;
  psp: string;
  pspObjective: string;
}

export type PlanStatus = 'Borrador' | 'Enviado' | 'Aprobado' | 'Observado' | 'Rechazado';

export interface TrimesterPlan {
  contents: string;
  pspAction: string;
}

export interface AnnualPlan {
  id: string;
  teacherId: string;
  teacherName: string;
  year: number;
  campo: string;
  area: string;
  escolaridad: string;
  nivel: string;
  ejesArticuladores: string;
  perfilNivel: string;
  perfilEscolaridad: string;
  trimestres: [TrimesterPlan, TrimesterPlan, TrimesterPlan];
  createdAt: string;
  status: PlanStatus;
  observation?: string;
}

export interface ClassPlan {
  id: string;
  teacherId: string;
  teacherName: string;
  course: string;
  subject: string;
  date: string;
  trimestre: 1 | 2 | 3;
  holisticObjective: string;
  moments: {
    practice: string;
    theory: string;
    valuation: string;
    production: string;
  };
  resources: string;
  criteria: {
    ser: string;
    saber: string;
    hacer: string;
    decidir: string;
  };
  product: string;
  createdAt: string;
  status: PlanStatus;
  observation?: string;
}

export interface ProgressReport {
  id: string;
  pdcId: string;
  teacherId: string;
  teacherName: string;
  course: string;
  subject: string;
  momentsProgress: {
    practice: number;
    theory: number;
    valuation: number;
    production: number;
  };
  generalObservation: string;
  updatedAt: string;
}

export type PedagogicalDimension = 'Ser' | 'Saber' | 'Hacer' | 'Decidir';

export interface PedagogicalActivity {
  id: string;
  teacherId: string;
  course: string;
  subject: string;
  term: 1 | 2 | 3;
  dimension: PedagogicalDimension;
  title: string;
  date: string;
}

export interface PedagogicalScore {
  id: string;
  activityId: string;
  studentId: string;
  score: number;
}

export interface SelfEvaluation {
  id: string;
  studentId: string;
  course: string;
  subject: string;
  term: 1 | 2 | 3;
  serScore: number;
  decidirScore: number;
}

export interface GradeRecord {
  id: string;
  studentId: string;
  teacherId: string;
  course: string;
  subject: string;
  term: 1 | 2 | 3;
  score: number;
  updatedAt: string;
}

export type LeaveStatus = 'Pendiente' | 'Autorizado' | 'Rechazado';
export type LeaveType = 'Personal' | 'Salud' | 'Comisión' | 'Duelo' | 'Otro';

export interface LeaveRequest {
  id: string;
  teacherId: string;
  teacherName: string;
  date: string;
  type: LeaveType;
  reason: string;
  status: LeaveStatus;
  adminComment?: string;
  createdAt: string;
}

export type AttendanceStatus = 'Presente' | 'Falta' | 'Atraso' | 'Licencia';

export interface AttendanceRecord {
  studentId: string;
  status: AttendanceStatus;
}

export interface AttendanceSession {
  id: string;
  date: string;
  teacherId: string;
  course: string;
  subject: string;
  records: AttendanceRecord[];
}

export type KardexType = 'Indisciplina' | 'Incumplimiento';

export interface KardexReport {
  id: string;
  studentId: string;
  teacherId: string;
  type: KardexType;
  date: string;
  description: string;
  course: string;
  subject: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}
