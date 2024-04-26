import openai

class OpenAIModel:
    def __init__(self, api_key):
        openai.api_key = api_key
        self.emergency_prompts = {
            "fire": "There is a fire in my building, what should I do?",
            "medical": "I need medical assistance, what should I do?",
            "police": "I need police assistance, what should I do?",
        }

        #self.qa = 'Q: What would you like to know about emergencies'

    #{"emergency_type":"fire"} this is just a test
    def generate_completion(self, messages, max_tokens=50):
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=max_tokens
        )

        return response.choices[0].message.content

    def generate_emergency_response(self, emergency_type):
        prompt = [
            #will add when I'm sure {"role":"user", "content":self.emergency_prompts.get(emergency_type, "I'm sorry, I didn't understand that.")}
            {"role":"user", "content":"give me guidelines to survive a fire outbreak"}
            ]
        return self.generate_completion(prompt, max_tokens=100)
        
    
    def generate_chat_response(self, user_prompt):
        messages = [
            {"role":"user", "content":"provide me with emergency advice"},
            {"role":"system", "content":"there are many kinds of emergencies"}
        ]
        messages.append({"role":"user", "content":user_prompt})
        response = self.generate_completion(messages)

        messages+=response
        return response