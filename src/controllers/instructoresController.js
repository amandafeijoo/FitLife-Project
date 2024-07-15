const Instructor = require('../models/Instructor');
const { authorizeAdmin } = require('../middleware/auth');
const Class = require('../models/Class');

exports.createInstructor = [authorizeAdmin, async (req, res) => {
  try {
    let { nombre, especialidad, subclases } = req.body;
    subclases = [...new Set(subclases)];
    const instructor = new Instructor({ nombre, especialidad, subclases });
    await instructor.save();
    res.status(201).json(instructor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}];

exports.getInstructor = async (req, res) => {
  try {
    const { id } = req.params;
    const instructor = await Instructor.findById(id).populate('subclases');
    if (instructor) {
      res.status(200).json(instructor);
    } else {
      res.status(404).json({ error: 'Instructor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Obtén un instructor por ID
exports.getInstructorById = async (req, res) => {
  try {
    const instructorId = req.params.id;

    // Obtén el instructor por ID
    const instructor = await Instructor.findById(instructorId);

    // Obtén solo las clases que tienen una subclase que pertenece al instructor
    const clases = await Class.find({ 'subclases._id': { $in: instructor.subclases } });

    // Filtra las subclases que pertenecen al instructor
    const subclases = clases.reduce((acc, clase) => {
      const subclasesDelInstructor = clase.subclases.filter(subclase => 
        instructor.subclases.includes(subclase._id)
      );
      return [...acc, ...subclasesDelInstructor];
    }, []);

    // Construye la respuesta
    const respuesta = {
      _id: instructor._id,
      nombre: instructor.nombre,
      especialidad: instructor.especialidad,
      subclases: subclases
    };

    res.json(respuesta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getInstructorWithSubclases = async (req, res) => {
  try {
    const { instructorId } = req.params;
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) {
      return res.status(404).json({ error: 'Instructor no encontrado' });
    }
    await instructor.populate('subclases').execPopulate();
    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.getInstructors =  async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para instructores
exports.getInstructorByName = async (req, res) => {
  try {
    const instructor = await Instructor.findOne({ nombre: req.params.name });
    if (!instructor) {
      return res.status(404).send({ error: 'Instructor not found' });
    }
    res.send(instructor);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateInstructor = [authorizeAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const instructor = await Instructor.findByIdAndUpdate
        (id, req.body, { new: true });
    if (!instructor) {
        return res.status(404).json({ error: 'Instructor no encontrado' });
        }
    res.status(200).json(instructor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
];

exports.deleteInstructor = [authorizeAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const instructor = await Instructor.findByIdAndDelete(id);
        if (!instructor) {
            return res.status(404).json({ error: 'Instructor no encontrado' });
        }
        res.status(200).json({ message: 'Instructor eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
];
