import React, { useState, useEffect } from 'react';

function HospitalizationLivingTodayMeal() {
    const [data, setData] = useState(null); // API 결과 저장
    const [error, setError] = useState(null); // 에러 상태 저장
    const [loading, setLoading] = useState(true); // 로딩 상태 저장

    const localTestUrl = 'http://localhost:8081/dfd/api/hsp/few/v1/hsptlz/lvng/meal?hspId=9&usrId=109&mealDate=2024-11-08'; // 로컬 테스트용 API URL
    const devUrl = 'https://karechat-hsp-yumc-dev.kakaohealthcare.com/dfd/api/hsp/few/v1/hsptlz/lvng/meal?hspId=9&usrId=109&mealDate=2024-11-08';
    const url = 'https://46a3e800-0549-4a73-af78-ff4b0960636d.mock.pstmn.io/dfd/api/if/his/H51';

    useEffect(() => {
        // 페이지 로드 시 API 호출

        fetch(url) // API URL 변경
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then((json) => {
                setData(json); // 결과 저장
                setLoading(false); // 로딩 상태 업데이트
            })
            .catch((err) => {
                setError(err.message); // 에러 저장
                setLoading(false); // 로딩 상태 업데이트
            });
    }, []);

    if (loading) return <p>Loading...</p>; // 로딩 중 표시
    if (error) return <p>Error: {error}</p>; // 에러 메시지 표시

    return (
        <div style={{ padding: '20px' }}>
            <h1>API Result</h1>
            <pre style={{ background: '#f4f4f4', padding: '10px', textAlign: 'left' }}>
                {JSON.stringify(data, null, 2)} {/* JSON 결과 Pretty Print */}
            </pre>
        </div>
    );
}

export default HospitalizationLivingTodayMeal;
