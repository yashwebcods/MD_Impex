const Contact = require('../Model/contact.schema')

const addContact = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, message } = req.body

        if (!fullName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Full name, email, and message are required',
            })
        }

        const contact = new Contact({
            fullName,
            email,
            phoneNumber,
            message,
        })

        await contact.save()

        return res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: contact,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err?.message || 'Internal server error',
        })
    }
}

module.exports = {
    addContact,
}
