from django.urls import path
from . import views
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'notes', views.NoteViewSet)



app_name = 'notes_app' # for namespacing



urlpatterns = [
	path('', views.test, name='test'),
	path('api/', include(router.urls), name='api'),
	# path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]
