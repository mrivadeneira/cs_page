from django.urls import path, include
from .api import LogoutAPI, RegisterAPI, LoginAPI, UserAPI

urlpatterns = [
    path('api/auth', include('rest_framework.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', LogoutAPI.as_view()),
]
