import asyncio
import xai_sdk
import os
os.environ['XAI_API_KEY'] = 'Eh97MbeIZ4p4UjhF4D8JVyTRAZm7oErMkdePDVi1jWzNYWPq47XPUFWgqcBd0Ysa7bfaAwrHZCVxK+pzGSVBaXUvHmKzZ8F34vsqwtDpI3hKBCf3rhIz/Obwir0obKZ9PQ'
PREAMBLE = """\
This is a conversation between a human user and a highly intelligent AI. The AI's name is Grok and it makes every effort to truthfully answer a user's questions. It always responds politely but is not shy to use its vast knowledge in order to solve even the most difficult problems. The conversation begins.

H: I want you to find the oldest person from a list of people. Each person is a tuple (name, age).

Please format your answer as a valid JSON. For eg. if the answer is (Bob, 50), your output should be.

{
    name: "Bob",
    age: 50
}<|separator|>

A: Understood! Please provide the list of people as a list of (name, age) pairs."""

async def get_oldest_person(people):
    """
    Given a list of (name, age) pairs, return the oldest person as a JSON-formatted string.
    """
    oldest_person = max(people, key=lambda x: x[1])
    return f"{{\"name\": \"{oldest_person[0]}\", \"age\": {oldest_person[1]}}}"

async def handle_user_input(client):
    """
    Prompt the user for a list of people, then use the get_oldest_person function to find the oldest person and print the result.
    """
    text = input("Write a message ")
    prompt = PREAMBLE + f"<|separator|>\n\nHuman: {text}<|separator|>\n\nAssistant: "
    print(prompt)

    people = eval(input("Enter a list of (name, age) pairs: "))
    oldest_person = await get_oldest_person(people)
    print(oldest_person)

async def main():
    """
    Set up the XAI SDK client and handle user input.
    """
    client = xai_sdk.Client()
    sampler = client.sampler
    await handle_user_input(sampler)

if __name__ == '__main__':
    asyncio.run(main())