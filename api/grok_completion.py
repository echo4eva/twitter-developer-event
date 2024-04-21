import asyncio
from fastapi import FastAPI, Query
from grok.grokwrap import GrokWrapper as ChatGrokWrapper
from grok.grok_single_question import GrokWrapper as QuestionGrokWrapper

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Welcome to the Grok API!"}

@app.api_route("/api/grok", methods=["GET", "POST"])
async def grok_endpoint(
    chat: bool = Query(True, description="Flag to enable chat mode"),
    question: bool = Query(False, description="Flag to enable one-question mode"),
    input_text: str = Query(..., description="Input text for the selected Grok method")
):
    if chat:
        wrapper = ChatGrokWrapper()
        response = await wrapper.chat(input_text)
    elif question:
        wrapper = QuestionGrokWrapper()
        response = await wrapper.ask_question(input_text)
    else:
        return {"error": "Invalid mode. Please specify either chat or question mode."}

    return {
        "mode": "chat" if chat else "question",
        "input": input_text,
        "response": response
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)