import db from '../database/index.js';

export async function stateIndex(req, res) {
  try {
    const result = await db('states');
    res.json(result);
  } catch (error) {
    res.json({ message: "error" });
  }
}

export async function stateById(req, res) {
  const { id } = req.params;
  try {
    const result = await db('states').where({ id });
    res.json(result);
  } catch (error) {
    res.json({ message: "error" });
  }
}
