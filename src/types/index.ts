export interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
}

export interface PatientSymptoms {
  id: string;
  age: number;
  gender: string;
  weight: number;
  height: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  heartRate: number;
  bodyTemperature: number;
  symptoms: string[];
  familyHistory: string[];
  lifestyle: string[];
  bloodTests: {
    glucose: number;
    cholesterol: number;
    hemoglobin: number;
    whiteBloodCellCount: number;
    plateletCount: number;
  };
}