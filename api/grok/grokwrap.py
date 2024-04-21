import asyncio
import sys
import xai_sdk
import os

os.environ['XAI_API_KEY'] = 'Eh97MbeIZ4p4UjhF4D8JVyTRAZm7oErMkdePDVi1jWzNYWPq47XPUFWgqcBd0Ysa7bfaAwrHZCVxK+pzGSVBaXUvHmKzZ8F34vsqwtDpI3hKBCf3rhIz/Obwir0obKZ9PQ'

class GrokWrapper:
      def __init__(self):
          self.client = xai_sdk.Client()
          self.grok = self.client.grok

      async def chat(self, input_text):
          conversation = self.grok.create_conversation()
          print("New conversation created.")

          token_stream, _ = conversation.add_response(input_text)
          print("Grok: ", end="")
          response = ""
          async for token in token_stream:
              response += token
              sys.stdout.flush()
          print("\n")
          return response.strip()

async def main():
      wrapper = GrokWrapper()
      input_text = input("Enter your message: ")
      response = await wrapper.chat(input_text)
      print("Grok's response:", response)

if __name__ == "__main__":
      asyncio.run(main())