# Generated by Django 2.1 on 2019-12-11 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meridianoTickets', '0006_remove_ticket_estacerrado'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='estaCerrado',
            field=models.BooleanField(blank=True, default=False),
            preserve_default=False,
        ),
    ]
