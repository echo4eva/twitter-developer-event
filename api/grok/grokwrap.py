import asyncio
import xai_sdk
import asyncio
import sys
import xai_sdk
import os
os.environ['XAI_API_KEY'] = 'Eh97MbeIZ4p4UjhF4D8JVyTRAZm7oErMkdePDVi1jWzNYWPq47XPUFWgqcBd0Ysa7bfaAwrHZCVxK+pzGSVBaXUvHmKzZ8F34vsqwtDpI3hKBCf3rhIz/Obwir0obKZ9PQ'

class GrokWrapper:
      def __init__(self):
          self.client = xai_sdk.Client()
          self.grok = self.client.grok
          self.conversation = None

      async def create_conversation(self):
          self.conversation = self.grok.create_conversation()
          print("New conversation created.")

      async def chat(self):
          if self.conversation is None:
              print("Please create a conversation first.")
              return

          print("Enter an empty message to quit.\n")

          while True:
              user_input = input("Human: ")
              print("")

              if not user_input:
                  return

              token_stream, _ = self.conversation.add_response(user_input)
              print("Grok: ", end="")
              async for token in token_stream:
                  print(token, end="")
                  sys.stdout.flush()
              print("\n")

      async def generate_title(self):
          if self.conversation is None:
              print("Please create a conversation first.")
              return

          print("Generating title...")
          title = await self.conversation.generate_title()
          print(f"Title: {title}")

async def main():
      wrapper = GrokWrapper()

      print("Welcome to Grok Wrapper!")
      print("1. Create a new conversation")
      print("2. Chat with Grok")
      print("3. Generate conversation title")
      print("4. Quit")

      while True:
          choice = input("Enter your choice (1-4): ")

          if choice == "1":
              await wrapper.create_conversation()
          elif choice == "2":
              await wrapper.chat()
          elif choice == "3":
              await wrapper.generate_title()
          elif choice == "4":
              print("Thank you for using Grok Wrapper. Goodbye!")
              break
          else:
              print("Invalid choice. Please try again.")

if __name__ == "__main__":
      asyncio.run(main())