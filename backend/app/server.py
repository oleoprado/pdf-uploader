import uvicorn


def init_server():
    uvicorn.run("api:app", port=3333, reload=True)
