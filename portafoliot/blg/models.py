from django.db import models
from django.utils import timezone

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    url = models.URLField(max_length=200, default="https://www.ejemplo.com")
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title