from django.shortcuts import render
from .chatgpt import OpenAIModel

from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from backend.settings import PRIVATE_API_KEY
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView

LLM = OpenAIModel(api_key=PRIVATE_API_KEY)#add api key

@api_view(['POST'])
def emergency_response(request):
    emergency = request.POST.get('emergency_type')
    response = LLM.generate_emergency_response(emergency)

    return Response({'response':response})

@api_view(['POST'])
def chat_response(request):
    user_prompt = request.POST.get('message')
    response = LLM.generate_chat_response(user_prompt)
    return Response({'response':response})