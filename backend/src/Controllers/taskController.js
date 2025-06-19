import taskModel from "../models/Task.js"


const taskCon={};

taskCon.get = async (req,res) =>{
    const task = await taskModel.find();
    res.json(task);
}

taskCon.post = async (req,res) => {
  const {title, description, completed}=req.body
  const newTask = new taskModel({title, description, completed});
  await newTask.save();
      res.json({message: "Task registrado"});
}

taskCon.put = async (req, res) => {
  const {
    title,
    description,
    completed
  } = req.body;


  await taskModel.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      completed
    },
    { new: true }
  );

  res.json({ message: "Task actualizado con éxito" });
};

taskCon.delete = async (req,res) =>{
    const deleteTask = await taskModel.findByIdAndDelete(req.params.id);
    if(!deleteTask){
        return res.status(404).json({message:"Task no encontrada"});
    }
    res.json({message: "task eliminado con exito"});
};

export default taskCon;