exports.getDepartments = async (req, res) => {
  try {
    const departments = await req.collections.departments.find().toArray();
    res.send(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// exports.addDepartment = async (req, res) => {
//   try {
//     const department = req.body;
//     const result = await req.collections.departments.insertOne(department);
//     res.send(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

//------For inserting multiple departments at once, if needed in the future-------

exports.addDepartment = async (req, res) => {
  try {
    const departments = req.body; // expect array

    if (!Array.isArray(departments)) {
      return res
        .status(400)
        .json({ message: "Expected an array of departments" });
    }

    const result = await req.collections.departments.insertMany(departments);

    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
