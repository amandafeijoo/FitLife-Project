const Class = require('../models/Class');
const Instructor = require('../models/Instructor');

exports.createClase = async (req, res) => {
  try {
    const subclases = req.body.subclases;
    const nombreClase = req.body.tipo;

    if (!subclases || !nombreClase) {
      return res.status(400).json({ error: 'Faltan datos necesarios' });
    }

    const classData = {
      nombre: nombreClase,
      subclases: subclases.map(subclase => ({
        nombre: subclase.class, 
        horarios: subclase.horarios.map(horario => ({
          tipo: nombreClase.toLowerCase(),
          horario: `${horario.time} - ${horario.endTime}`,
          dias: horario.dias,
          maxCapacity: horario.maxCapacity
        }))
      }))
    };

    const newClass = new Class(classData);
    await newClass.save();

    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getClase = async (req, res) => {
    try {
        const { id } = req.params;
        const clase = await Class.findById(id);
        if (!clase) {
            return res.status(404).json({ error: 'Clase no encontrada' });
        }
        res.status(200).json(clase);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClases = async (req, res) => {
    try {
        const clases = await Class.find();
        res.status(200).json(clases);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getSubclase = async (req, res) => {
  try {
    const { id } = req.params;
    const classes = await Class.find();
    let subclaseEncontrada = null;

    classes.forEach(clase => {
      clase.subclases.forEach(subclase => {
        if (subclase._id.toString() === id) {
          subclaseEncontrada = subclase;
        }
      });
    });

    if (subclaseEncontrada) {
      res.status(200).json(subclaseEncontrada);
    } else {
      res.status(404).json({ error: 'Subclase no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubclaseByName = async (req, res) => {
  try {
    // Busca la clase que contiene la subclase con el nombre dado
    const clase = await Clase.findOne({ 'subclases.nombre': req.params.name });

    if (!clase) {
      return res.status(404).send({ error: 'Class not found' });
    }

    // Encuentra la subclase por su nombre
    const subclass = clase.subclases.find(subclass => subclass.nombre === req.params.name);

    if (!subclass) {
      return res.status(404).send({ error: 'Subclass not found' });
    }

    res.send(subclass);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getClaseByName = async (req, res) => {
  try {
    const clase = await Clase.findOne({ nombre: req.params.name });
    if (!clase) {
      return res.status(404).send({ error: 'Class not found' });
    }
    res.send(clase);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSubclaseByName = async (req, res) => {
  try {
    // Busca todas las clases que contienen una subclase con el nombre dado
    const clases = await Clase.find({ 'subclases.nombre': req.params.name });

    if (!clases) {
      return res.status(404).send({ error: 'Classes not found' });
    }

    // Encuentra la subclase por su nombre
    let subclass;
    for (let clase of clases) {
      subclass = clase.subclases.find(subclass => subclass.nombre === req.params.name);
      if (subclass) break;
    }

    if (!subclass) {
      return res.status(404).send({ error: 'Subclass not found' });
    }

    res.send(subclass);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteClase = async (req, res) => {
    try {
      const { id } = req.params;
      const clase = await Class.findById(id);
      if (!clase) {
        return res.status(404).json({ error: 'Clase no encontrada' });
      }
      await Class.deleteOne({ _id: id });
      res.status(200).json({ message: 'Clase eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.deleteAllClasses = async (req, res) => {
  try {
    await Class.deleteMany({});
    res.status(200).json({ message: 'Todas las clases han sido eliminadas' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAllSubclases = async (req, res) => {
  try {
 
    const clase = await Class.findById(req.params.id);
    if (!clase) {
     
      return res.status(404).send({ message: 'Clase no encontrada' });
    }
    clase.subclases = [];
    await clase.save();
    res.send({ message: 'Todas las subclases han sido eliminadas' });
  } catch (error) {
    res.status(500).send({ message: 'Error al eliminar las subclases' });
  }
};
  
exports.updateClase = async (req, res) => {
    try {
      const { id } = req.params;
      const clase = await Class.findByIdAndUpdate(id, req.body, { new: true });
      if (!clase) {
        return res.status(404).json({ error: 'Clase no encontrada' });
      }
      res.status(200).json(clase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.updateSubclase = async (req, res) => {
  try {
    const { id, subclaseId, horarioId } = req.params; 
    const { nombre, horario } = req.body; 

    // Encuentra la clase y actualiza el nombre de la subclase y el horario
    const clase = await Class.findOneAndUpdate(
      { "_id": id, "subclases._id": subclaseId, "subclases.horarios._id": horarioId },
      { 
        "$set": { 
          "subclases.$.nombre": nombre,
          "subclases.$.horarios.$[elem].horario": horario 
        } 
      },
      { 
        new: true,
        arrayFilters: [ { "elem._id": horarioId } ]
      }
    );

    if (!clase) {
      return res.status(404).json({ error: 'Clase no encontrada' });
    }

    res.status(200).json(clase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClasesPorTipo = async (req, res) => {
  try {
    const tipo = req.params.tipo;

    const clases = await Class.aggregate([
      { $unwind: "$subclases" },
      { $unwind: "$subclases.horarios" },
      { $match: { "subclases.horarios.tipo": new RegExp(tipo, 'i') } }
    ]);

    res.status(200).json(clases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};