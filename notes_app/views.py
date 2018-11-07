from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows Note instances to be viewed or edited.
	"""
	queryset = Note.objects.all()
	serializer_class = NoteSerializer



def test(request):
	return HttpResponse('ok')
