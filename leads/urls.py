from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name='home' ),
    path('api/lead/', views.LeadListCreate.as_view() ),

    
    ]
