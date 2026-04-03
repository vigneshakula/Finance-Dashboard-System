import Record from '../models/record';

export const createRecord = async (data: any, userId: string) => {
    const record = await Record.create({
        ...data,
        userId: userId
    });

    return record;
};




export const updateRecord = async (
  id: string,
  data: any,
) => {
    try{

        const record = await Record.findOneAndUpdate(
            { _id: id },
            data,
            { returnDocument: "after" }
        );
        return record;
    }
    catch{
            throw new Error('Record not found');
    }

};

export const deleteRecord = async (id: string) => {
    const record = await Record.findOneAndDelete({
        _id: id,
    });

    if (!record) {
        throw new Error('Record not found');
    }

    return record;
};