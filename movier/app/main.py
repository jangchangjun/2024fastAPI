from typing import Optional

import pandas as pd
from fastapi import FastAPI, Query
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from typing_extensions import List

from resolver import random_genres_items, random_items
from recommender import item_based_recommendation,user_based_recommendation

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello 장창준 영화추천 서비스"}

@app.get("/all/")
async def all_movies():
    result = random_items()
    return {'result':result}

@app.get("/genres/{genre}")
async def genre_movies(genre:str):
    result = random_genres_items(genre)
    return {"result": result}

@app.get("/item-based/{item_id}")
async def item_based(item_id: str):
    result = item_based_recommendation(item_id)
    return {"result": result}


@app.get("/user-based/")
async def user_based(params: Optional[List[str]] = Query(None)):
    input_ratings_dict = dict(
        (int(x.split(":")[0]), float(x.split(":")[1])) for x in params
    )
    result = user_based_recommendation(input_ratings_dict)
    return {"result": result}




#quert parameter 실습
@app.get("/weather/")
async def weather(q: Optional [List[str]]=Query(None), units:str='today'):
    print(q)
    print(units)
    q_dict = dict((x.split(":")[0], float(x.split(":")[1]))for x in q)
    print(q_dict)
    return {"result":f'q={q}:units={units}'}

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)