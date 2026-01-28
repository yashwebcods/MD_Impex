const DemoData = require('../Model/demo.schema')

const addDemo = async (req, res) => {
   console.log('Request body:', req.body);
   const { name, phoneNumber } = req.body;

   if(!name || !phoneNumber) {
       console.log('Validation failed:', { name, phoneNumber });
       return res.status(400).json({
           success: false,
           message: 'Name and phone number are required',
           received: { name, phoneNumber }
       });
   }

   const isExist = await DemoData.findOne({ phoneNumber });
   if(isExist) {
       return res.status(400).json({
           success: false,
           message: 'Demo request already exists'
       });
   }

   const demo = new DemoData({
       name,
       phoneNumber
   });

   await demo.save();

   return res.status(201).json({
       success: true,
       message: 'Demo request created successfully',
       data: demo
   });
}

module.exports = {
    addDemo
}
