# youth2030-myhome

위치 기반 청년주택 조회 사이트  

## 개요
자신이 지정한 위치 기반으로 청년주택을 조회할 수 있는 웹사이트  

<br>

## 실행 방법
### dev
```
docker compose -f docker-compose.dev.yml up -d
```
### production
```
docker compose docker-compose.yml up -d
```

도커 컨테이너 생성 후 잠시 기다렸다가 브라우저로 `localhost:4000` 접속

<br>


## 개발 현황


### 2022/02/12
개발환경 세팅 완료
- **Frontend** : Nuxt.js
- **Backend** : Next.js  
- **Nginx** : 리버스 프록시 이용하여 nginx에만 SSL 적용 예정
- **Docker** : develop, production 분리