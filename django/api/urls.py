from django.urls import path
from . import views

urlpatterns = [
    path('emergency_response/', views.emergency_response),
    path('chat_response/', views.chat_response),
    path('test/', views.test_api)
]