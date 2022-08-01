import db from '../database/index.js';

export async function subRegionalsIndex(req, res) {
  try {
    const result = await db('sub_regionals');
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

export async function subRegionalsById(req, res) {
  const { id } = req.params;
  try {
    const result = await db('sub_regionals').where("sub_regional_regionals_id", id);
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

