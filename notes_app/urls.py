from django.urls import path
from . import views
from django.conf.urls import url, include
from rest_framework import routers
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'notes', views.NoteViewSet)



app_name = 'notes_app' # for namespacing



urlpatterns = [
	path('', views.test, name='test'),
	path('api/', include(router.urls), name='api'),
	# path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
	path('notes/', TemplateView.as_view(template_name='notes_app/notes.html'), name='notes'),

]
