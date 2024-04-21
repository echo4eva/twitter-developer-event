import asyncio
import xai_sdk
import os

os.environ['XAI_API_KEY'] = 'Eh97MbeIZ4p4UjhF4D8JVyTRAZm7oErMkdePDVi1jWzNYWPq47XPUFWgqcBd0Ysa7bfaAwrHZCVxK+pzGSVBaXUvHmKzZ8F34vsqwtDpI3hKBCf3rhIz/Obwir0obKZ9PQ'

class GrokWrapper:
    def __init__(self):
        self.client = xai_sdk.Client()
        self.grok = self.client.grok

    async def ask_question(self, question):
        conversation = self.grok.create_conversation()
        token_stream, _ = conversation.add_response(question)
        response = ""
        async for token in token_stream:
            response += token
        return response.strip()

async def main():
    wrapper = GrokWrapper()
    question = input("Enter your question: ")
    response = await wrapper.ask_question(question)
    print("Grok's response:", response)

if __name__ == "__main__":
    asyncio.run(main())