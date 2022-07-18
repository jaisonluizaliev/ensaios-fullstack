import db from "../database/index.js";


export async function sectorIndex(req, res) {
  try {
    const result = await db('sectors');
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

export async function sectorById(req, res) {
  const { id } = req.params;
  try {
    const result = await db('sectors').where({ id });
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

// export async function regionalAndState(req, res) {
//   try {
//     const result = await db('states')
//       .join('regionals', 'states.id', 'regionals.state_id')
//       .select('states.state_name', 'regionals.*');
//     res.json(result);
//   } catch (error) {
//     res.json({ message: error });
//   }
// }
