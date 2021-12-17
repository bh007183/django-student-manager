# Generated by Django 4.0 on 2021-12-17 18:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='assignment',
            old_name='subject',
            new_name='subject_id',
        ),
        migrations.RenameField(
            model_name='grade',
            old_name='assignment',
            new_name='assignment_id',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='classes',
            new_name='classes_id',
        ),
        migrations.RenameField(
            model_name='subject',
            old_name='classes',
            new_name='classes_id',
        ),
        migrations.RenameField(
            model_name='subject',
            old_name='student',
            new_name='student_id',
        ),
    ]
