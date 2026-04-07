const { ObjectId } = require("mongodb");

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await req.collections.appointments.find().toArray();
    res.status(200).send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserAppointments = async (req, res) =>{
    
};

exports.getCurrentAppointment = async (req, res) => {
  try {
    const { patientId } = req.params;
    const query = {
      "patient.id": Number(patientId),
      status: "pending",
      "metaData.isActive": true,
    };
    const result = await req.collections.appointments.findOne(query, {
      sort: { "metaData.bookingTime": -1 },
    });

    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addAppointments = async (req, res) => {
  try {
    const appointmentData = req.body;
    const result =
      await req.collections.appointments.insertOne(appointmentData);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const result = await req.collections.appointments.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status: "cancelled",
          "metaData.isActive": false,
          "metaData.cancelledBy": "user",
          "metaData.cancelReason": reason || null,
          "metaData.cancelledAt": new Date(),
        },
      }
    );

    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
