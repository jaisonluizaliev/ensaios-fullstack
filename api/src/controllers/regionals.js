import db from '../database/index.js';

export async function regionalIndex(req, res) {
  try {
    const result = await db('regionals');
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

export async function regionalById(req, res) {
  const { id } = req.params;
  try {
    const result = await db('regionals').where({ id });
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}


export async function regionalAndState (req, res) {
  try {
    const result = await db('states')
      .join('regionals', 'states.id', 'regionals.state_id')
      .select('states.state_name', 'regionals.*');
    res.json(result)
  } catch (error) {
    res.json({ message: error });
    
  }
}