from django.db import models

class Censor(models.Model):
    toCensor = models.CharField(max_length=30, unique=True)
    censorWith = models.CharField(max_length=30)
