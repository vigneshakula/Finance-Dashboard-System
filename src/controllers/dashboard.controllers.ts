import { Request, Response } from 'express';
import { getDashboardSummary } from '../services/dashboard.services';

export const getSummary = async (req: Request, res: Response) => {
  try {
    

    const data = await getDashboardSummary();

    res.json(data);
  } catch (err) {
    //@ts-ignore
    console.log(err.message);
    res.status(500).json({
      message: 'Error in getting dashboard data'
    });
  }
};