# Generated by Django 2.2 on 2019-12-05 17:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meridianoTickets', '0003_codigosparos_ticket'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Ticket',
        ),
    ]