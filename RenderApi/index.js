
import express from 'express';
import dotenv from 'dotenv';
import renderApi from '@api/render-api';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

renderApi.auth(process.env.RENDER_API_KEY);

app.get('/', (req, res) => {
    res.send('Render API Server is running');
});

app.get('/services', async (req, res) => {

    if (!process.env.SERVICES_ACCESS_KEY ||
        req.headers['x-access-key'] !== process.env.SERVICES_ACCESS_KEY) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }

    try {
        const { data } = await renderApi.listServices({
            includePreviews: 'true',
            limit: '20'
        });

        res.json(data.map(({ service }) => ({
            name: service.name,
            type: service.type
        })));
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            error: 'Failed to fetch services'
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
