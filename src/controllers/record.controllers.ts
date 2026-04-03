import { Request, Response } from 'express';
import * as recordService from '../services/record.services';
import Record from "../models/record";

export const createRecord = async (req: Request, res: Response) => {
  try {
    const record = await recordService.createRecord(
      req.body,
      req.user!.id
    );

    res.status(201).json({record,"message":"Record created Successfully"});
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getRecords = async (req: Request, res: Response) => {
  try {
    
    const { type, category, startDate, endDate } = req.query;

    let filter: any = {
    };

    if (type) {
      filter.type = type;
    }

    if (category) {
      filter.category = category;
    }

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string)
      };
    }

    const records = await Record.find(filter);

    res.status(200).json(records);

  } catch (err) {
    res.status(400).json({
      message: "Error fetching records"
    });
  }
};


export const updateRecord = async (req: Request, res: Response) => {
  try {
    const record = await recordService.updateRecord(
      req.params.id as string,
      req.body,
    );

    res.status(200).json({record,"message":"Record updated Successfully"});
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};


export const deleteRecord = async (req: Request, res: Response) => {
  try {
    await recordService.deleteRecord(
      req.params.id as string,
    );

    res.status(200).json({ message: 'Record deleted Successfully' });
  } catch (err: any) {
    res.status(404).json({ message: "Record not found" });
  }
};