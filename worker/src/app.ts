// import crawling from './crawling/constructionPlan';
import crawling from './crawling/youth2030';
import schedule from 'node-schedule';

// 토지주택공사 크롤링은 데이터 업데이트 주기가 길다.
// 그래서 업데이트 날짜를 비교해가며 하루에 한번씩 토지주택공사 사이트 들어가서 파일이 최신화가 되어있는지 확인
// 업데이트날짜가 다를때만 파일 다운받아서 업데이트

// schedule.scheduleJob('0 0 * * *', crawling);

crawling();

// 아직은 파일 다운받는것까지밖에 안되어있음
// 1. 디비에 업데이트날짜, 공사예정주택 데이터 계속 가지고 있어야하고
// 2. 파일 업데이트될 때마다 디비에 업데이트해주어야함
// etc) 파일 압축풀고 디비에 넣어야함... zip파일로 되어있음, 저장위치와 저장될때의 파일이름도 바꿔야할듯

//
