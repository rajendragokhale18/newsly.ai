// /pages/api/register.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    // TODO: Add logic to save in database & hash password
    
    return res.status(200).json({ message: 'User registered successfully!' });
  }
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
