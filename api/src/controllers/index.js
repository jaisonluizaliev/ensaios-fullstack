export function index(req, res) {
  try {
    res.json({ body: 'any', jilso: ["a", "b", "c"], obje: {
      objetcc: {
        hello: 'oi'
      }
    } });
  } catch (error) {
    res.send(error);
  }
}
