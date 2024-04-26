from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse


def ussd_extract(text):
  # blacklist = ['1', '2', '6', '*']
  # for character in blacklist:
  #   user_text = text.replace(character, '')
  user_text = text.split("*")[-1]
  return user_text


def last_response(text):
  txt = text.split("*")[-1]
  if type(txt) == int:
    return text
  else:
    return txt

@csrf_exempt
def index(request):
  if request.method == 'POST':
    session_id = request.POST.get('sessionId')
    service_code = request.POST.get('serviceCode')
    phone_number = request.POST.get('phoneNumber')
    text = request.POST.get('text')
    print(text, type(text))
    
    # if text_response == '':
    #   text=''
    # else:
    #   text = last_response(text_response)
    #   print(text, type(text))
  

    response = ""
    if text == "":
      response = "CON Welcome to our News subscription service \n"
      response += "1. First Aid \n"
      response += "2. Uber Driver \n"
      response += "3. Nearest Hospital  \n"
    elif text == "1":
      response = "CON Select the current situation \n"
      response += "1. Car Accident \n"
      response += "2. Fracture \n"
      response += "3. Pains(Body Pain, Stomach Ache or Head Ache) \n"
      response += "4. Snake Bite \n"
      response += "5. Electric Shock \n"
      response += "6. Others\n"
    if text == "1*6":
      if text.split("1*6")[1] == '':
        response = "CON enter the situation"
      elif text.split("1*6")[1] != '':
        response = 'CON gpt will respond'
    return HttpResponse(response)
  elif request.method == "GET":
    return HttpResponse("LADIPO IS A FOWL")
  