# Generated by Django 3.1.3 on 2020-11-08 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CensorThis_WebApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='censor',
            name='toCensor',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]