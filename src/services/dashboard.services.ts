import Record from '../models/record';

export const getDashboardSummary = async () => {

 
  const income = await Record.aggregate([
    { $match: { type: 'income' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);

  
  const expense = await Record.aggregate([
    { $match: { type: 'expense' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);

  
  const categoryTotals = await Record.aggregate([
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' }
      }
    }
  ]);

  
  const recent = await Record.find()
    .sort({ createdAt: -1 }) 
    .limit(5);

  
  const monthly = await Record.aggregate([
  {
    $addFields: {
      dateObj: {
        $toDate: '$date'   
      }
    }
  },
  {
    $group: {
      _id: { month: { $month: '$dateObj' } },
      total: { $sum: '$amount' }
    }
  },
  {
    $sort: { '_id.month': 1 }
  }
]);

  return {
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    netBalance:
      (income[0]?.total || 0) - (expense[0]?.total || 0),
    categoryTotals,
    recent,
    monthly
  };
};