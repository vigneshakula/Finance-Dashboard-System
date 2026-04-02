export interface RecordInterface {
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: Date;
  notes?: string;
  userId:string;
}

