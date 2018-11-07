# Generated by Django 2.1 on 2018-11-06 23:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(default=datetime.datetime(2018, 11, 6, 23, 57, 5, 53332))),
                ('is_done', models.BooleanField(blank=True, default=False)),
            ],
        ),
    ]
