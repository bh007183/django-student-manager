# Generated by Django 4.0 on 2022-01-17 19:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0004_alter_class_user_delete_userprofile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grade',
            name='assignment',
        ),
        migrations.RemoveField(
            model_name='subject',
            name='classes',
        ),
        migrations.RemoveField(
            model_name='subject',
            name='student',
        ),
        migrations.DeleteModel(
            name='Assignment',
        ),
        migrations.DeleteModel(
            name='Grade',
        ),
        migrations.DeleteModel(
            name='Subject',
        ),
    ]
