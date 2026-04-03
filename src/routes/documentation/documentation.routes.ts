import express from 'express';
import { Request,Response } from 'express';
import path from 'path';

const router = express.Router();

router.get('/',(req:Request,res:Response)=>{

    const absolutePath = path.resolve('./src/routes/documentation/index.html');

    res.sendFile(absolutePath);
})

export default router;