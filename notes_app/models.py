from django.db import models
from datetime import datetime
from django.utils import timezone

class Note(models.Model):
	text = models.TextField(blank=True, null=True)
	timestamp = models.DateTimeField(default=datetime.now())
	is_done = models.BooleanField(default=False, blank=True)

	def __str__(self):
		return str(self.text)
