import { test, expect } from '@playwright/test';
import SupplyPlan from '../src/crawling/youth2030/supplyPlan';


test.describe('supplyPlan', () => {


    test('첫번째 값이 일치한다.', async () => {
        const FIRST_CONTENT = {
            location: {
                year: 2019,
                num: 1,
                address: '광진구 구의동 587-64',
                nearBySubway: '강변역'
            },
            supplyCount: { total: 84, public: 18, private: 66 },
            constructionPlan: {
                noticeDate: { public: '2019.08.29', private: '2019.08.29.' },
                moveInDate: '2020.04.'
            },
            architects: '㈜옥산종합건축'
        };
        const supplyPlan = await SupplyPlan();

        expect(supplyPlan[0]).toEqual(FIRST_CONTENT);
    });
})