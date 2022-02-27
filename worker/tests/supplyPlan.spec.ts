import { test, expect } from '@playwright/test';
import type {SupplyPlan} from '@/crawling/youth2030/supplyPlan';
import crawling from '@/crawling/youth2030/supplyPlan';
import {FIRST_CONTENT} from '../src/constant/supplyPlan.spec.constants';


test.describe('supplyPlan', () => {
    let supplyPlan: SupplyPlan[];

    test.beforeEach(async () => {
        supplyPlan = await crawling();
    });

    test('첫번째 값이 일치한다.', () => {
        expect(supplyPlan[0]).toEqual(FIRST_CONTENT);
    });
})