export interface Specialisation {
  _id?: string;
  admin_id: string;
  specialisation_name: string;
  procedures: string[],
  status: string;
  saved_by: string;
  timestamp: number,
  delete: boolean;
}
