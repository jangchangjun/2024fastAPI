# 2024fastApi


## fast api를 이용한 붓꽅분류, 영화추천시스템 제작


<div align=center> 
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> 
  <br>
    <img src=https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi>
  <img src=https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white>

  <br>
  
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 


  <br>

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

# 붓꽃분류시스템

- iris 데이터셋을 이용한 붓꽃 분류 시스템

<div><image src="image/과제1.png"></div><br/>

붓꽃 분류 프로그램을 만든 뒤, 입력 받은 값이 어떤 붓꽃일지 예측하고 그 예측값이 각 붓꽃의 종류에 얼마나 부합하는지를 아래 파이차트를 이용해 퍼센테이지로 표현함.


개발환경
<br/>
certifi==2024.2.2
charset-normalizer==3.3.2
colorama==0.4.6
filelock==3.13.1
fsspec==2024.2.0
huggingface-hub==0.21.4
idna==3.6
joblib==1.3.2
numpy==1.26.4
packaging==24.0
pandas==2.2.1
python-dateutil==2.9.0.post0
pytz==2024.1
PyYAML==6.0.1
regex==2023.12.25
requests==2.31.0
scikit-learn==1.4.1.post1
scipy==1.12.0
six==1.16.0
threadpoolctl==3.3.0
tokenizers==0.12.1
torch==1.12.1
tqdm==4.66.2
transformers==4.21.2
typing_extensions==4.10.0
tzdata==2024.1
urllib3==2.2.1

# 영화추천시스템

- 무작위 영화 10개 추천
  
<div><image src="image/poster.png"></div><br/>

위 사진은 imdb를 이용해 영화 정보를 얻은 뒤, 무작위로 10개의 영화를 추천하여 포스터를 누를 시 그 영화 정보 사이트로 넘어가도록 만든 프로그램이다.

- 장르별 영화 10개 추천

<div><image src="image/comdey.png"></div><br/>

그 후 각 장르별 영화 10개 추천 프로그래밍을 더하였다.<br/>
각 장르를 받아온 뒤, 사용자에게 특정 장르값을 입력받아 그 장르거 포함되어있는 영화를 10개 추천해주도록 프로그래밍 되어있으며, 위 사진은 장르를 코미디로 받은 결과이다.


개발환경
<br>
annotated-types==0.6.0
anyio==4.3.0
certifi==2024.2.2
charset-normalizer==3.3.2
click==8.1.7
colorama==0.4.6
exceptiongroup==1.2.0
fastapi==0.110.0
h11==0.14.0
idna==3.6
implicit==0.7.2
numpy==1.26.4
pandas==2.2.1
pydantic==2.6.4
pydantic_core==2.16.3
python-dateutil==2.9.0.post0
pytz==2024.1
requests==2.31.0
scipy==1.12.0
six==1.16.0
sniffio==1.3.1
starlette==0.36.3
threadpoolctl==3.4.0
tqdm==4.66.2
typing_extensions==4.10.0
tzdata==2024.1
urllib3==2.2.1
uvicorn==0.28.1

