from django.db import models


class Post(models.Model):
    title       = models.CharField(max_length=250)
    content     = models.TextField()
    date        = models.CharField(max_length=250)

    def __str__(self):
        return self.title