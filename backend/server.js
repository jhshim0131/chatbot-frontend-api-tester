const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// API 엔드포인트 설정
app.get('/trigger/hsptz/lvng/today/meal', async (req, res) => {
    try {
        const { apiUrl } = req.body; // 요청에서 외부 API URL 추출
        const response = await axios.get(apiUrl || '/dfd/api/hsp/few/v1/hsptlz/lvng/meal?hspId=9&usrId=109&mealDate=2024-11-08'); // 외부 API 호출
        res.json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ success: false, message: 'Failed to fetch external API' });
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
