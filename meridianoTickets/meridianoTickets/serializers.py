
from .models import User, Ticket, CodigosParos
from rest_framework import routers, serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ticket
        fields='__all__'

class CodigosParosSerializer(serializers.ModelSerializer):
    class Meta:
        model=CodigosParos
        fields='__all__'

    