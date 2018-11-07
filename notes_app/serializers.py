from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.HyperlinkedModelSerializer):
	url = serializers.HyperlinkedIdentityField(view_name="notes_app:note-detail")

	class Meta:
		model = Note
		fields = ('__all__')
