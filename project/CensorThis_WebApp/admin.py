from django.contrib import admin
from CensorThis_WebApp.models import Censor

class CensorAdmin(admin.ModelAdmin):
    pass

admin.site.register(Censor, CensorAdmin)
