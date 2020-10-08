from django.urls import path

#api and routers

from  rest_framework import routers
from .api  import LeadViewSet

r = routers.DefaultRouter()
r.register('api/leads',LeadViewSet,'leads')

urlpatterns = r.urls


