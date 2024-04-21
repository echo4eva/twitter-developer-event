import asyncio
import sys
import xai_sdk
import os

os.environ['XAI_API_KEY'] = 'Eh97MbeIZ4p4UjhF4D8JVyTRAZm7oErMkdePDVi1jWzNYWPq47XPUFWgqcBd0Ysa7bfaAwrHZCVxK+pzGSVBaXUvHmKzZ8F34vsqwtDpI3hKBCf3rhIz/Obwir0obKZ9PQ'

class GrokWrapper:
    def __init__(self):
        self.client = xai_sdk.Client()
        self.grok = self.client.grok

    async def chat(self):
        conversation = self.grok.create_conversation()
        print("New conversation created.")

        print("Enter an empty message to quit.\n")

        while True:
            user_input = input("Human: ")
            print("")

            if not user_input:
                print("Thank you for chatting with Grok. Goodbye!")
                return

            token_stream, _ = conversation.add_response(user_input)
            print("Grok: ", end="")
            async for token in token_stream:
                print(token, end="")
                sys.stdout.flush()
            print("\n")

async def main():
    wrapper = GrokWrapper()
    await wrapper.chat()

if __name__ == "__main__":
    asyncio.run(main())